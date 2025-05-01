# Build stage: Build the React app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage: Use official nginx image
FROM nginx:alpine

# Copy built files into the default Nginx HTML folder
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Custom Nginx config (if needed later)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

# Run Nginx in foreground mode
CMD ["nginx", "-g", "daemon off;"]