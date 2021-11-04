#!/bin/bash

remove_running_container() {
  # stop and remove docker container if extsts
  clear
  echo "Cleaning up..."
  running_container=$(docker inspect --format="{{ .State.Running }}" $docker_container 2>/dev/null)

  if [ $? != 1 ]; then
    docker rm --force $docker_container >/dev/null
  fi
  clear
}

clear

echo "========================================================="
echo "========================================================="
echo "===== WELCOME TO THE TRADING-COACH SETUP ASSISTANT! ====="
echo "====== PLEASE FOLLOW THE STEPS FOR A QUICK SETUP! ======="
echo "========================================================="
echo "========================================================="
echo ""
read -p "Press Enter to continue..."
clear

read -p "Please input the local influxdb web ui port [8086]:" influx_port
influx_port=${influx_port:-8086}
clear

read -p "Please input the path of the directory where InfluxDB data will be persisted [$HOME/.influxdata]:" influx_data
influx_data=${influx_data:-"$HOME/.influxdata"}
clear

read -p "Please input the the path of your script file. [$HOME/input.txt]:" script_file_path
script_file_path="${script_file_path:-$HOME/"input.txt"}/"
clear

read -p "Please input the local trading coach dashboard web ui port [4200]:" dashboard_port
dashboard_port=${dashboard_port:-4200}
clear

read -p "Please type the name for the docker image [trading-coach]:" docker_image
docker_image=${docker_image:-trading-coach}
clear

read -p "Please type a name for the docker project [trading-coach]:" docker_container
docker_container=${docker_container:-trading-coach}
clear

read -p "Do you already setup your InfluxDB account? [y/n]:" setup_influx
setup_influx=${setup_influx:-n}
clear

remove_running_container

if [ $setup_influx == "n" ]; then
  echo "Starting InfluxDB..."
  touch server-log.txt
  docker run -p $influx_port:8086 -v $influx_data:/root/.influxdbv2 --name $docker_container $docker_image influxd >server-log.txt &
  sleep 1 &
  while ! grep -m1 'Listening' <server-log.txt >/dev/null; do sleep 1; done
  rm server-log.txt
  echo ""
  echo "InfluxDB started successfully!"
  echo ""
  existing_influx_account=$(curl --silent -X GET http://localhost:$influx_port/api/v2/setup | grep "allowed")
  if [ ${existing_influx_account#*:} == "false" ]; then
    clear
    read -p "You already setup your InfluxDB account. For reset please delete the directory where InfluxDB data is persisted. Press Enter to continue..."
  else
    read -p "Enter a username: " influx_username
    influx_username=${influx_username:-admin}
    read -p "Enter a password: " influx_password
    influx_password=${influx_password:-pass}
    read -p "Enter the name of your organization: " influx_organization
    influx_organization=${influx_organization:-default}
    curl -X POST http://localhost:$influx_port/api/v2/setup -H "Content-Type: application/json" --data '{"username": "'$influx_username'", "password": "'$influx_password'", "org": "'$influx_organization'", "bucket": "default_bucket"}' >/dev/null
    clear
    echo "You account is setup successfully!"
    echo "Press Enter to continue..."
    read -p ""
  fi
fi
remove_running_container

echo "Starting program..."

docker run -p $influx_port:8086 -p $dashboard_port:4200 -v $influx_data:/root/.influxdbv2 -v $script_file_path:/home/input.txt --name $docker_container --add-host host.docker.internal:host-gateway $docker_image /home/run.sh
