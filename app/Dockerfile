# Stage 1 - Build
FROM node:15.10.0 as build-deps

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - Prod
FROM nginx:1.19.7-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
