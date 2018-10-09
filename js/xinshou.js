$(".accordion .qiannv")[0].onclick=function(){
    $(this).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
        .siblings(".content").removeClass("in1")
        .siblings(".content").removeClass("in2")
}
$(".accordion .chengzhang")[0].onclick=function(){
    $(this).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
        .siblings(".content").removeClass("in1")
        .siblings(".content").removeClass("in2")
}
$(".accordion .shejiao")[0].onclick=function(){
    $(this).next(".content").toggleClass("in2")
        .siblings(".content").removeClass("in")
        .siblings(".content").removeClass("in1")
}

$(".accordion .baodian")[0].onclick=function(){
    $(this).next(".content").toggleClass("in1")
        .siblings(".content").removeClass("in")
        .siblings(".content").removeClass("in2")

}


$(".accordion .title").click(function () {
    $(this).addClass('active').siblings().removeClass('active');

})
$(".accordion .content ul li").click(function () {
    $(this).addClass('active1').siblings().removeClass('active1');
})

var ts=$(".accordion .content [data-toggle=accordion]");
   for(var t of ts){
    t.onclick=function(){
        var id=$(this).attr("href");
        $(id).addClass("show").siblings().removeClass("show")
    }
   }
var ts=$(".accordion .content [data-toggle=accordion1]");
for(var t of ts){
    t.onclick=function(){
        var id=$(this).attr("href");
        $(id).addClass("show").siblings().removeClass("show")
    }
}
var ts=$(".accordion .content [data-toggle=accordion3]");
for(var t of ts){
    t.onclick=function(){
        var id=$(this).attr("href");
        $(id).addClass("show").siblings().removeClass("show")
    }
}
