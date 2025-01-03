# Step 1: Use a Node.js image to build the app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Angular application
RUN npx nx build Zaptern-SOMP-frontend --prod

# Step 2: Use an Nginx image to serve the built files
FROM nginx:1.25

# Copy the built files to Nginx's HTML directory
COPY --from=build /app/dist/apps/Zaptern-SOMP-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
