
FROM node:lts-slim

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g http-server

COPY out ./

EXPOSE 3000

CMD ["http-server", ".", "-p", "3000"]