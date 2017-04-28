#!/bin/sh
#This script will propt the user to close programs they have open

pid=$(lsof -i:5000 -t) 

if [ pid != "" ]; then

	echo "Would you like to close the application running on port 5000?"

	read answer

	if [ "$answer" == "y" ]
	then
		kill -TERM $pid || kill -KILL $pidt
	else
		echo "Closing script"
	fi
fi
