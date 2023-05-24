import response from "../network/response.js";
import { Router } from "express";
import db from "./mysql.js";

const router = Router();

//Routes

router.get("/:table", list);
router.get("/:table/:id", get);
router.get("/query/:table/:id",joinQuery);
router.post("/:table", upsert);
router.put("/:table", upsert);
router.post("/:table/query", query);
router.delete("/:table/:id",del);

async function list(req, res, next) {
  const datos = await db.list(req.params.table);
  response.success(req, res, datos, 200);
}

async function get(req, res, next) {
  const datos = await db.get(req.params.table, req.params.id);
  response.success(req, res, datos, 200);
}

async function upsert(req, res, next) {
  const datos = await db.upsert(req.params.table, req.body);
  response.success(req, res, datos, 200);
}

async function query(req, res, next) {
  const datos = await db.query(req.params.table, req.body.query, req.body.join);
  response.success(req, res, datos, 200);
}

async function joinQuery(req, res, next) {
  const datos = await db.joinQuery(req.params.table, req.params.id, req.body.query);
  response.success(req, res, datos, 200);
}

async function del(req, res, next) {
    const datos = await db.remove(req.params.table, req.params.id );
    response.success(req, res, datos, 200);
  }
export default router;
