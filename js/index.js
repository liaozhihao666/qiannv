/**
 * Created by web-01 on 2018/8/24.
 */
(()=>{
    ajax("http://localhost:3000/index")
    .then(res=>{
            var products=JSON.parse(res);
            console.log(products);
        })
})();