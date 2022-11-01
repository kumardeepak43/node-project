const express = require("express");

const app = express();

const dataRouter = require("./routes/data");

const cors = require("cors");

app.use(cors());

app.use("/api", dataRouter);

app.listen(process.env.PORT || 8080, () => {
    console.log(connected to the port 9000);
});