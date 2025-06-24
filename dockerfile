# Simple single-stage build for DigitalOcean
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

EXPOSE 80

# Serve the built app on port 80
CMD ["serve", "-s", "build", "-l", "80"]