"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var company_1 = require("./company");
var app = express();
var apisInc = new company_1.Company();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Listening on port: 3000!');
});
