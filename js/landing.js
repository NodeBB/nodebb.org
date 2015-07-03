jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    }
});
! function (a) {
    a(function () {
        a('[data-ride="animated"]').appear();
        if (!a("html").hasClass("ie no-ie10")) {
            a('[data-ride="animated"]').addClass("appear");
            a('[data-ride="animated"]').on("appear", function () {
                var d = a(this),
                    c = (d.data("animation") || "fadeIn"),
                    b;
                if (!d.hasClass("animated")) {
                    b = d.data("delay") || 0;
                    setTimeout(function () {
                        d.removeClass("appear").addClass(c + " animated")
                    }, b)
                }
            })
        }
        a(document).on("click.app", '[href^="#"]', function (c) {
            c.preventDefault();
            var b = this.hash;
            if (!a(this).data("jump")) {
                return
            }
            a("html, body").stop().animate({
                scrollTop: a(b).offset().top
            }, 1000, "easeInOutExpo", function () {
                window.location.hash = b
            })
        })
    })
}(window.jQuery);
$(document).ready(function () {
    function a() {
        scrollPos = jQuery(this).scrollTop();
        jQuery(".hero-mb").css({
            "-webkit-transform": "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            transform: "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            opacity: 1 - scrollPos / 300
        })
    }
    jQuery(document).scroll(function () {
        if (jQuery(this).scrollTop() < 600) {
            a()
        }
    })
});
$(document).ready(function () {
    function a() {
        scrollPos = jQuery(this).scrollTop();
        jQuery(".hero-sb").css({
            "-webkit-transform": "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            transform: "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            opacity: 1 - scrollPos / 375
        })
    }
    jQuery(document).scroll(function () {
        if (jQuery(this).scrollTop() < 700) {
            a()
        }
    })
});
$(document).ready(function () {
    function a() {
        scrollPos = jQuery(this).scrollTop();
        jQuery(".hero-ss").css({
            "-webkit-transform": "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            transform: "translate3d(0px, " + scrollPos / 2.75 + "px, 0px)",
            opacity: 1 - scrollPos / 350
        })
    }
    jQuery(document).scroll(function () {
        if (jQuery(this).scrollTop() < 600) {
            a()
        }
    })
});
$(document).ready(function () {
    function a() {
        scrollPos = jQuery(this).scrollTop();
        jQuery(".hero-sd").css({
            "-webkit-transform": "translate3d(0px, " + scrollPos / 8.75 + "px, 0px)",
            transform: "translate3d(0px, " + scrollPos / 8.75 + "px, 0px)",
            opacity: 1 - scrollPos / 300
        })
    }
    jQuery(document).scroll(function () {
        if (jQuery(this).scrollTop() < 600) {
            a()
        }
    })
});

$(document).ready(function() {
    $('.demo-link').on("click", function() {
        $('.demo-arrow').fadeOut();
    });
 });