import express from "express";
import pagos from "./components/pagos.network.js";
import config from "../config.js";
import errors from "../network/errors.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
// ROUTER
app.use("/", pagos);
app.use(errors);

app.listen(config.PAGOS_PORT, () => {
  console.log("escuchando en el servidor", config.PAGOS_PORT);
});
