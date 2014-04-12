$("#scroll").click(function (event) {
event.preventDefault();
var dest = 0;
if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
    dest = $(document).height() - $(window).height();
} else {
    dest = $(this.hash).offset().top;
}
$('html,body').animate({
    scrollTop: dest
}, 1000, 'swing');
});

$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#landing').height();
    if(windowH > wrapperH) {                            
        $('#landing').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#landing').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#footer').height();
        if(windowH > truecontentH) {
            $('#landing').css('height', (newH)+'px');
        }

    })          
});