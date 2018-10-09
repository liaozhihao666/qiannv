var express=require("express");
var router=express.Router();
var pool=require("../pool");
router.get("/signin",(req,res)=>{
  var {uname,upwd}=req.query;
  var sql="select * from user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      req.session.uid=result[0].uid;
      res.send({ok:1})
    }else{
      res.send({ok:0,msg:"用户名或密码错误!"})
    }
  })

})
router.get("/islogin",(req,res)=>{
  if(req.session.uid==null)
    res.send({ok:0});
  else{
    var sql="select * from user where uid=?";
    pool.query(sql,[req.session.uid],(err,result)=>{
      res.send({ok:1,uname:result[0].uname});
    })
  }
})
router.get("/signout",(req,res)=>{
  delete req.session.uid;
  res.send();
})
router.get('/register', (req,res)=>{
  
    var $uname = req.query.uname;
    if(!$uname){
        res.send({code: 401,msg: 'uname required'});
        return;
    }
   
    var $upwd = req.query.upwd;
    if(!$upwd){
        res.send({code: 402,msg: 'upwd required'});
        return;
    }
   
    var $email = req.query.email;
   
    if(!$email){
        res.send({code: 403,msg: 'email required'});
        return;
    }
   
    var $phone = req.query.phone;
    if($phone==''){
        res.send({code: 404,msg: 'phone required'});
        return;
    }
    var sql = `INSERT INTO user VALUES(NULL,?,?,?,?)`;
    pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
        if(err){
            throw error; 
        }
        res.send({code: 200, msg: '注册成功'});
    });
});
module.exports=router;