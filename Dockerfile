# Base
FROM node:20.11.0-alpine as build
RUN apk add libc6-compat
RUN apk update
WORKDIR /app
COPY . .
RUN chmod +x proto.sh
RUN npm install -g grpc-tools
RUN npm i
RUN npm run build

# prod
FROM node:20.11.0-alpine as prod
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/*.js /app/
COPY --from=build /app/*.json /app/
CMD ["node", "dist/src/main.js"]

