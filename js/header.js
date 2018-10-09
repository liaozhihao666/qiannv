function isLogin(){
          $.ajax({
            url:"http://localhost:3000/users/islogin",
            type:"get",
            dataType:"json",
            success:function(data){
              if(data.ok==0){
                $("#signout").show().next().hide();
              }else{
                $("#signout").hide().next().show();
                $("#uname").html(data.uname);
              }
            }
          })
        }
isLogin();
$("#btnSignout").click(function(e){
  e.preventDefault();
  $.ajax({
    url:"http://localhost:3000/users/signout",
    type:"get",
    success:isLogin
  })
})
$("#btnLogin").click(function(e){
  e.preventDefault();
  location.href=
      "http://localhost:3000/login1.html?back="+location.href;
})

$(".search2")[0].onclick=function(){
    if($(".new-list-input")[0].value.trim()!=="")
        location.href=`http://localhost:3000/products.html?kw=${$(".new-list-input")[0].value}`;
}
$(".new-list-input")[0].onkeyup=function(e){
    if(e.keyCode==13)
        $(".search2")[0].onclick();
}

if(location.search.indexOf("kw=")!=-1){
    $(".new-list-input")[0].value=
        decodeURI(location.search.split("=")[1]);
}

//每个页面body结尾:
//script src="js/ajax.js"
//script src="js/header.js"
