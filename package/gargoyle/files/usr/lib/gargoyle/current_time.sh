#!/bin/sh

specifictime="$1"
[ -n "$specifictime" ] && specifictime="-d @$specifictime"

dateformat=$(uci get gargoyle.global.dateformat 2>/dev/null)
if [ "$dateformat" == "iso" ]; then
	current_time=$(date $specifictime "+%Y/%m/%d %H:%M %Z")
elif [ "$dateformat" == "iso8601" ]; then
	current_time=$(date $specifictime "+%Y-%m-%d %H:%M %Z")
elif [ "$dateformat" == "hungary" ]; then
	current_time=$(date $specifictime "+%Y.%m.%d %H:%M %Z")
elif [ "$dateformat" == "australia" ]; then
	current_time=$(date $specifictime "+%d/%m/%y %H:%M %Z")
elif [ "$dateformat" == "russia" ]; then
	current_time=$(date $specifictime "+%d.%m.%Y %H:%M %Z")
elif [ "$dateformat" == "argentina" ]; then
	current_time=$(date $specifictime "+%d/%m/%Y %H:%M %Z")
else
	current_time=$(date $specifictime "+%D %H:%M %Z")
fi
timezone_is_utc=$(uci get system.@system[0].timezone | grep "^UTC" | sed 's/UTC//g')
if [ -n "$timezone_is_utc" ] ; then
	current_time=$(echo $current_time | sed "s/UTC/UTC-$timezone_is_utc/g" | sed 's/\-\-/+/g')
fi
echo "var currentTime = \"$current_time\";"
