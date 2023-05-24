import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

app.listen(PORT);
console.log("server on port ", PORT);

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/ping", async (req, res) => {
  try {
    const [result] = await pool.query('SELECT "hello world" as RESULT');
    res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});

app.get("/create", async (req, res) => {
  try {
    const result = await pool.query('INSERT INTO users(name) VALUES ("Mateo")');
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});
