import express from "express";
import store from "./db.network.js";
import config from "../config.js";
import errors from "../network/errors.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
// ROUTER
app.use("/", store);
app.use(errors);

app.listen(config.STORE_PORT, () => {
  console.log("Mysql Database listening on port ", config.STORE_PORT);
});
