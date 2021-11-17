read -p "Enter a name for the docker image [trading-coach]:" docker_image
docker_image=${docker_image:-"trading-coach"}
docker build -t $docker_image ./data
cp ./data/startup.sh .
rm -r data
rm init.sh
rm init.cmd
