FROM node:latest

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

COPY src/app.ts /src/
USER node
CMD [ "node", "src/app.ts" ]
