$(function() {
    if ($(".swiper-container").size() > 0 && require(["swiper"],
    function() {
        new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            spaceBetween: 30,
            centeredSlides: !0,
            autoplay: 5e3,
            autoplayDisableOnInteraction: !1,
            loop: !0,
            mode: "horizontal",
            paginationClickable: !0,
            preloadImages: !1,
            lazyLoading: !0
        })
    }), ($(".js-audio-wx").size() > 0 || $(".js-audio-music").size() > 0) && require(["jquery.jplayer"],
    function() {
        $(".js-audio-wx").each(function() {
            $(this).jPlayer({
                ready: function(t) {
                    $(this).jPlayer("setMedia", {
                        mp3: window.sysinfo.attachurl + $("#" + $(this).attr("data-id")).attr("data-src")
                    })
                },
                playing: function() {
                    $("#" + $(this).attr("data-id")).find(".audio-time").show(),
                    $("#" + $(this).attr("data-id")).find(".audioLoading").hide()
                },
                play: function() {
                    $("#" + $(this).attr("data-id")).find(".audioLoading").show()
                },
                pause: function() {
                    "true" == $("#" + $(this).attr("data-id")).attr("data-reload") && $(this).jPlayer("stop")
                },
                swfPath: "../web/resource/components/jplayer",
                supplied: "mp3,wma,wav,amr",
                solution: "html, flash",
                preload: "none",
                smoothPlayBar: !0,
                cssSelectorAncestor: "#" + $(this).attr("data-id"),
                cssSelector: {
                    play: ".js-play",
                    pause: ".js-pause",
                    duration: ".audio-time"
                }
            })
        }),
        $(".js-audio-music").each(function() {
            $(this).jPlayer({
                ready: function(t) {
                    $(this).jPlayer("setMedia", {
                        mp3: window.sysinfo.attachurl + $("#" + $(this).attr("data-id")).attr("data-src")
                    }),
                    $(this).jPlayer("option", {
                        loop: "true" == $("#" + $(this).attr("data-id")).attr("data-loop")
                    })
                },
                playing: function() {
                    $("#" + $(this).attr("data-id")).find(".audio-time").show(),
                    $("#" + $(this).attr("data-id")).find(".audioLoading").hide(),
                    $("#" + $(this).attr("data-id")).animate({
                        height: "58px"
                    })
                },
                play: function() {
                    $("#" + $(this).attr("data-id")).find(".audioLoading").show()
                },
                pause: function() {
                    "true" == $("#" + $(this).attr("data-id")).attr("data-reload") && $(this).jPlayer("stop")
                },
                swfPath: "../web/resource/components/jplayer",
                supplied: "mp3,wma,wav,amr",
                solution: "html, flash",
                preload: "none",
                smoothPlayBar: !0,
                cssSelectorAncestor: "#" + $(this).attr("data-id"),
                cssSelector: {
                    play: ".js-play",
                    pause: ".js-pause",
                    stop: ".js-stop",
                    currentTime: ".audio-current-time",
                    duration: ".audio-duration",
                    playBar: ".slider-fill",
                    seekBar: ".slider-bar"
                }
            })
        })
    }), $(".notice-box").each(function() {
        var t = 0,
        a = $(this).find(".js-scroll-notice"),
        e = $(this);
        setInterval(function() {
            0 > --t + a.width() && (t = e.width()),
            a.css({
                left: t
            })
        },
        25)
    }), $(".js-quickmenu div").removeClass("on"), $(".js-quickmenu .js-quickmenu-toggle").click(function() {
        $(this).hasClass("on") ? ($(this).removeClass("on"), $(".js-quickmenu .nav-group-item").removeClass("on")) : ($(this).addClass("on"), $(".js-quickmenu .nav-group-item").addClass("on"))
    }), $(".js-quickmenu a[data-toggle='dropdown']").click(function() {
        $(this).hasClass("on") ? ($(this).removeClass("on"), $(this).next("dl").hide()) : ($(".js-quickmenu a[data-toggle='dropdown']").removeClass("on"), $(".js-quickmenu dl").hide(), $(this).addClass("on"), $(this).next("dl").show())
    }), $(function() {
        $("form.js-ajax-form").submit(function(t) {
            return $(this).data("submit", 1),
            $('button[type="submit"]').prop("disabled", !0),
            $.ajax(this.action, {
                method: this.method.toUpperCase(),
                data: new FormData(this),
                cache: !1,
                processData: !1,
                contentType: !1,
                dataType: "json"
            }).done(function(t) {
                $(this).data("submit", 0),
                "success" == t.type ? util.toast(t.message, t.redirect, "success") : (util.toast(t.message, "", "error"), $('button[type="submit"]').prop("disabled", !1), util.toast(t.message, t.redirect, "error"))
            }).fail(function(t) {
                $(this).data("submit", 0),
                util.toast("操作失败，请重试", "", "error")
            }),
            t.preventDefault(),
            !1
        })
    }), $(".panes").size() > 0 || $(".mc-we7-home").size() > 0) {
        var t, a = 1,
        e = window.screen.width,
        i = window.screen.height;
        e / i > 320 / 568 ? (a = i / 568, t = (e / a - 320) / 2, e = "320px") : (a = e / 320, (i / a - 568) / 2, e = "100%"),
        window != window.top && $(".container").css({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "transform-origin": "top left",
            transform: "scale(" + a + ")"
        }),
        $(".container div").eq(0).css({
            width: e,
            marginLeft: t
        }),
        $("meta[name='viewport']").attr("content", "width=320, initial-scale=" + a + ", maximum-scale=" + a + ", user-scalable=no")
    }
    $(".panes").size() > 0 && require(["hammer"],
    function(t) {
        function a(a, e, i) {
            return a & t.DIRECTION_HORIZONTAL ? e: i
        }
        function e(e, i) {
            this.container = e,
            this.direction = i,
            this.panes = Array.prototype.slice.call($(this.container).children(".pane"), 0),
            this.containerSize = this.container[a(i, "offsetWidth", "offsetHeight")],
            this.currentIndex = 0,
            this.hammer = new t.Manager(this.container),
            this.hammer.add(new t.Pan({
                direction: this.direction,
                threshold: 10
            })),
            this.hammer.on("panstart panmove panend pancancel", t.bindFn(this.onPan, this)),
            this.show(this.currentIndex)
        }
        1 == $(".pane").size() && $("body").css({
            overflow: "hidden"
        });
        var i = 0,
        n = 0,
        s = 0;
        $("div[type]");
        $("div[type]").each(function() {
            var t = $(this).attr("type").substring(0, 3);
            if ("adi" === t) a = $(this).find("div[class='app-adImg']");
            else var a = $(this).find("div[class^='app-" + t + "']");
            var e = a.attr("style"),
            i = e.match(/animation\:(?:\s*)(\w+)\s+\d+/);
            if (null !== i && a.data("animateName", i[1]), a.data("animateName")) {
                var n = e.replace(/(-(?:webkit|moz|o|ms)-)?animation\:(?:\s*)(?:\w+)\s+(\d+)/g, "$1animation: noEffect $2");
                a.attr("style", n)
            }
        });
        window[t.prefixed(window, "requestAnimationFrame")];
        e.prototype = {
            show: function(a, e, i, n) {
                i = i || 0;
                var s = a;
                a = s > this.panes.length - 1 ? 0 : s < 0 ? this.panes.length - 1 : Math.max(0, Math.min(a, this.panes.length - 1));
                var r = this.container.className;
                n ? -1 === r.indexOf("animate") && (this.container.className += " animate") : -1 !== r.indexOf("animate") && (this.container.className = r.replace("animate", "").trim());
                var o, d, c;
                for (o = 0; o < this.panes.length; o++) if (d = this.containerSize / 100 * (100 * (o - a) + i), c = this.direction & t.DIRECTION_HORIZONTAL ? "translate3d(" + d + "px, 0, 0)": "translate3d(0, " + d + "px, 0)", this.panes[o].style.transform = c, this.panes[o].style.mozTransform = c, this.panes[o].style.webkitTransform = c, a != e && (e == o && (l = $(".pane").eq(o).find("div[type]")).each(function() {
                    var t = $(this).attr("type").substring(0, 3);
                    if ("adi" === t) a = $(this).find("div[class='app-adImg']");
                    else var a = $(this).find("div[class^='app-" + t + "']");
                    var e = a.attr("style").replace(/(-(?:webkit|moz|o|ms)-)?animation\:(?:\s*)(?:\w+)\s+(\d+)/g, "$1animation: noEffect $2");
                    a.attr("style", e)
                }), a == o)) {
                    var l = $(".pane").eq(o).find("div[type]");
                    l.each(function() {
                        var t = $(this).attr("type").substring(0, 3);
                        if ("adi" === t) a = $(this).find("div[class='app-adImg']");
                        else var a = $(this).find("div[class^='app-" + t + "']");
                        var e = a.attr("style"),
                        i = a.data("animateName"),
                        n = e.replace(/(-(?:webkit|moz|o|ms)-)?animation\:(?:\s*)(?:\w+)\s+(\d+)/g, "$1animation: " + i + " $2");
                        a.attr("style", n)
                    })
                }
                this.currentIndex = a
            },
            onPan: function(t) {
                if (1 == $(".pane").size()) {
                    $("body").css({
                        overflow: "hidden"
                    });
                    var e = $(".panes").parent().css("height"),
                    r = t.deltaY - i;
                    if (n += r, (s -= r) < 0) return s = 0,
                    n = 0,
                    i = 0,
                    !1;
                    if (s + 568 > parseInt(e)) return s = parseInt(e) - 568,
                    n = -(parseInt(e) - 568),
                    i = 0,
                    !1;
                    if (parseInt(e) > Math.abs(s) && s >= 0) {
                        var o = $(".alock");
                        if (o.length > 0) for (var d = 0; d < o.length; d++) $(o.get(d)).parent("div").css({
                            transform: "translate3d(0, " + -n + "px, 0)",
                            "-moz-transform": "translate3d(0, " + -n + "px, 0)",
                            "-webkit-transform": "translate3d(0, " + -n + "px, 0)",
                            "z-index": "2"
                        });
                        $(".pane").css({
                            transform: "translate3d(0, " + -s + "px, 0)",
                            "-moz-transform": "translate3d(0, " + -s + "px, 0)",
                            "-webkit-transform": "translate3d(0, " + -s + "px, 0)",
                            "z-index": "1"
                        })
                    }
                    i = t.deltaY ? t.deltaY: 0,
                    "panend" != t.type && "pancancel" != t.type || (i = 0)
                } else {
                    var c = a(this.direction, t.deltaX, t.deltaY),
                    l = 100 / this.containerSize * c,
                    h = !1,
                    p = this.currentIndex;
                    "panend" != t.type && "pancancel" != t.type || (Math.abs(l) > 10 && "panend" == t.type && (this.currentIndex += l < 0 ? 1 : -1), l = 0, h = !0),
                    this.show(this.currentIndex, p, l, h)
                }
            }
        },
        new e(document.querySelector(".panes"), t.DIRECTION_VERTICAL).hammer.get("pan"),
        $(window).on("scroll.elasticity",
        function(t) {
            t.preventDefault()
        }).on("touchmove.elasticity",
        function(t) {
            t.preventDefault()
        }),
        $(window).delegate("img", "mousemove",
        function(t) {
            t.preventDefault()
        })
    })
});