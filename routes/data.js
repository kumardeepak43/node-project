const express = require("express");

const server = require("../Controller/data");

const dataRouter = express.Router();

dataRouter
.route("/api")

.get(server.API);
module.exports =dataRouter;