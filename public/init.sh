cd data
read -p "Enter a name for the docker image [trading-coach]:" docker_image
docker_image=${docker_image:-"trading-coach"}
docker build -t $docker_image .
cp startup.sh ../
rm -r data
rm init.sh
rm init.cmd
