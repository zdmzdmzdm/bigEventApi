const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const loginrouter = require(path.join(__dirname, "router/login-router.js"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.listen(8888, () => {
    console.log('running...');
})

app.use("/api", loginrouter);
app.get("/data", (req, res) => {
    res.send("hello")
})