"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables, aborting...");
    process.exit(1);
}
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var app = express();
function setupExpress() {
    app.route('/').get(root_1.root); //request handler. 'root' function generates http response
}
function startServer() {
    var port;
    var portEnv = process.env.PORT;
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () {
        console.log("HTTP REST API Server is now running at http://localhost:9000");
    });
}
setupExpress();
startServer();
