FROM node:8.11.4

ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm i

COPY . /app
RUN npm run prestart

CMD ["npm", "run", "start"]
