# Етап 1: build (Node.js)
FROM node:20.11.1-alpine AS build

# Встановлення робочої директорії
WORKDIR /app

# Копіюємо файли package.json та yarn.lock
COPY package.json yarn.lock ./

# Встановлюємо залежності
RUN yarn install --frozen-lockfile

# Копіюємо весь проект
COPY . .

# Збірка React-додатку
RUN yarn build

# Етап 2: production (Nginx)
FROM nginx:1.23.4-alpine

# Копіюємо зібраний фронтенд у nginx html-директорію
COPY --from=build /app/build /usr/share/nginx/html

# Копіюємо кастомний конфіг nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Відкриваємо порт 80
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]
