$("[data-toggle=item]").parent().parent().on("click","[data-toggle=item]", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active")
        .siblings().removeClass("active");
    $($(this).attr("href")).addClass("active")
        .siblings().removeClass("active");
})