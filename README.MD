# Docker Setup for Development and Production

## Build and Run Instructions

### Development
1. **Build the Development Image**:
   ```bash
   docker build --target dev -t web-app-dev .
   ```
   
2. **Run the Development Container**:
   ```bash
   docker run -p 3000:3000 \
   -v $(pwd)/server.js:/app/server.js \
   -v $(pwd)/public:/app/public \
   web-app-dev
   ```

### Production

1. **Build the Production Image**:
   ```bash
    docker build --target prod -t web-app-prod .
   ```

2. **Run the Production Container**:
   ```bash
   docker run -p 3000:3000 web-app-prod
   ```
   
## Stop

### Development
1. **Stop the development container**:
   ```bash
   docker ps -q --filter "ancestor=web-app-dev" | xargs docker stop
   ```
2. **Remove the development container**:
   ```bash
   docker ps -a -q --filter "ancestor=web-app-dev" | xargs docker rm
   ```
3. **Remove the development image**:
   ```bash
   docker rmi web-app-dev
   ```


### Production
1. **Stop the production container**:
   ```bash
   docker ps -q --filter "ancestor=web-app-prod" | xargs docker stop
   ```
2. **Remove the production container:**:
   ```bash
   docker ps -a -q --filter "ancestor=web-app-prod" | xargs docker rm
   ```
3. **Remove the production image:**:
   ```bash
   docker rmi web-app-prod
   ```
   

# UPLOAD AND DOWNLOAD
## Upload
1. **Login**
```bash
docker login
```
2. **Tag**
```bash
docker tag web-app-prod usuario/webapp:latest
   ```
3. **Up**
```bash
docker push usuario/webapp:latest
```

## Download
1. **Pull**
```bash
docker pull usuario/webapp:latest
```
1. **Exec**
```bash
docker run -p 3000:3000 usuario/webapp:latest
```