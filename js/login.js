$(function(){
  $(".login").click(function(){
    var uname=$(".uname").val();
    var upwd=$(".upwd").val();
    $.ajax({
      url:"http://localhost:3000/users/signin",
      type:"get",
      data:{uname,upwd},
      dataType:"json",
      success:function(data){
        if(data.ok==0) alert(data.msg);
        else{
          alert("登录成功,自动返回上一页!");
            location.href="http://localhost:3000/index.html"

        }
      }
    })
  })
})