"use strict";
AOS.init({
        duration: 700,
        easing: "ease-out-quad",
        once: !0,
        startEvent: "load"
    }),
    function() {
        var t = document.querySelectorAll('[data-toggle="countup"]');

        function a(t) {
            var e = t.dataset.from ? +t.dataset.from : null,
                a = t.dataset.to ? +t.dataset.to : null,
                o = t.dataset.decimals ? +t.dataset.decimals : null,
                n = t.dataset.duration ? +t.dataset.duration : null,
                l = t.dataset.options ? JSON.parse(t.dataset.options) : null,
                r = new CountUp(t, e, a, o, n, l);
            r.error ? console.error(r.error) : (r.start(), t.classList.add("counted"))
        }[].forEach.call(t, function(t) {
            "countup:in" !== t.getAttribute("data-aos-id") && a(t)
        }), document.addEventListener("aos:in:countup:in", function(t) {
            if (t.detail instanceof Element) a(t.detail);
            else {
                var e = document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)');
                [].forEach.call(e, function(t) {
                    a(t)
                })
            }
        })
    }(), $.fancybox.defaults.image.preload = !1, $.fancybox.defaults.toolbar = !1, $.fancybox.defaults.clickContent = !1;
var Highlight = function() {
    var t = document.querySelectorAll(".highlight");
    [].forEach.call(t, function(t) {
        ! function(t) {
            hljs.highlightBlock(t)
        }(t)
    })
}();
! function() {
    var t = document.querySelectorAll('[data-toggle="map"]');
    t && [].forEach.call(t, function(t) {
        ! function(t) {
            mapboxgl.accessToken = "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg", new mapboxgl.Map({
                container: t,
                style: "mapbox://styles/mapbox/light-v9",
                center: JSON.parse(t.dataset.center),
                zoom: t.dataset.zoom,
                scrollZoom: !1,
                interactive: !1
            })
        }(t)
    })
}(),
function() {
    var a = document.querySelector(".navbar"),
        o = !1,
        n = a.classList.contains("navbar-togglable");

    function l() {
        o && n && (a.classList.remove("navbar-light"), a.classList.remove("bg-white"), a.classList.remove("border-bottom"), a.classList.add("navbar-dark"), a.style.display = "none", a.offsetHeight, a.style.display = "block", o = !1)
    }

    function e(t) {
        var e = window.pageYOffset;
        0 < e && !o ? !o && n && (a.classList.remove("navbar-dark"), a.classList.add("navbar-light"), a.classList.add("bg-white"), a.classList.add("border-bottom"), o = !0) : (0 == e || e < 0 && o) && l()
    }
    "load scroll".split(" ").forEach(function(t) {
        window.addEventListener(t, function(t) {
            t.type;
            e()
        })
    })
}(),
function() {
    var t = document.querySelectorAll(".svg-shim > svg");
    /MSIE \d|Trident.*rv:/.test(navigator.userAgent) && [].forEach.call(t, function(t) {
        ! function(t) {
            var e = window.getComputedStyle(t, null).getPropertyValue("color"),
                a = (new XMLSerializer).serializeToString(t);
            a = "data:image/svg+xml," + (a = (a = (a = (a = (a = (a = a.replace(/currentColor/g, e)).replace(/\s\s+/g, " ")).replace(/</g, "%3C")).replace(/>/g, "%3E")).replace(/#/g, "%23")).replace(/"/g, "'"));
            var o = document.createElement("img");
            o.src = a, o.alt = "...";
            var n = t.parentNode;
            n.appendChild(o), n.removeChild(t)
        }(t)
    })
}();
var Popover = function() {
    var t = $('[data-toggle="popover"]');
    t.length && t.popover()
}();
! function() {
    var t = document.querySelector('[data-toggle="price"]');
    t && t.addEventListener("change", function(t) {
        ! function(t) {
            var e = t.target,
                n = e.checked,
                a = e.dataset.target,
                o = document.querySelectorAll(a);
            [].forEach.call(o, function(t) {
                var e = t.dataset.annual,
                    a = t.dataset.monthly,
                    o = n ? new CountUp(t, e, a, null, 1) : new CountUp(t, a, e, null, 1);
                o.error ? console.error(o.error) : o.start()
            })
        }(t)
    })
}(), SmoothScroll && new SmoothScroll("a[data-smooth-scroll]");
var Tooltip = function() {
    var t = $('[data-toggle="tooltip"]');
    t.length && t.tooltip()
}();
! function() {
    var t = document.querySelectorAll('[data-toggle="typed"]');
    t && [].forEach.call(t, function(t) {
        ! function(t) {
            new Typed(t, {
                strings: JSON.parse(t.dataset.strings),
                typeSpeed: 40,
                backSpeed: 40,
                backDelay: 1e3,
                loop: !0
            })
        }(t)
    })
}();