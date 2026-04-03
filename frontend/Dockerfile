# Etapa 1: Compilación
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# ¡ESTA ES LA LÍNEA QUE FALTABA!
RUN npm run build --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Asegúrate de que la ruta del dist coincide con la que genera tu angular.json
COPY --from=build /app/dist/frontend/browser/. /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]