FROM node:6-slim

COPY . /My-Site
COPY package.json /My-Site/package.json
COPY .env /My-Site/.env
COPY gulpfile.js /My-Site/gulpfile.js

WORKDIR /My-Site

RUN npm -g install gulp
ENV NODE_ENV production
RUN npm install --production

CMD ["npm", "start"]

EXPOSE 5000
