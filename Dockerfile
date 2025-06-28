# builder stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./
COPY postcss.config.cjs ./
COPY tailwind.config.js ./
COPY index.html ./             
COPY ./src ./src
COPY ./public ./public

RUN npm install
RUN npm run build

# nginx stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
