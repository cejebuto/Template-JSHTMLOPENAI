# Docker Setup for Development and Production

## Build and Run Instructions

### Development
1. **Build the Development Image**:
   ```bash
   docker build --target dev -t rpg-app-dev .
   ```
   
2. **Run the Development Container**:
   ```bash
   docker run -p 3000:3000 \
   -v $(pwd)/server.js:/app/server.js \
   -v $(pwd)/public:/app/public \
   rpg-app-dev
   ```

### Production

1. **Build the Production Image**:
   ```bash
    docker build --target prod -t rpg-app-prod .
   ```

2. **Run the Production Container**:
   ```bash
   docker run -p 3000:3000 rpg-app-prod
   ```
   
## Detener

### Development
1. **Deneter el contenedor de desarrollo**:
   ```bash
   docker ps -q --filter "ancestor=rpg-app-dev" | xargs docker stop
   ```
2. **Eliminar Contenedor de desarrollo**:
   ```bash
   docker ps -a -q --filter "ancestor=rpg-app-dev" | xargs docker rm
   ```
3. **Eliminar imagen de desarollo**:
   ```bash
   docker rmi rpg-app-dev
   ```


### Production
1. **Deneter el contenedor de produccion**:
   ```bash
   docker ps -q --filter "ancestor=rpg-app-prod" | xargs docker stop
   ```
2. **Eliminar Contenedor de produccion**:
   ```bash
   docker ps -a -q --filter "ancestor=rpg-app-prod" | xargs docker rm
   ```
1. **Eliminar imagen de produccion**:
   ```bash
   docker rmi rpg-app-prod
   ```
   

# UPLOAD AND DOWNLOAD
## Upload
1. **Ingresar**
```bash
docker login
```
2. **Etiquetar**
```bash
docker tag rpg-app-prod usuario/rpg-webapp:latest
   ```
3. **Subir**
```bash
docker push cejebuto/rpg-webapp:latest
```

## Download
1. **Descargar**
```bash
docker pull cejebuto/rpg-webapp:latest
```
1. **Ejecutar**
```bash
docker run -p 3000:3000 cejebuto/rpg-webapp:latest
```