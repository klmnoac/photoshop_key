const express = require("express");
const robot = require("robotjs");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/new-tab", (req, res) => {
    robot.keyTap("t", ["control"]);
    res.send("Ctrl+T Pressed!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
