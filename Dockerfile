# Base Nginx image to serve static files
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Vite files
COPY dist /usr/share/nginx/html

# Optional: Copy env file if needed inside the container
COPY .env /usr/share/nginx/html/.env