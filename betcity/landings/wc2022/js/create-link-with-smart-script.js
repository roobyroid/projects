var OneLinkKeys = /** @class */ (function () {
    function OneLinkKeys() {
        this.pidStaticValue = '';
        this.campaignStaticValue = '';
        this.deepLink = '';
        this.pcDeepLink = '';
        this.afAdSet = '';
        this.isNeedSetClickId = false;
    }
    OneLinkKeys.prototype.setStaticValues = function (pidStaticValue, campaignStaticValue) {
        if (pidStaticValue === void 0) { pidStaticValue = ''; }
        if (campaignStaticValue === void 0) { campaignStaticValue = ''; }
        this.pidStaticValue = pidStaticValue;
        this.campaignStaticValue = campaignStaticValue;
    };
    OneLinkKeys.prototype.setDeepLink = function (deepLink) {
        if (deepLink === void 0) { deepLink = ''; }
        this.deepLink = deepLink;
    };
    OneLinkKeys.prototype.setPcDeepLink = function (pcDeepLink) {
        if (pcDeepLink === void 0) { pcDeepLink = ''; }
        this.pcDeepLink = pcDeepLink;
    };
    OneLinkKeys.prototype.setAfAdSet = function (afAdSet) {
        if (afAdSet === void 0) { afAdSet = ''; }
        this.afAdSet = afAdSet;
    };
    OneLinkKeys.prototype.setIsNeedSetClickId = function (isNeedSet) {
        if (isNeedSet === void 0) { isNeedSet = false; }
        this.isNeedSetClickId = isNeedSet;
    };
    OneLinkKeys.prototype.setAllParams = function (pidStaticValue, campaignStaticValue, deepLink, pcDeepLink, afAdSet, isNeedSetClickId) {
        if (pidStaticValue === void 0) { pidStaticValue = ''; }
        if (campaignStaticValue === void 0) { campaignStaticValue = ''; }
        if (deepLink === void 0) { deepLink = ''; }
        if (pcDeepLink === void 0) { pcDeepLink = ''; }
        if (afAdSet === void 0) { afAdSet = ''; }
        if (isNeedSetClickId === void 0) { isNeedSetClickId = false; }
        this.pidStaticValue = pidStaticValue;
        this.campaignStaticValue = campaignStaticValue;
        this.deepLink = deepLink;
        this.pcDeepLink = pcDeepLink;
        this.afAdSet = afAdSet;
        this.isNeedSetClickId = isNeedSetClickId;
    };
    return OneLinkKeys;
}());

//oneLinkKeys is object of OneLinkKeys
function createLink (oneLinkUrl ='', oneLinkKeys = {}) {
    if (!oneLinkUrl) {
        return;
    }

    let pidKeyList = ['utm_source', 'icm'];
    let pidStaticValue = oneLinkKeys.pidStaticValue || '';
    let campaignKeysList = ['utm_campaign', 'subid'];

    if (!getParamsValueFromUrl('utm_source') && !getParamsValueFromUrl('icm')) {
        pidKeyList = [];
        let qTagValue = getParamsValueFromUrl('qtag');

        if (qTagValue) {
            const end = qTagValue.indexOf('_');

            if (end > 1) {
                pidStaticValue = qTagValue.slice(1, end);
                campaignKeysList = ['qtag'];
            }
        }
    }

    const oneLinkGenerator = new window.AF.OneLinkUrlGenerator({
        oneLinkURL: oneLinkUrl,
        pidKeysList: pidKeyList,
        pidStaticValue: pidStaticValue,
        campaignKeysList: campaignKeysList,
        campaignStaticValue: oneLinkKeys.campaignStaticValue || '',
    });

    oneLinkGenerator.setChannel("utm_medium");
    oneLinkGenerator.setAdset("utm_content", oneLinkKeys.afAdSet || '');
    oneLinkGenerator.setAd("utm_term");
    oneLinkGenerator.setCustomParameter("prmreg", "prmreg");
    oneLinkGenerator.setCustomParameter("promo", "promo");
    oneLinkGenerator.setCustomParameter("refcode", "refcode");

    if (oneLinkKeys.isNeedSetClickId) {
        oneLinkGenerator.setCustomParameter("clickid", "clickid");
    }

    if (oneLinkKeys.deepLink) {
        oneLinkGenerator.setCustomParameter("betcity_web_link", "betcity_web_link", oneLinkKeys.deepLink);
    }

    if (oneLinkKeys.pcDeepLink) {
        oneLinkGenerator.setCustomParameter("af_web_dp", "af_web_dp", oneLinkKeys.pcDeepLink);
    }

    let url = oneLinkGenerator.generateUrl();

    if (!url) {
        url = oneLinkUrl;
    }

    return url;
}

function getParamsValueFromUrl (paramName = '') {
    if (!paramName) {
        return null;
    }

    const url = window.location.href;
    paramName = paramName.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results || !results[2]) {
        return null;
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function pasteOnelink (url = '', buttonsIds = []) {
    if (!url || !buttonsIds || buttonsIds.length === 0) {
        return;
    }

    document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < buttonsIds.length; i++) {
            const elem = document.getElementById(buttonsIds[i]);

            if (!elem || !['a', 'A'].includes(elem.tagName)) {
                continue;
            }

            elem.setAttribute('href', url);
        }
    });
}

//https://www.npmjs.com/package/qr-code-styling
function createQRCode (url='', options) {
    if (!url) {
        return;
    }

    if(!options) {
        options = {
            color: "#0092F3",
            withImage: true,
            dotsType: "rounded",
            cornersSquareType: "extra-rounded",
            cornersDotType: ""
        }
    }

    const qrOptions = {
        width: 256,
        height: 256,
        data: url,
        cornersSquareOptions: {
            type: options.cornersSquareType,
        },
        dotsOptions: {
            color: options.color,
            type: options.dotsType,
        },
        backgroundOptions: {
            color: "#fff",
        },
    };

    if (options.withImage) {
        qrOptions.image =  "../img/favicon.svg",
        qrOptions.imageOptions = {
            margin: 2
        }
    }

    const qrCode = new QRCodeStyling(qrOptions);

    return qrCode;
}

function pasteQRCode(url, placeIds=[], options) {
    if (!url || !placeIds || placeIds.length === 0) {
        return;
    }

    document.addEventListener("DOMContentLoaded", () => {
        for (let i = 0; i < placeIds.length; i++) {
            const qrCode = createQRCode(url, options);

            if(!qrCode) {
                return;
            }

            const elem = document.getElementById(placeIds[i]);

            if (!elem) {
                continue;
            }

            qrCode.append(elem);
        }
    });
}
