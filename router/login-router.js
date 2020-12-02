const express = require("express");
const path = require("path");
const db = require(path.join(__dirname, "../common.js"));
const router = express.Router();

router.get("/test", async (req, res) => {
    var sql = 'select * from userinfo'
    let ret = await db.operateDB(sql, null)
    if (ret && ret.length > 0) {
        res.json({
            status: 0,
            message: "查询数据成功",
            data: ret
        })
    } else {
        res.json({
            status: 1,
            message: "查询数据失败"
        })
    }
    res.send("test")
})
// router.get("/abc", (req, res) => {
//     res.send("abc")
// })

module.exports = router;