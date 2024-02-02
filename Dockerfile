FROM node:latest

RUN npm install -g @vue/cli

COPY package*.json ./

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 8000  3000 8080

CMD [ "npm", "run", "serve" ]