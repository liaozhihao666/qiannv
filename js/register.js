$(function(){
    $(".button_zc").click(function(){
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        var email=$(".email").val();
        var phone=$(".phone").val();
        $.ajax({
            url:"http://localhost:3000/users/register",
            type:"get",
            data:{uname,upwd,email,phone},
            dataType:"json",
            success:function(data){
                if(data.code==200){
                    alert("注册成功,欢迎来到登录页面!");
                    location.href="http://localhost:3000/login1.html"
                }else{
                    alert("注册失败，请重新注册");
                }
            }
        })
    })
})