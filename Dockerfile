FROM node:20-alpine

WORKDIR /app

# Copiar solo los archivos esenciales primero para aprovechar la caché de Docker
COPY package.json ./
RUN npm install --only=production

# Copiar los microservicios al contenedor
COPY newpost /app/newpost
COPY getpost /app/getpost
COPY deletepost /app/deletepost
COPY shared /app/shared

# Exponer los puertos de los microservicios
EXPOSE 3000 3001 3002

# Iniciar los servicios con docker-compose
CMD ["sh", "-c", "docker-compose up"]