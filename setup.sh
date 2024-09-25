#!/bin/bash

# Inicializar Backend

echo "Navegando a la carpeta del backend..."
cd backend || { echo "Error: No se pudo acceder a la carpeta del backend"; exit 1; }

echo "Instalando dependencias del backend..."
npm install || { echo "Error: No se pudieron instalar las dependencias del backend"; exit 1; }

echo "Sincronizando el esquema de Prisma con la base de datos..."
npx prisma db pull || { echo "Error: No se pudo sincronizar el esquema de Prisma"; exit 1; }

echo "Generando el cliente Prisma..."
npx prisma generate || { echo "Error: No se pudo generar el cliente Prisma"; exit 1; }

echo "Iniciando el servidor del backend..."
npm run dev || { echo "Error: No se pudo iniciar el servidor del backend"; exit 1; }

# Inicializar Frontend

echo "Navegando a la carpeta del frontend..."
cd ../frontend || { echo "Error: No se pudo acceder a la carpeta del frontend"; exit 1; }

echo "Instalando dependencias del frontend..."
npm install || { echo "Error: No se pudieron instalar las dependencias del frontend"; exit 1; }

echo "Iniciando el servidor del frontend..."
npm run dev || { echo "Error: No se pudo iniciar el servidor del frontend"; exit 1; }

echo "Configuración completa."
