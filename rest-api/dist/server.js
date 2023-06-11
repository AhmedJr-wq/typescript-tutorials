"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables, aborting...");
    process.exit(1);
}
console.log(process.env.PORT);
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var app = express();
function setupExpress() {
    app.route('/').get(root_1.root); //request handler. 'root' function generates http response
}
function startServer() {
    var portArg = process.argv[2];
    var port;
    if ((0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
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
