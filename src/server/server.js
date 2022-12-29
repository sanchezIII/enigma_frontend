"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3001;
var app = express();
var obsTypeList = ["DoubleObservationData", "EnumObservationData", "IntegerObservationData"];
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/api", function (req, res) {
    res.json({ message: "Hello from server!" });
});
// app.get("/api/observationDataClasses", (req, res) => {
//    res.json({ message: "" });
// });
app.get("/api/observationDataClasses", function (req, res) {
    console.log("FETCH: /api/observationDataClasses");
    res.json({ message: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../', 'index.html'));
});
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
