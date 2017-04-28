#!/bin/sh
#This script will propt the user to close programs they have open

pid=$(lsof -i:5000 -t) 

if [ pid != "" ]; then
	name=cat /proc/$pid/cmdline

	echo "Would you like to close $name ?"

	read answer

	if (answer=="y"); then
			kill -TERM $pid || kill -KILL $pidt
	else
			echo "Closing script"
	fi
fi
