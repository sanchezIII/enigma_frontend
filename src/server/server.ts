
import express = require("express");
import * as path from "path";

const PORT = process.env.PORT || 3001;

const app = express();

const obsTypeList = ["DoubleObservationData", "EnumObservationData", "IntegerObservationData"];

// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// app.get("/api/observationDataClasses", (req, res) => {
//    res.json({ message: "" });
// });

app.get("/api/observationDataClasses", (req, res) => {
    console.log("FETCH: /api/observationDataClasses");

    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});