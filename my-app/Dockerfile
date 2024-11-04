# Stage 1: Build React frontend
FROM node:16 AS frontend-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Stage 2: Build Express backend
FROM node:16 AS backend-builder
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ ./

# Stage 3: Production
FROM node:16-slim

# Create app directory
WORKDIR /app

# Add node user for security
RUN addgroup --system nodejs && \
    adduser --system --ingroup nodejs nodeuser

# Copy built frontend
COPY --from=frontend-builder /app/client/build ./client/build

# Copy backend files and install production dependencies
COPY --from=backend-builder /app/server/package*.json ./
RUN npm install --only=production

# Copy backend source
COPY --from=backend-builder /app/server/src ./src

# Change ownership
RUN chown -R nodeuser:nodejs /app

# Switch to non-root user
USER nodeuser

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "src/index.js"]