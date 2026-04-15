# 📦 Curso de Node.js

Repositorio de prácticas del curso de **Node.js**, organizado en módulos progresivos que cubren desde el uso básico de las APIs nativas hasta la construcción de servidores HTTP con Express y TypeScript.

---

## 🗂️ Estructura del proyecto

```
curso-node/
├── 1-node-console/      → Uso de APIs nativas de Node.js (fs, path, process)
├── 2-node-http/         → Servidor HTTP nativo con el módulo `http`
└── 3-node-express/      → API REST con Express 5 y TypeScript
```

---

## 📚 Módulos

### 1. `1-node-console` — CLI con APIs nativas de Node.js

Implementación de un comando tipo `ls` usando únicamente los módulos nativos de Node.js, sin dependencias externas.

**Conceptos cubiertos:**
- Módulos `node:fs/promises` y `node:path`
- Lectura asíncrona de directorios con `readdir` y `stat`
- Uso de `process.argv` para recibir argumentos por línea de comandos
- Colorización de la salida en consola con códigos ANSI
- Uso de `Promise.all` para ejecución de promesas en paralelo

**Ejecución:**
```bash
node ls.js [ruta]
# Ejemplo:
node ls.js ./src
```

---

### 2. `2-node-http` — Servidor HTTP nativo

Ejemplo básico de servidor HTTP utilizando únicamente el módulo nativo `node:http` de Node.js, sin ningún framework externo.

**Conceptos cubiertos:**
- Creación de servidores HTTP con el módulo `http`
- Manejo de peticiones y respuestas
- Gestión básica de rutas sin framework

---

### 3. `3-node-express` — API REST con Express 5 y TypeScript

API REST funcional construida con **Express 5** y **TypeScript**, que gestiona una colección de posts de un blog en memoria.

**Conceptos cubiertos:**
- Configuración de un proyecto Express con TypeScript
- Uso de `tsx` para ejecución y recarga en caliente durante el desarrollo
- Carga de variables de entorno con `process.loadEnvFile()`
- Tipado estático con interfaces TypeScript
- Construcción de endpoints RESTful (GET, POST)
- Validación de parámetros y manejo de errores HTTP
- Separación de responsabilidades: tipos, constantes y lógica

**Endpoints disponibles:**

| Método | Ruta          | Descripción                            |
|--------|---------------|----------------------------------------|
| GET    | `/`           | Verifica que el servidor está activo   |
| GET    | `/posts/:id`  | Obtiene un post por su ID              |
| POST   | `/post`       | Crea un nuevo post en memoria          |

**Estructura del recurso `BlogPost`:**
```typescript
interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: Date;
}
```

**Ejemplo de creación de post (POST `/post`):**
```json
{
  "id": 11,
  "title": "State Management in Modern Web Apps",
  "content": "Managing state effectively is key to building scalable front-end applications.",
  "author": "Kevin Turner"
}
```

**Variables de entorno (`.env`):**
```env
PORT=3000
```

**Ejecución en modo desarrollo:**
```bash
pnpm dev
```

---

## 🛠️ Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [pnpm](https://pnpm.io/) v10 (gestor de paquetes utilizado en el proyecto)

---

## 🚀 Instalación

Cada módulo es independiente. Navega a la carpeta del módulo que quieras usar e instala sus dependencias:

```bash
# Ejemplo para el módulo de Express
cd 3-node-express
pnpm install
```

---

## 🧰 Tecnologías utilizadas

| Tecnología   | Versión  | Uso                                      |
|--------------|----------|------------------------------------------|
| Node.js      | ≥ 18     | Entorno de ejecución                     |
| TypeScript   | ^6.0     | Tipado estático (módulo 3)               |
| Express      | ^5.2     | Framework HTTP (módulo 3)                |
| tsx          | ^4.21    | Ejecución de TypeScript en desarrollo    |
| pnpm         | 10.10.0  | Gestión de dependencias                  |

---

## 📄 Licencia

ISC
