FROM node:16-buster

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY index.js ./

EXPOSE 8080

CMD [ "node", "index.js" ]
