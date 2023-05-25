import mysql from "mysql2";
import config from "../config.js";

const dbConf = {
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.MYSQL_DB_PORT,
};

let connection;

function connectionHandler() {
  connection = mysql.createConnection(dbConf);
  connection.connect((err) => {
    if (err) {
      console.error("[db error]", err);
      setTimeout(connectionHandler, 2000);
    } else {
      console.log("mysql db connected");
    }
  });
  connection.on("error", (err) => {
    console.error("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connectionHandler();
    } else {
      throw err;
    }
  });
}
connectionHandler();
function list(table) {
  return new Promise((res, rej) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return rej(err);
      res(data);
    });
  });
}
function get(table, id) {
  return new Promise((res, rej) => {
    connection.query(
      `SELECT * FROM ${table} WHERE ID = "${id}"`,
      (err, data) => {
        if (err) return rej(err);
        res(data);
      }
    );
  });
}
function remove(table, id) {
  return new Promise((res, rej) => {
    connection.query(`DELETE FROM ${table} WHERE ID = "${id}"`, (err, data) => {
      if (err) return rej(err);
      res(data);
    });
  });
}
function upsert(table, payload) {
  console.log(payload);
  return new Promise((res, rej) => {
    connection.query(
      `INSERT INTO  ${table} SET ? ON DUPLICATE KEY UPDATE ?`,
      [payload, payload],
      (err, result) => {
        if (err) {
          console.log("Hay un error ", err);
          return rej(err);
        }
        res(result);
      }
    );
  });
}
function query(table, q) {
  return new Promise((res, rej) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, q, (err, result) => {
      if (err) {
        return rej(err);
      }
      res(result[0] || null);
    });
  });
}
function joinQuery(table, id, query) {
  const { joinTable, column1, column2 } = query;
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table} JOIN ${joinTable} ON ${table}.${column1} = ${joinTable}.${column2} WHERE ${table}.${column1} = ${id}`,
      (err, res) => {
        if (err) return reject(err);
        resolve(res[0] || null);
      }
    );
  });
}

export default { list, get, remove, upsert, query, joinQuery};
