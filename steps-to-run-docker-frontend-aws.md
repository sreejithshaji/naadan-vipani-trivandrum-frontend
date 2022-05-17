sudo docker build -t html-server-image:v1 .

sudo docker run -d -p 80:80 html-server-image:v1

To take it down stop running image using docker stop command 