FROM node:16

WORKDIR /server

COPY package-lock.json package.json ./

COPY index.js ./

RUN npm install --omit=dev

CMD [ "npm", "start" ]