FROM node:lts

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /code

COPY package.json /code/package.json

COPY yarn.lock /code/yarn.lock

RUN yarn

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s \
  CMD node healthcheck.js

# copy in our source code last, as it changes the most
COPY . /code

CMD [ "yarn", "start:dev" ]