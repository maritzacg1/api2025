import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar las rutas
import clientesRoutes from './routes/clientes.routes.js';
import productosRoutes from './routes/productos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import pedidosRoutes from './routes/pedidos.routes.js';
import categoriasRoutes from "./routes/categorias.routes.js";




// Definir los módulos de entrada
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Configurar CORS correctamente
const corsOptions = {
  origin: "*",   // permite cualquier origen
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
};

// Crear instancia de Express
const app = express();

// Aplicar middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (imágenes, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🔹 Rutas principales de la API
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', pedidosRoutes);
app.use("/api/categorias", categoriasRoutes);

// 🔻 Ruta por defecto (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

export default app;
