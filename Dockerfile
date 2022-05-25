FROM node:14-alpine as development

WORKDIR /auth-service

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "run", "start:dev"]

FROM node:14-alpine as production

WORKDIR /auth-service

COPY package*.json ./
RUN npm ci --only=production

COPY . .

COPY --from=development /auth-service/dist ./dist

CMD ["npm", "run", "start:prod"]