FROM node:6-slim

COPY . /My-Site
COPY package.json /My-Site/package.json
COPY .env.example /My-Site/.env.example

WORKDIR /My-Site

ENV NODE_ENV production
RUN npm install --production

CMD ["npm","start"]

EXPOSE 8888
