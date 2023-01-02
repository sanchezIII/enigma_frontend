"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
var app = express();
var obsTypeList = ["DoubleObservationData", "EnumObservationData", "IntegerObservationData"];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/api/observationDataClasses", function (req, res) {
    console.log("FETCH: /api/observationDataClasses");
    res.json({ message: obsTypeList });
});
app.post("/api/postTopic", function (req, res) {
    console.log(req.body);
});
app.get("/api", function (req, res) {
    console.log("FETCH: /api");
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
