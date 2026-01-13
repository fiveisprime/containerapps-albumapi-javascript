FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
RUN chown -R node /usr/src/app
COPY . .
EXPOSE 8080
USER node
CMD ["npm", "start"]
