import { Router } from "express";
import { getCategorias, addCategoria } from "../controladores/categoriasCtrl.js";

const ruta = Router();

ruta.get("/", getCategorias);
ruta.post("/", addCategoria);

export default ruta;
