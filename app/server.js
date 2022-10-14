const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const createHttpError = require("http-errors");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { AllRoutes } = require("./routers/router");
const morgan = require("morgan");

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
    this.#app.use(morgan("dev"));
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
      if (error) return console.log("Database Connection Failed");
    });
    mongoose.connection.on("connected", () => {
      console.log("Mongo Database Connected Successfully");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("Mongo Database Disconnected");
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      next(createHttpError.NotFound("Page Not Found"));
    });
    this.#app.use((error, req, res, next) => {
      const serverError = createHttpError.InternalServerError();
      const statusCode = error.status || serverError.status;
      const message = error.message || serverError.message;
      return res.status(statusCode).json({
        errors: { statusCode, message },
      });
    });
  }
  createRoutes() {
    this.#app.use(AllRoutes);
  }
}
module.exports = {
  Application,
};
