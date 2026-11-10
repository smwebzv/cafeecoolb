# Caffe Cool API (NestJS)

## Requirements

- Node.js 22+
- MySQL (database `cafecool`)

## Setup

```bash
cp .env.example .env
# edit DB_* and JWT_SECRET

npm install
npm run start:dev
```

API: http://localhost:3001  
Swagger: http://localhost:3001/api

## Production

```bash
npm run build
npm run start:prod
```

## Docker (MySQL + API + frontend)

From this folder (`cafeecoolb`):

```bash
cp .env.docker.example .env
docker compose up -d --build
```

- Web: http://localhost:8080  
- API: http://localhost:3001 (Swagger `/api`)  
- MySQL host port: `3307` → container `3306`

**Data:** MySQL uses volume `mysql_data`. `docker compose up --build` again does **not** wipe tables.  
Only `docker compose down -v` (or deleting the volume) removes the database.
