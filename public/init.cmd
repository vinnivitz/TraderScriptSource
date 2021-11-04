@echo off
cd data
set docker_image=
set /p docker_image=Enter a name for the docker image [trading-coach]:
if "x%docker_image%x" == "xx" set docker_image=trading-coach
docker build -t %docker_image% .
xcopy /s startup.cmd ..\
rmdir /s /q ..\data
del init.cmd
del init.sh