@echo off
@setlocal enableextensions enabledelayedexpansion
cls
echo =========================================================
echo =========================================================
echo ===== WELCOME TO THE TRADING-COACH SETUP ASSISTANT! ======
echo ====== PLEASE FOLLOW THE STEPS FOR A QUICK SETUP! ========
echo =========================================================
echo =========================================================
set dummy=
set /p dummy=Press Enter to continue...
cls
set influx_port=
set /p influx_port=Please input the local influxdb web ui port [8086]:
if "x%influx_port%x" == "xx" set influx_port=8086
cls
set influx_data=
set /p influx_data=Please input the path of the directory where InfluxDB data will be persisted [%userprofile%\.influxdata]:
if "x%influx_data%x" == "xx" set influx_data=%userprofile%\.influxdata
cls
set script_file_path=
set /p script_file_path=Please input the the path of your script file. [%userprofile%\config.txt]:
if "x%script_file_path%x" == "xx" set script_file_path=%userprofile%\config.txt
cls
set dashboard_port=
set /p dashboard_port=Please input the local trading coach dashboard web ui port [4200]:
if "x%dashboard_port%x" == "xx" set dashboard_port=4200
cls
set docker_container=
set /p docker_container=Please type a name for the docker project [trading-coach]:
if "x%docker_container%x" == "xx" set docker_container=trading-coach
cls
set docker_image=
set /p docker_image=Please type a name for the docker project [trading-coach]:
if "x%docker_image%x" == "xx" set docker_image=trading-coach
cls
set setup_influx=
set /p setup_influx=Do you already setup your InfluxDB account? [y/n]:
if "x%setup_influx%x" == "xx" set setup_influx=n
cls
echo Cleaning up...
docker rm --force %docker_container% >nul 2>&1
break>server-log.txt
break>http-log.txt
if not "!setup_influx!"=="n" (goto :done2) else (
    echo Starting InfluxDB...
    start /b docker run -p %influx_port%:8086 -v %influx_data%:/root/.influxdbv2 --name %docker_container% %docker_image% influxd 1>server-log.txt
    :loop
    ( timeout /t 1 1>nul ping -n 1 localhost ) 2>nul
    for /f "tokens=2 delims= " %%R in ('findstr /i "Listening" server-log.txt') do set log_output=%%R
    if not "!log_output!" == "" (goto done) else (goto loop)
    :done
    curl http://localhost:8086/api/v2/setup 1>http-log.txt
    set /a counter=0
    for /f "usebackq delims= eol=" %%a in (http-log.txt) do (
    if "!counter!"=="2" goto :done3
    set http_response=%%a
    set /a counter+=1)
    :done3
    cls
    echo InfluxDB started successfully!
    echo %http_response% | findstr /C:"true" >nul
    if %errorlevel% == 1 (
        echo You already setup your InfluxDB account. For reset please delete the directory where InfluxDB data is persisted.
        set continue=
        set /p continue=Press Enter to continue...
        cls
        goto :done2
    ) else (
        set influx_username=
        set /p influx_username=Enter username: 
        set influx_password=
        set /p influx_password=Enter password: 
        set influx_org=
        set /p influx_org=Enter the name of your organization: 
        (
            echo {
            echo "username": "!influx_username!", "password": "!influx_password!", "org": "!influx_org!", "bucket": "default_bucket"
            echo }
        ) > influx.json
        curl -X POST -H "Content-Type: application/json" -d @influx.json http://localhost:8086/api/v2/setup >nul 2>&1
        del influx.json
        echo Your account is setup successfully!
    )
)
:done2
echo Starting program...
docker rm --force !docker_container! >nul 2>&1
del server-log.txt
del http-log.txt
docker run -e INFLUX_DOCKER=true -p %influx_port%:8086 -p %dashboard_port%:3000 -v %influx_data%:/root/.influxdbv2 -v %script_file_path%:/home/config.txt --name %docker_container% --add-host host.docker.internal:host-gateway %docker_image% /home/run.sh
