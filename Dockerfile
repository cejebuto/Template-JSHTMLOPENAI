# Etapa base: instala dependencias
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Etapa de desarrollo: nodemon para recarga automática
FROM base AS dev
RUN npm install nodemon --save-dev
EXPOSE 3000
CMD ["npx", "nodemon", "server.js"]

# Etapa de producción: imagen optimizada
FROM node:20-alpine AS prod
WORKDIR /app
COPY --from=base /app /app
RUN npm prune --production  # Elimina dependencias de desarrollo
EXPOSE 3000
CMD ["node", "server.js"]