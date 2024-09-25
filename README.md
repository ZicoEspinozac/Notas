# Documentación del Proyecto

## Initialize Backend

### 1. Navigate to the Backend Folder

cd backend

### 2. Install Dependencies

npm install

### 3. Synchronize Prisma Schema with Database

npx prisma db pull

### 4. Generate Prisma Client

npx prisma generate

### 5. Start the Server

npm run dev

### Configure Database URL

DATABASE_URL="mysql://root@localhost:3306/Reto"

### Change Database URL

DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database_name>"

- `<username>`: Your MySQL username
- `<password>`: Your MySQL password
- `<host>`: The database server address (e.g., `localhost` for a local database)
- `<port>`: The database server port (default is `3306` for MySQL)
- `<database_name>`: Your database name

## Initialize Frontend

### 1. Install Dependencies

npm install

### 2. Start the Server

npm run dev

## Requirements

## Requirements Backend

Node.js: v18.17.0
npm: v10.2.0
MySQL: v8.0

## Requirements Frontend

Node.js: v18.17.0 (same version as backend)
npm: v10.2.0 (same version as backend)
#   N o t a s  
 