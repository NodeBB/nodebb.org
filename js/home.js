$("#scroll").click(function(b){b.preventDefault();var a=0;if($(this.hash).offset().top>$(document).height()-$(window).height()){a=$(document).height()-$(window).height()}else{a=$(this.hash).offset().top}$("html,body").animate({scrollTop:a},1000,"swing")});$(function(){var b=$(window).height();var a=$("#landing").height();if(b>a){$("#landing").css({height:($(window).height())+"px"})}$(window).resize(function(){var e=$(window).height();var d=$("#landing").height();var f=e-d;var c=d+f;var g=$("#footer").height();if(e>g){$("#landing").css("height",(c)+"px")}})});

$(document).ready(function() {
	$.get('https://api.github.com/repos/NodeBB/NodeBB/tags', function(data) {
		if (data && data.length) {
			var latest = data[0];
			$('#latest-version').text(latest.name);
			$('#latest-download').attr('href', latest.zipball_url);
		}
	});
});