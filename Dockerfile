# Use Node to build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
COPY postcss.config.cjs ./
COPY tailwind.config.js ./
COPY ./src ./src
COPY ./public ./public

RUN npm install
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
