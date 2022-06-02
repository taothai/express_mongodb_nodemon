FROM node:17.0.1-alpine3.12

WORKDIR /app

RUN npm install nodemon -g

COPY package*.json ./
RUN npm install


EXPOSE 4000
CMD ["nodemon", "index.js"]
