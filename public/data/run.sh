#!/bin/bash
influxd>server-log.txt &
sleep 1 &
while ! grep -m1 'Listening' <server-log.txt >/dev/null; do sleep 1; done && node /home/script-parser.js & /home/watch.sh