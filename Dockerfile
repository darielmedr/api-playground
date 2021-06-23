FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# package.json AND package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "node", "./dist/app.js" ]