import { conmysql } from "../db.js";

export const getCategorias = async (req, res) => {
  try {
    const [rows] = await conmysql.query("SELECT * FROM categorias");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addCategoria = async (req, res) => {
  try {
    const { cat_nombre, cat_descripcion } = req.body;

    const [result] = await conmysql.query(
      "INSERT INTO categorias(cat_nombre, cat_descripcion) VALUES (?,?)",
      [cat_nombre, cat_descripcion]
    );

    res.json({ mensaje: "Categoría registrada", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error });
  }
};
