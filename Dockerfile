
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run buid --prod

FROM nginx:alpine
COPY --from=node /app/dist/sakai-ng /usr/share/nginx/html