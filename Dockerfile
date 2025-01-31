# Use Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "src/app.js"]
