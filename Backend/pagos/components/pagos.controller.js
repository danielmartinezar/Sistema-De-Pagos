const TABLE = "Transaccion";

import config from "../../config.js";
import { nanoid } from "nanoid";
import axios from "axios";
import db from "../../Database/mysql.js";

let URL_DB_SERVICE = `http://localhost:${config.MYSQL_DB_PORT}`;

export default async function controller() {
  async function list() {
    return await axios.get(URL_DB_SERVICE + `/${TABLE}`);
  }
  async function get(id) {
    return await axios.get(URL_DB_SERVICE + `/${TABLE}/${id}`);
  }
  async function insert(body) {
    console.log(body);
    const id_trans = nanoid();
    const pago = { id_trans, ...body }; 
    console.log(pago);
    await axios.post(URL_DB_SERVICE + `/${TABLE}`, pago);

    // await axios.post(
    //   `http://localhost:${config.AWS_PORT}/api/image`,
    //   { "image": file, data: { idLugar: id } },
    //   { headers: { "Content-Type": "multipart/form-data" } }
    // );

    // Promise.allSettled(
    //   images.map(async (image) => {
    //     await axios.post(`http://localhost:${config.AWS_PORT}/api/image`, {
    //       data: { idLugar: id },
    //       image,
    //     });
    //   })
    // );
    return id_trans;
  }

  return { list, get, insert };
}
