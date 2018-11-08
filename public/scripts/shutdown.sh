#!/bin/sh

if [ -e /opt/nodeapp ]; then
	# docker
	appid=$app_id
	cd /opt/nodeapp
else
	# vm
	cd $(dirname $BASH_SOURCE)
	cd ..
	appid=$(basename $(pwd))
	cd current
fi

appname=node-app-$appid

pm2 delete $appname
pm2 dump
