# Docker Setup for Sanaap

This document explains how to run the Sanaap application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

### Development Mode

To run the application in development mode with hot reload:

```bash
# Using Docker Compose (recommended)
docker-compose --profile dev up

# Or using Docker directly
docker build --target development -t sanaap-dev .
docker run -p 6030:6030 -v $(pwd):/app sanaap-dev
```

The application will be available at `http://localhost:6030`

### Production Mode

To run the application in production mode:

```bash
# Using Docker Compose
docker-compose --profile prod up

# Or using Docker directly
docker build --target production -t sanaap-prod .
docker run -p 80:80 sanaap-prod
```

The application will be available at `http://localhost:80`

## Docker Compose Profiles

### Development Profile
```bash
docker-compose --profile dev up
```
- Runs the development server with hot reload
- Maps port 6030
- Mounts the source code for live editing

### Production Profile
```bash
docker-compose --profile prod up
```
- Builds the application for production
- Serves static files using Nginx
- Maps port 80

### Development with Hot Reload Profile
```bash
docker-compose --profile dev-hot up
```
- Similar to dev profile but with enhanced file watching
- Useful for environments where file watching doesn't work properly

## Building Images

### Development Image
```bash
docker build --target development -t sanaap-dev .
```

### Production Image
```bash
docker build --target production -t sanaap-prod .
```

## Running Containers

### Development Container
```bash
docker run -p 6030:6030 -v $(pwd):/app sanaap-dev
```

### Production Container
```bash
docker run -p 80:80 sanaap-prod
```

## Environment Variables

You can set environment variables using the `-e` flag or by creating a `.env` file:

```bash
docker run -e NODE_ENV=development -p 6030:6030 sanaap-dev
```

## Volume Mounts

For development, the source code is mounted as a volume to enable hot reload:

```bash
docker run -v $(pwd):/app -p 6030:6030 sanaap-dev
```

## Health Check

The production build includes a health check endpoint at `/health`:

```bash
curl http://localhost/health
```

## Troubleshooting

### Port Already in Use
If port 6030 or 80 is already in use, you can map to different ports:

```bash
docker run -p 3000:6030 sanaap-dev
docker run -p 8080:80 sanaap-prod
```

### File Watching Issues
If hot reload doesn't work properly, try the dev-hot profile:

```bash
docker-compose --profile dev-hot up
```

### Build Issues
If you encounter build issues, try rebuilding without cache:

```bash
docker build --no-cache --target development -t sanaap-dev .
```

### Permission Issues
On Linux/macOS, you might need to adjust file permissions:

```bash
sudo chown -R $USER:$USER .
```

## Production Deployment

For production deployment, consider:

1. Using a reverse proxy (like Traefik or Nginx)
2. Setting up SSL/TLS certificates
3. Configuring proper logging
4. Setting up monitoring and health checks

Example production deployment with Traefik:

```yaml
version: '3.8'
services:
  sanaap:
    build:
      context: .
      dockerfile: Dockerfile
      target: production
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.sanaap.rule=Host(`your-domain.com`)"
      - "traefik.http.routers.sanaap.tls=true"
    networks:
      - traefik
```

## Cleanup

To clean up Docker resources:

```bash
# Stop and remove containers
docker-compose down

# Remove images
docker rmi sanaap-dev sanaap-prod

# Remove all unused resources
docker system prune -a
``` 