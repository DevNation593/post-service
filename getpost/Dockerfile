# Usa Node.js como imagen base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json antes de instalar dependencias
COPY package.json ./
RUN npm install --only=production

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará el servicio
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
