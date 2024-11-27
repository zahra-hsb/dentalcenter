FROM node:alpine

RUN mkdir -p /dentalcenter/src/app
ENV PORT 3000

WORKDIR /dentalcenter/src/app

COPY package.json /dentalcenter/src/app
COPY package-lock.json /dentalcenter/src/app

# Production use node instead of root
# USER node

RUN npm ci

COPY . /dentalcenter/src/app

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
