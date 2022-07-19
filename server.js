const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/login", (req, res) => {
    res.send({
        token: "test123",
    });
});

app.listen(3001, () => {
    console.log("the app is running on port 3001...");
});
