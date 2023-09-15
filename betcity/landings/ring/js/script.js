NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.map = Array.prototype.map;

function userAgent() {
    var attribute = '';
    var devices = {
        android: /android/i,
        iphone: /iphone/i,
        ipad: /ipad/i,
        ipod: /ipod/i,
        ios: /iphone|ipod|ipad/i
    };

    for (var device in devices)
        if (devices[device].test(window.navigator.userAgent))
            attribute += ' ' + device;

    document.querySelector('html').setAttribute('device', attribute);
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

window.addEventListener('DOMContentLoaded', function() {
    userAgent();
});

///
document.addEventListener("paste", getTextClipboard),
document.querySelectorAll(".middle__promo").forEach(function(t) {
    t.addEventListener("click", function() {
        var e = document.createRange();
        e.selectNode(t.querySelector(".promo-text")),
            window.getSelection().removeAllRanges(),
            window.getSelection().addRange(e),
            document.execCommand("copy"),
            t.classList.add("copy"),
            setTimeout(function() {
                t.classList.remove("copy")
            }, 1e3)
    })
}),
document.querySelectorAll(".popup-btn").forEach(function(e) {
    e.addEventListener("click", function() {
        document.querySelector("." + e.dataset.popup).classList.add("open")
    })
}),
document.querySelectorAll(".modal-wrap").forEach(function(t) {
    t.addEventListener("click", function(e) {
        e = e.target;
        !e.closest(".close") && e !== t || (t.classList.remove("open"))
    })
}),
function(e) {
    e(window).on("load", function() {
        e(".modal_content").mCustomScrollbar({
            axis: "y",
            scrollButtons: {
                enable: !1
            },
            mouseWheel: {
                enable: !0
            }
        })
    })
}(jQuery);

function getTextClipboard(e) {
    console.log('getTextClipboard..');
    var t = (e.originalEvent || e).clipboardData.getData("text").split("");
    for (var n = document.querySelectorAll(".code"), o = 0; o < n.length; o++) n[o].value = t[o]
}

(function() {
    var timer = 0;
    window.addEventListener('resize', function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        else
            document.body.classList.add('stop-transitions');

        timer = setTimeout(function () {
            document.body.classList.remove('stop-transitions');
            timer = null;
        }, 100);
    });
})();

(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
    };
}(Element.prototype));
