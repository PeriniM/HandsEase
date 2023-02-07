# Dockerfile

FROM node:19-alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
# RUN npm run dev

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000