FROM nginx:alpine
COPY ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY ./build2 /usr/share/nginx/html/console