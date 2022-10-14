const { Application } = require("./app/server");
require("dotenv").config();
new Application(process.env.APP_PORT, process.env.DB_URL);
