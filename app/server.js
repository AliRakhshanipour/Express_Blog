const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");

class Application {
  #app = express();
  #PORT;
  #DB_URL;
  constructor(PORT, DB_URL) {
    this.#PORT = PORT;
    this.#DB_URL = DB_URL;
    this.configApplication();
    this.databaseConnection();
    this.createServer();
    this.createRoutes();
    this.errorHandler();
  }
  configApplication() {
    this.#app.use(express.json());
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
    this.#app.use(express.urlencoded({ extended: true }));
  }
  createServer() {
    const http = require("http");
    http.createServer(this.#app).listen(this.#PORT, () => {
      console.log(`server running on http://localhost:${this.#PORT}`);
    });
  }
  databaseConnection() {
    mongoose.connect(this.#DB_URL, (error) => {
      if (!error) return console.log("Database Connected");
      return console.log("Database Connection Failed");
    });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(httpStatus.NOT_FOUND).json({
        statusCode: httpStatus.NOT_FOUND,
        message: "Page Not Found",
      });
    });
    this.#app.use((error, req, res, next) => {
      const statusCode = error.status || 500;
      const message = error.message || "InternalServerError";
      return res.status(statusCode).json({
        statusCode,
        message,
      });
    });
  }
  createRoutes() {}
}
module.exports = {
  Application,
};
