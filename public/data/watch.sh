#!/bin/bash
FILE=/home/config.txt
if [ -f "$FILE" ]; then
    LTIME=$(stat -c %Z /home/config.txt)
    while true; do
        ATIME=$(stat -c %Z /home/config.txt)
        if [[ "$ATIME" != "$LTIME" ]]; then
            LTIME=$ATIME
            killall node -q
            killall telegraf -q
            node /home/script-parser.js &
        fi
        sleep 1
    done
fi
