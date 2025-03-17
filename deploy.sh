#!/bin/bash

echo "Admin App Deployement Started..."

git checkout package-lock.json

git pull origin master

rm -rf node_modules dist

npm cache clean --force

npm install

tsc && vite build

echo "Admin App Deployement Completed..."