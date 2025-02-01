FROM node:20-alpine
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copiar cada servicio
COPY newpost /app/newpost
COPY getpost /app/getpost
COPY deletepost /app/deletepost
COPY shared /app/shared

# Exponer los puertos de los microservicios
EXPOSE 3000 3001 3002

CMD ["docker-compose", "up"]
