FROM node:20-alpine

WORKDIR /app

# Copia solo package.json y package-lock.json primero
COPY package.json package-lock.json ./

# Fuerza instalación limpia y asegura que todas las dependencias estén disponibles
RUN npm ci --only=production

# Copia el resto del código
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
