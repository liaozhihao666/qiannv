function loadPage(pno=0){
    $.ajax({
        url:"http://localhost:3000/news",
        type:"get",
        data:{pno},
        dataType:"json",
        success:function(output){
            var {data,pageCount,pno}=output;
            var html="";
            for(var p of data){
                var {img_url,title,time}=p;
                html+=`<li><a href="">${title}</a><span>${time}</span></li>`
            }
            $(".news-box .xiaoxi").html(html);
            var html=`<li class="prev float-left mr-3"><a href="#">上一页</a></li>`;
            for(var i=0;i<pageCount;i++){
                html+=`<li class="prev float-left mr-3 ${i==pno?'active':''}"><a href="#">${i+1}</a></li>`
            }
            var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
            for(var i=0;i<pageCount;i++){
                html+=`<li class="page-item ${i==pno?'active':''}"><a class="page-link bg-transparent " href="#">${i+1}</a></li>`
            }
            html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
            var $ul=$(".fengye ul")
            $ul.html(html);

            if(pno==0)
                $ul.children(":first-child")
                    .addClass("disabled");
            if(pno==pageCount-1)
                $ul.children(":last-child")
                    .addClass("disabled");
        }
    })
}
//3. 页面首次加载时，得自己调用一次loadPage()
loadPage();
$(".fengye ul")
    .on("click","li>a",function(e){
        e.preventDefault();
        var $a=$(this);
        if($a.parent().is(":not(.active,.disabled)")){
            var i= $(".fengye ul>li.active>a").html()-1;
            if($a.parent().is(":first-child")){
                loadPage(i-1);
            }else if($a.parent().is(":last-child")){
                loadPage(i+1);
            }else
                loadPage($a.html()-1);
        }
    });