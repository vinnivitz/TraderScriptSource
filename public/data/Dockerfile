FROM debian:stable-slim
RUN apt-get update &&\
    apt-get install -y curl dpkg psmisc apt-transport-https &&\
    curl -sL https://deb.nodesource.com/setup_16.x | bash - &&\
    apt-get install nodejs -y &&\
    printf '#!/bin/sh\nexit 0' > /usr/sbin/policy-rc.d &&\
    curl -O https://dl.influxdata.com/influxdb/releases/influxdb2-2.0.8-amd64.deb &&\
    curl -O https://dl.influxdata.com/telegraf/releases/telegraf_1.20.2-1_amd64.deb &&\
    dpkg -i influxdb2-2.0.8-amd64.deb &&\
    dpkg -i telegraf_1.20.2-1_amd64.deb &&\
    touch /home/server-log.txt &&\
    rm influxdb2-2.0.8-amd64.deb &&\
    rm telegraf_1.20.2-1_amd64.deb &&\
    mkdir -p /home/dashboard/assets &&\
    mkdir /home/license
COPY lineprotocol-parser.js /home
COPY script-parser.js /home
COPY lib /home/lib
COPY run.sh /home
COPY watch.sh /home
COPY dashboard/* /home/dashboard/
COPY dashboard-server.js /home
COPY LICENSE.txt /home/license
RUN chmod +x /home/run.sh &&\
    chmod +x /home/watch.sh