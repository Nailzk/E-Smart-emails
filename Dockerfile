FROM node:16.13.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli@8.1.2
COPY . .
RUN npm run build
CMD [ "node", "dist/main.js" ]