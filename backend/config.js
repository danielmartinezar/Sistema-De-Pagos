import dotenv from "dotenv";
import findConfig from "find-config";

dotenv.config({ path: findConfig('.env') });
export default {
  PORT: process.env.PORT || 8080,
  SECRET: process.env.SECRET || "notasecret!",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_USER: process.env.DB_USER || "root",
  DB_NAME: process.env.DB_NAME || "railway",
  ROUTE_PORT: process.env.ROUTE_PORT || 8082,
  PLACE_PORT: process.env.PLACE_PORT || 8083,
  STORE_PORT: process.env.STORE_PORT || 8084,
  AWS_PORT: process.env.AWS_PORT || 8085,
  MYSQL_DB_PORT: process.env.MYSQL_DB_PORT || 3306,
};
