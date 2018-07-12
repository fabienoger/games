FROM node:8.9.0

COPY . /app
WORKDIR /app

RUN yarn

VOLUME /app

EXPOSE 3000

CMD ["yarn", "dev"]
