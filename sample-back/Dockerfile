FROM node:lts-slim

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin 
WORKDIR /home/node/app
ADD package.json ./
ADD config ./config/
ADD resources ./resources/
ADD src ./src/

RUN npm install
EXPOSE 3000
CMD node ./src/index.js
USER node