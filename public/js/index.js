// menu
$(".menu").click(function(){
    if($(this).parents("header").children(".container").children("nav").hasClass("active")){
        $(this).parents("header").children(".container").children("nav").removeClass("active")
    }else {
        $(this).parents("header").children(".container").children("nav").addClass("active");
    }
})
$(".mobile-icon .search").click(function(){
    $(".mobile-search").slideToggle(300);
})

// check box
$(".check").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else {
        $(this).addClass("active");
    }
})

// buy num
$(".minus").click(function () {
	var buyNum = $(this).parents(".mb").children("input").val();
	var clickNum;
	if (buyNum == 0 || buyNum < 0) {
		clickNum = 0;
	} else if (buyNum == "") {
		clickNum = 0;
	} else {
		clickNum = parseInt(buyNum) - 1;
	}
	$(this).parents(".mb").children("input").val(clickNum);
});
$(".plus").click(function () {
	var buyNum = $(this).parents(".mb").children("input").val();
	var clickNum;
	if (buyNum == "") {
		clickNum = 1;
	} else {
		clickNum = parseInt(buyNum) + 1;
	}
	$(this).parents(".mb").children("input").val(clickNum);
});

// product feature
$(".f-title").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".f-content").slideUp(300);
    }else {
        $(this).addClass("active");
        $(".f-content").slideDown(300);
    }
})

// join member
$(".tab").children("button").click(function(){
    $(".tab").children("button").removeClass("active");
    $(this).addClass("active");
    if($(this).hasClass("login")){
        $(".member-form.login").show();
        $(".member-form.signup").hide();
    }else if($(this).hasClass("signup")){
        $(".member-form.login").hide();
        $(".member-form.signup").show();
    }
})

// discount
$(".d-title").click(function(){
    $(this).parents(".discount").children(".d-input").slideDown(300).css("display","flex");
})