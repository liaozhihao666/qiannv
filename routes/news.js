var express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/",(req,res)=>{
    var output={
        count:0,
        pageSize:9,
        pageCount:0,
        pno:req.query.pno,
        data:[]
    };

    var sql=`SELECT * FROM news`;
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
        output.count=result.length;
        output.pageCount= Math.ceil(output.count/output.pageSize);
        sql+=` limit ?,?`;
        return pool.query(sql,[output.pageSize*output.pno,output.pageSize],(err,result)=>{
            output.data=result;
            res.send(output);
        });
    })
})

    module.exports=router;