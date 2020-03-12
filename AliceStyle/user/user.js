/*
 * 自定义js，js粘贴到此处默认生效
 */
 $("#kotori").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 600)
});
$(window).load(function() {
	1 < location.hash.length && $('.tocify-item[data-unique="' + decodeURI(location.hash.substr(1)) + '"]').click()
});

function updateLiveStatus(b) {
	1 == b.data.liveStatus && $("#bilibili-live").removeClass("hide")
};