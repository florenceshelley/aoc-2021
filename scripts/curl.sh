#!/bin/bash
LENGTH=${#DAY}

# Remove leading `0` or prefix a `0` to a single digit number to match repo convention
if [[ $LENGTH > 1 && $DAY =~ ^0.* ]]
  then
    INPUT=${DAY#0}
elif [[ $LENGTH == 1 ]]
  then
    INPUT=$DAY
    DAY=0$DAY
fi

URL=https://adventofcode.com/2021/day/$INPUT/input

# Download the input from the site.
# A login session must be active in order for this call to succeed.
# Sessions will not usually expire unless cookies have been cleared.
# If the session has expired, a new session value must be exported.
curl -X GET $URL --cookie session=$SESSION -o input/$DAY.txt;

exit;
