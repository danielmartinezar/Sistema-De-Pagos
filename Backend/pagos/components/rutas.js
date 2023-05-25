import { Router } from "express";
import db from "../../Database/mysql.js";

const router = Router();

router.post("/registropago", async (req, res, next) => {
  res.send("registrando pago");
  // const datos = await db.upsert(req.params.table, req.body);
  // response.success(req, res, datos, 200);
});

export default router;
