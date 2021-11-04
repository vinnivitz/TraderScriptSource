#!/bin/bash
FILE=/home/input.txt
if [ -f "$FILE" ]; then
    LTIME=$(stat -c %Z /home/input.txt)
    while true; do
        ATIME=$(stat -c %Z /home/input.txt)
        if [[ "$ATIME" != "$LTIME" ]]; then
            LTIME=$ATIME
            killall node -q
            killall telegraf -q
            node /home/script-parser.js &
        fi
        sleep 1
    done
fi
