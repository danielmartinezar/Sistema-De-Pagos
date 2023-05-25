import response from "../../network/response.js";

import { Router } from "express";
import controller from "./pagosComp.index.js";
const router = Router();

//Routes
router.get("/", list);
router.get("/:id", get);
router.post("/", insert);
router.put("/", update);
router.delete("/:id", del);

//Internal functions
function list(req, res, next) {
  controller
    .list()
    .then((resp) => {
      response.success(req, res, resp.data.body, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function get(req, res, next) {
  controller
    .get(req.params.id)
    .then((resp) => {
      response.success(req, res, resp.data.body, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function insert(req, res, next) {
  console.log(req.body);
  const id_trans = controller.insert(req.body);
  res.send({ id_trans });
}
function update(req, res, next) {
  controller
    .update(req.body)
    .then((resp) => {
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function del(req, res, next) {
  controller
    .del(req.params.id)
    .then((resp) => {
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}

function verificarSaldo(req, res, next) {
  controller
    .get(req.body)
    .then((resp) => {
      response.success(req, res, resp.data.body, 201);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
export default router;
