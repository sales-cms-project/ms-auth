# Base
FROM node:20.11.0-alpine as build
RUN apk add libc6-compat
RUN apk update
WORKDIR /app
COPY . .
RUN chmod +x proto.sh
RUN npm install -g grpc-tools
RUN npm i
EXPOSE 3003
CMD ["npm", "run", "start:debug"]

