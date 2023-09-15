NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.filter = Array.prototype.filter;
NodeList.prototype.map = Array.prototype.map;
Array.prototype.random = function() { return this[Math.floor(Math.random() * this.length)]; }
Object.defineProperty(Array.prototype, 'random', { enumerable: false });

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

function ajax(url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(data ? 'POST' : 'GET', url, true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            try {
                data = JSON.parse(xhr.responseText);
            } catch($e) {
                data = xhr.responseText;
            }
            if (typeof success == 'function') success(data);
        } else {
            if (typeof error == 'function') error(xhr.status);
        }
    };
    xhr.onerror = function(err) {
        if (typeof error == 'function') error(err);
    };
    if (data) {
        if (typeof data == 'string') xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        if (typeof data == 'object') data = JSON.stringify(data);
        xhr.send(data);
    } else {
        xhr.send();
    }
}

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

function action(action, data, el) {
    if (typeof window[action] == 'function') window[action](data);
    if (/^#.+/i.test(action)) {
        document.documentElement.beforeScrollTop = document.documentElement.scrollTop;
        window.location.hash = action;
        document.documentElement.scrollTop = document.documentElement.beforeScrollTop;
    }
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

window.addEventListener('DOMContentLoaded', function() {
    userAgent();

});

jQuery(function() {

    var indexes = {current: 0};
    var slide = document.getElementsByClassName('text-slide');
    var slides = document.querySelector('.text-slide');
    if (typeof(slides) != 'undefined' && slides != null){
        window.onload = slideText();
    }
    function slideText() {
        if (indexes.last) {
            slide[indexes.last].classList.remove('is-active');
        }
        slides.classList.remove('is-active');
        slide[indexes.current].classList.add('is-active');
        indexes.last = indexes.current;
        indexes.current++;
        if (indexes.current >= slide.length) {
            indexes.current = 0;
        }

        setTimeout(slideText, 2000);
    }

    jQuery(".scrollto").on('click', function (e) {
        e.preventDefault();
        var hash = e.currentTarget.hash,
            scrollTo = 0,
            offset = 0;
        if (!$(hash).length) return;
        scrollTo = Math.round($(hash).offset().top) - offset;
        // animate
        jQuery('html, body').stop().animate({scrollTop: scrollTo}, 600);
    });

});

///

function maskInputTel() {
    var e = document.getElementById("phone");
    window.maskRu = IMask(e, {mask: "{8}9000000000", lazy: !1, placeholderChar: "-", autofix: !0})
}

function maskInputDate() {
    var e = document.getElementById("birthday"), t = "DD.MM.YYYY";
    IMask(e, {
        mask: Date,
        pattern: t,
        lazy: !1,
        min: new Date(1900, 0, 1),
        format: function (e) {
            return moment(e).format(t)
        },
        parse: function (e) {
            return moment(e, t)
        },
        blocks: {
            YYYY: {mask: IMask.MaskedRange, from: 1900, to: 2021},
            MM: {mask: IMask.MaskedRange, from: 1, to: 12},
            DD: {mask: IMask.MaskedRange, from: 1, to: 31},
            HH: {mask: IMask.MaskedRange, from: 0, to: 23},
            mm: {mask: IMask.MaskedRange, from: 0, to: 59}
        }
    })
}

function openFormCode() {
    var wrp = document.body;
    var e = document.querySelector(".form__code-wrapper");
    wrp.classList.add('no-scroll');
    e.classList.add("open"), document.querySelector(".body-wrap").classList.add("heit");
    var t = document.getElementById("phone").value;
    document.querySelector(".telValue").innerText = "".concat(t), e.querySelector(".close").addEventListener("click", function () {
        wrp.classList.remove('no-scroll');
        e.classList.remove("open"), document.querySelector(".body-wrap").classList.remove("heit")
    }), document.querySelector(".move").addEventListener("touchmove", function () {
        wrp.classList.remove('no-scroll');
        e.classList.remove("open"), document.querySelector(".body-wrap").classList.remove("heit")
    }), codeValidate()
}

function codeValidate() {
    var n = document.querySelectorAll(".code-input"), o = !1;
    n.forEach(function (t) {
        t.addEventListener("input", function (e) {
            o = !(!n[0].value || 1 !== n[1].value.length || 1 !== n[2].value.length || 1 !== n[3].value.length || "number" != typeof parseInt(t.value)), document.querySelector(".form__submit").disabled = !o
        })
    })
}

var regContainer = document.getElementById('registrationContainerWrp');
var showFormReg = document.body.contains(regContainer);

if (showFormReg){
    document.getElementById("phone").addEventListener("focus", function () {
        maskInputTel();
        var e, t = document.getElementById("phone");
        t.createTextRange ? ((e = t.createTextRange()).move("character", 0), e.select()) : t.setSelectionRange && t.setSelectionRange(0, 0)
    }), document.getElementById("birthday").addEventListener("focus", function () {
        maskInputDate();
        var e, t = document.getElementById("birthday");
        t.createTextRange ? ((e = t.createTextRange()).move("character", 0), e.select()) : t.setSelectionRange && t.setSelectionRange(0, 0)
    }), document.getElementById("password").addEventListener("focus", function () {
        var e, t = document.getElementById("password");
        t.createTextRange ? ((e = t.createTextRange()).move("character", 0), e.select()) : t.setSelectionRange && t.setSelectionRange(0, 0)
    }), document.querySelector(".eye").addEventListener("click", function () {
        var cdn = document.querySelector('meta[name="img_src"]').content || './img/';
        var e = document.querySelector("#password");
        "password" === e.type ? (e.type = "text", document.querySelector(".eye-img").src = cdn+"icon/icon2.svg") : (e.type = "password", document.querySelector(".eye-img").src = cdn+"icon/icon.svg")
    });
}

var interval, sec = 60;

function startInterval() {
    $(".timer").html("<p>Запросить код повторно можно  через ".concat(sec, " секунд</p> ")), interval = setInterval(function () {
        0 === --sec ? ($(".sendNewCode__button").show(), $(".timer").html(""), clearInterval(interval), sec = 60) : $(".timer").html("<p>Запросить код повторно можно  через ".concat(sec, " секунд</p> "))
    }, 1e3), $(".sendNewCode__button").hide()
}

$(".sendNewCode__button").on("click", function (e) {
    e.preventDefault(), interval && clearInterval(interval), startInterval()
}), $(".form__inputs input").keyup(function (e) {
    8 === (e.which || e.keyCode || e.charCode) ? $(this).prev("input").focus() : $(this).val().match(/^\d{1}$/) ? ($(this).next("input").focus(), $(this).next("input").select()) : $(this).val("")
});
var arr = document.querySelectorAll(".code");

function sendCode() {
    var e = document.querySelector(".num1").value, t = document.querySelector(".num2").value,
        n = document.querySelector(".num3").value, o = document.querySelector(".num4").value;
    document.querySelector("#checkCode").value = e + t + n + o
}

function getTextClipboard(e) {
    var t = (e.originalEvent || e).clipboardData.getData("text").split("");
    for (var n = document.querySelectorAll(".code"), o = 0; o < n.length; o++) n[o].value = t[o]
}

$(".form__inputs input").click(function (e) {
    (arr[0].value.length <= 0 && arr[1].value.length <= 0 && arr[2].value.length <= 0 && arr[3].value.length <= 0 ? arr[0] : arr[1].value.length <= 0 && arr[2].value.length <= 0 && arr[3].value.length <= 0 ? arr[1] : arr[2].value.length <= 0 && arr[3].value.length <= 0 ? arr[2] : arr[3].value.length <= 0 ? arr[3] : e.target).focus()
}), document.addEventListener("paste", getTextClipboard), document.querySelectorAll(".middle__promo").forEach(function (t) {
    t.addEventListener("click", function () {
        var e = document.createRange();
        e.selectNode(t.querySelector(".promo-text")), window.getSelection().removeAllRanges(), window.getSelection().addRange(e), document.execCommand("copy"), t.classList.add("copy"), setTimeout(function () {
            t.classList.remove("copy")
        }, 1e3)
    })
}), document.querySelectorAll(".popup-btn").forEach(function (e) {
    e.addEventListener("click", function () {
        document.querySelector("." + e.dataset.popup).classList.add("open")
        document.body.classList.add('no-scroll');
    })
}), document.querySelectorAll(".modal-wrap").forEach(function (t) {
    t.addEventListener("click", function (e) {
        e = e.target;
        // !e.closest(".close") && e !== t || (t.classList.remove("open"))
        if (!e.closest(".close") && e !== t) {return false;} else {
            t.classList.remove("open");
            document.body.classList.remove('no-scroll');
        }
    })
}), function (e) {
    e(window).on("load", function () {
        e(".modal_content").mCustomScrollbar({axis: "y", scrollButtons: {enable: !1}, mouseWheel: {enable: !0}})
    })
}(jQuery);


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
