# Stage 1 - Build
FROM node:15.10.0 as build

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - Prod
FROM nginx:1.19.7-alpine
COPY --from=build /usr/src/app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
