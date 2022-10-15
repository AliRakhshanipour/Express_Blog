const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const createHttpError = require("http-errors"); /// package for error handling
const { StatusCodes: httpStatus } = require("http-status-codes"); /// package for status handling
const { AllRoutes } = require("./routers/router");
const morgan = require("morgan"); /// logging system in console -- development

/// swagger configuration for API Documentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Virgool blog Backend",
      version: "1.0.0",
      description:
        "This Blog Developed By Node.Js , Express.Js , GraphQL , Swagger and ...",
      contact: {
        name: "ali.rakhshanipour",
        email: "ali.rakhshanipour.sru@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:2020/",
        description: "Virgool API Documentation",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: ["./app/routers/**/*.js"],
};
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const specs = swaggerJSDoc(swaggerOptions);

/// application class
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
    this.#app.use(express.json()); // for json data received from frontend
    this.#app.use(express.static(path.join(__dirname, "..", "public"))); // for static directory
    this.#app.use(express.urlencoded({ extended: true })); // for xxx-form-data
    this.#app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(specs, {
        explorer: true,
      })
    );
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
