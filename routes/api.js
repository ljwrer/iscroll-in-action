/**
 * Created by Ray on 2016/1/15.
 */
var express = require("express");
var router = express.Router();
router.get("/count", function (req, res, next) {
    var page=req.page;
    var data={
        total:0,
        data:[]
    };
    res.json(data);
});
module.exports=router;