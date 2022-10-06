FROM node:alpine

WORKDIR /var/mynode

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]