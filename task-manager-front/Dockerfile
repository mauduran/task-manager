FROM node:12.18.1

WORKDIR /usr/src/task-manager-frontend

COPY package*.json ./

RUN npm install

COPY  ./ ./

EXPOSE 3000
CMD [ "npm", "start" ]