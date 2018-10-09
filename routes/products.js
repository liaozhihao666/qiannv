const express=require("express");
var router=express.Router();
var query=require("./query");
router.get("/",(req,res)=>{
  var output={
    count:0,
    pageSize:3,
    pageCount:0,
    pno:req.query.pno,
    data:[]
  };
  var kw=req.query.kw;

  var kws=kw.split(" ");

  kws.forEach((elem,i,arr)=>{
    arr[i]=`title like '%${elem}%'`;
  })
  var where=kws.join(" and ");
  var sql=`select *,(select shangping from laptop_pic where laptop_id=lid limit 1) as shangping from laptop where ${where}`;
  query(sql,[])
  .then(result=>{
    output.count=result.length;
    output.pageCount=
      Math.ceil(output.count/output.pageSize);
    sql+=` limit ?,?`;
    return query(sql,[output.pageSize*output.pno,output.pageSize]);
  })
  .then(result=>{
    output.data=result;
    res.send(output);
  })
})
module.exports=router;
