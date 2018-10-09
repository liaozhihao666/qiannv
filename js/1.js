(function(){
    function slide(){
        var imgShow=document.querySelector(
            "#slider>img.show"
        );
        imgShow.className="";
        if(imgShow.nextElementSibling!=null)
            imgShow.nextElementSibling.className="show";
        else
            imgShow.parentNode.children[0].className="show";
    }
    var timer=setInterval(slide,3000);

    var slider=document.getElementById("slider");
    slider.onmouseover=function(){
        clearInterval(timer);
        timer=null;
    }
    slider.onmouseout=function(){
        timer=setInterval(slide,3000);
    }

})();
$("[data-toggle=item]").parent().parent().on("mouseover","[data-toggle=item]", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active")
        .siblings().removeClass("active");
    $($(this).attr("href")).addClass("active")
        .siblings().removeClass("active");
})
$(function(){
    width = $(".containertwo-box").width(); //盒子的宽度
    var ulNum = $(".content div").length; //获取div的个数
    var contentWidth = width * ulNum; //获取整个content应该的长度，刚开始content设置成了1100，但是应该把所有的div放到一行里面去，这样.content向左移动的时候才是无缝滚动

    $(".box").width(contentWidth); //给box设置宽度  .width() 是获取宽度  .width(value)是设置宽度

    $(".tabtwo li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        //$(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
        // .removeClass()表示删除的样式名称

        var clickNum = $(this).index(); //判断点击的是第几个li .index()方法返回第几个，从0开始算起
        //alert(clickNum);

        var moveLeft = clickNum * width * -1; //应该向左移动的距离

        $(".containertwo").animate({'left':moveLeft});  //通过操作box的left来使box向左移动， .animate 是动画函数
        //第一个参数用{}包含起来，里面的内容形式为 {'left':100,'top':100}，多个用逗号隔开，
        // 表示从当前位置移动到left为100px、top为100px的位置（即left:100px;top:100px处），
        //第二个参数为时间，表示从当前位置移动到第一个参数用时，单位为ms，1000ms=1秒
        //点击的时候一定要点开审查元素，查看box元素的行内样式
    })

});
var moved=0;
$(".swiper-button-left").click(function(){
    if(moved==0) {
       $(this).addClass("disabled");
    }else{
        moved--;
        width = $(".wanjia").width();
        var leftmove = -width * moved;
        $(".wanjia .show").animate({'left': leftmove});
    }
})
$(".swiper-button-right").click(function(){
   if(moved==2){
       $(this).addClass("disabled");
   }else
       moved++;
    width = $(".wanjia").width();
    var rightmove=-width*moved;
    $(".wanjia .show").animate({'left':rightmove});
})
$(".btn-video")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");

}
$(".huahunmain .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".yanshi .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".jiashi .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".sheshou .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".daoke .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".xiake .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".fangshi .videoborder")[0].onclick=function(){
    $(".video").addClass("active");
    $(".video-center").addClass("active");
}
$(".btn-close")[0].onclick=function(){
    $(".video").removeClass("active");
    $(".video-center").removeClass("active");
}

    $("#tab li").mousemove=function(){
        $(this).addClass('active').siblings().removeClass('active');
    }


