
import express = require("express");
import * as bodyParser from "body-parser";

const PORT = process.env.PORT || 3001;

const app = express();

const obsTypeList = ["DoubleObservationData", "EnumObservationData", "IntegerObservationData"];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/api/observationDataClasses", (req, res) => {
    console.log("FETCH: /api/observationDataClasses");

    res.json({ message: obsTypeList });
});


app.post("/api/postTopic", (req, res) => {
    console.log(req.body)
});

app.get("/api", (req, res) => {
    console.log("FETCH: /api");
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});