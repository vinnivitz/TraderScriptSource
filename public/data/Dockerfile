FROM debian:stable-slim
RUN apt-get update
RUN apt-get install -y curl dpkg psmisc apt-transport-https
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install nodejs -y
RUN printf '#!/bin/sh\nexit 0' > /usr/sbin/policy-rc.d
RUN curl -O https://dl.influxdata.com/influxdb/releases/influxdb2-2.0.8-amd64.deb
RUN curl -O https://dl.influxdata.com/telegraf/releases/telegraf_1.20.2-1_amd64.deb
RUN dpkg -i influxdb2-2.0.8-amd64.deb
RUN dpkg -i telegraf_1.20.2-1_amd64.deb
RUN touch /home/server-log.txt
RUN rm influxdb2-2.0.8-amd64.deb
RUN rm telegraf_1.20.2-1_amd64.deb
COPY lineprotocol-parser.js /home
COPY script-parser.js /home
COPY lib /home/lib
COPY run.sh /home
COPY watch.sh /home
RUN mkdir -p /home/dashboard/assets
COPY dashboard/* /home/dashboard/
COPY dashboard-server.js /home
RUN mkdir /home/license
COPY LICENSE.txt /home/license
RUN chmod +x /home/run.sh
RUN chmod +x /home/watch.sh