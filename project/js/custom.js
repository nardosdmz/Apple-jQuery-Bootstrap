let footer = $(".footer-links-wrapper h3");


footer.click(function () {
	// console.log($(this).next());
	if ($(window).width() < 768) {
		// $(this).css("border-color", "blue");
		$(this).next().slideToggle(300);
		$(this).toggleClass("expanded");
	}
});

$(window).resize(function () {
	if (window.innerWidth > 768) {
		location.reload();
	}
});
