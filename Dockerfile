FROM node:6

COPY . /My-Site
COPY package.json /My-Site/package.json
COPY .env /My-Site/.env

WORKDIR /My-Site

ENV NODE_ENV production
RUN npm install gulp -g
RUN npm install --production

CMD ["gulp"]

