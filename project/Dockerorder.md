# Base image
FROM node:16-slim
# ^ MUST be first command. Sets the base image for subsequent instructions

# Set metadata (optional)
LABEL maintainer="your-email@example.com"
LABEL version="1.0"

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /app
# ^ Creates and sets the working directory for subsequent commands

# Copy dependency files first
COPY package*.json ./
# ^ Copy specific files needed for installation
# This is separate from copying all files for better cache utilization

# Install dependencies
RUN npm install
# ^ Executes commands in the container during build time

# Copy application files
COPY . .
# ^ Copies all files from current directory to container
# Done after npm install to leverage cache for dependencies

# Create volume mount points (optional)
VOLUME ["/app/data"]
# ^ Defines mount points for external volumes

# Expose ports
EXPOSE 3000
# ^ Documents which ports should be published

# Define default command
CMD ["npm", "start"]
# ^ Specifies the command to run when container starts

📝 Recommended Order (for optimal caching)
FROM
LABEL
ENV
WORKDIR
COPY (dependency files)
RUN (install dependencies)
COPY (application files)
VOLUME
EXPOSE
CMD
Use .dockerignore to exclude files from being copied to the container.