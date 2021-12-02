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

curl -X GET $URL --cookie session=$SESSION -o input/$DAY.txt;

exit;
