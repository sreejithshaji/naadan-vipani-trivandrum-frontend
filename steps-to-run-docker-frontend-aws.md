npm run build
git add . 
git commit -m " message "
git push origin master


First remove running container of frontend 

sudo docker ps 

the output will be runnin containers `html-server-image:v1 ` is our frontend docker . 
stop it by running 

sudo docker stop <CONTAINER_ID>



go to `~/horticorp-vipani/naadanvipani-frontend`

if already running project there will be a file named `naadan-vipani-trivandrum-frontend/` which is our frontend code from github


sudo rm -r naadan-vipani-trivandrum-frontend/

git clone "https://github.com/sreejithshaji/naadan-vipani-trivandrum-frontend.git" -b master


cd to the new git cloned file 

sudo docker build -t html-server-image:v1 .

sudo docker run -d -p 80:80 html-server-image:v1

To take it down stop running image using docker stop command 