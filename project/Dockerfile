FROM node:16-slim

# Add node user for security
RUN addgroup --system nodejs && adduser --system --ingroup nodejs nodeuser

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy application code
COPY . .

# Change ownership
RUN chown -R nodeuser:nodejs /app

# Switch to non-root user
USER nodeuser

EXPOSE 3000

CMD ["npm", "start"]