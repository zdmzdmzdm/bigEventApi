const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.listen(8888, () => {
    console.log('running...');
})

app.get("/data", (req, res) => {
    res.send("hello")
})