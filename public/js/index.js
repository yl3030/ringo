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