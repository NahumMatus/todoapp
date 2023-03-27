# Frontend

## Requisitos:

- nodejs: v18.15.0 
- docker y docker-compose [Ayuda aquí](../tools/README.md)

## 0- Ir a carpeta front-end

```bash
cd front-end
```

## 1- Instalar dependencias

```bash
yarn
```
o
```bash
npm install
```

## 2- Ejecutar proyecto

```bash
yarn dev
```
o
```bash
npm run dev
```

Esto deja corriendo el frontend en http://localhost:5173/. OJO: DEBE SER EL EL PUERTO 5173, YA QUE EL BACKEND TIENE HABILITADO CORS PARA EL PUERTO 5173, LLAMADAS DESDE OTRO PUERTO NO FUNCIONARAN

# Base de datos

## Requisitos:

- docker y docker-compose

## 0- Ir a carpeta db-docker

```bash
cd db-docker
```

## 1 - Levantar docker

```bash
docker-compose up
```

# Backend

## Requisitos:

- Java JDK +19
- maven: brew install maven

## 0- Ir a carpeta backend

```bash
cd backend
```

## 1 - Hacer install y build de backend

```bash
mvn install
```
Esto crea el archivo /target/backend-0.0.1-SNAPSHOT.jar

## 2 - Deployar backend

```bash
java -jar target/backend-0.0.1-SNAPSHOT.jar
```
Con esto esta corriendo el backend conectado a la base de datos local, y desde el front se puede interactuar con la db a través del backend

# Swagger

La documentación de la API REST se puede ver en http://localhost:8080/swagger-ui/index.html#/




