(function () {
    'use strict';

    function Autobet(alias) {

        this.query = {};
        this.config = {};
        this.event = {};
        this.events = [];
        this.fields = {};

        this.default = {
            alias: '',
            api: 'https://ad.betcity.ru/d',
            callback: 'init',
            domain: 'https://betcity.ru/',
            empty: '',
            ids_ch: [],
            ids_ev: [],
            ids_sp: [],
            ids_tm: [],
            image: 'jersey',
            lang: 0,
            link: '',
            sort: 'day',
            static: 'https://fcdn.betcity.ru/autobet/images/',
            utm_source: '',
            utm_campaign: '',
            utm_content: '',
            utm_medium: '',
            utm_term: '',
        }

        this.i18n = {
            lang: [ 'ru', 'en '],
            vs: [ 'Ничья', 'Draw' ],
            today: [ 'Сегодня', 'Today' ],
            tomorrow: [ 'Завтра', 'Tomorrow' ],
            days: [
                [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
                [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
            ],
            months: [
                [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря' ],
                [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
            ],
        }

        this.sports = {
            1: 'soccer', 2: 'tennis', 3: 'basketball', 4: 'formula-1', 5: 'baseball', 6: 'american-football', 7: 'ice-hockey', 8: 'handball',
            9: 'golf', 10: 'chess', 11: 'motorcycling', 12: 'volleyball', 13: 'rugby', 14: 'athletics', 15: 'biathlon', 16: 'cross-country-skiing',
            17: 'bandy', 18: 'auto-racing', 19: 'futsal', 20: 'boxing', 21: 'cycling', 22: 'forex', 23: 'snooker', 24: 'water-polo', 25: 'lottery',
            26: 'curling', 33: 'politics', 34: 'weightlifting', 35: 'olympics', 36: 'field-hockey', 37: 'aquatics', 38: 'culture', 39: 'ufc',
            40: 'fencing', 41: 'rowing', 42: 'gymnastics', 43: 'beach-soccer', 44: 'speed-skating', 45: 'luge', 46: 'table-tennis', 47: 'darts',
            48: 'lacrosse', 49: 'badminton', 50: 'judo', 51: 'equestrian', 52: 'sailing', 53: 'modern-pentathlon', 54: 'triathlon', 55: 'shooting',
            56: 'taekwondo', 57: 'floorball', 58: 'beach-volleyball', 59: 'poker', 60: 'squash', 61: 'figure-skating', 62: 'short-track-speed-skating',
            63: 'ski-jumping', 64: 'nordic-combined', 65: 'alpine-skiing', 66: 'freestyle-skiing', 67: 'snowboarding', 68: 'skeleton', 69: 'bobsleigh',
            70: 'beach-handball', 71: 'australian-football', 72: 'paddle-tennis', 73: 'cybersport', 74: 'cricket', 75: 'bowls', 76: 'wrestling'
        }

        this.submit_ajax = function(url, data, success, error) {
            if (typeof success == 'function') success = success.bind(this);
            if (typeof error == 'function') error = error.bind(this);
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
            }
            xhr.onerror = function(err) {
                if (typeof error == 'function') error(err);
            }
            if (data === true) xhr.withCredentials = true;
            if (data) {
                xhr.send(data);
            } else {
                xhr.send();
            }
        }

        this.load_events = function() {
            this.load_events_callback_count = 2;
            this.load_live(this.load_events_callback);
            this.load_line(this.load_events_callback);
        }

        this.load_live = function(callback) {
            var url = this.config.api + '/on_air/bets/?rev=8&strip=ext&lang=' + this.config.lang;
            var params = '';
            var fields = {
                ids_ch: 'ids_ch',
                ids_ev: 'ids'
            }
            for (var key in fields) {
                if (this.config[key].length) {
                    params += '&' + fields[key] + '=' + this.config[key].join();
                }
            }
            this.submit_ajax(url + params, null, callback, callback);
        }

        this.load_line = function(callback) {
            var url = this.config.api + '/off/events?rev=6&lang=' + this.config.lang;
            var params = '';
            var fields = {
                ids_ch: 'ids',
                ids_tm: 'id_tm',
                ids_ev: 'id_ev'
            }
            for (var key in fields) {
                if (this.config[key].length) {
                    params += '&' + fields[key] + '=' + this.config[key].join();
                }
            }
            this.submit_ajax(url + params, null, callback, callback);
        }

        this.load_events_callback = function(data) {
            if (data && data.contents) {
                data = JSON.parse(data.contents);
            }
            if (data && data.reply) {
                var events = this.make_array(data.reply);
                events = this.filter_ended_events(events);
                events = this.filter_empty_events(events);
                this.events = this.events.concat(events);
            }

            if (--this.load_events_callback_count) return false;

            this.events = this.sort_data(this.events);

            if (this.events.length) {
                this.render();
            } else {
                this.empty();
            }
        }

        this.make_array = function(reply) {
            var events = [];
            for (let s in reply.sports) {
                for (let c in reply.sports[s].chmps) {
                    for (let e in reply.sports[s].chmps[c].evts) {
                        events.push(this.make_array_item(
                            reply.sports[s],
                            reply.sports[s].chmps[c],
                            reply.sports[s].chmps[c].evts[e]
                        ));
                    }
                }
            }
            return events;
        }

        this.make_array_item = function(sport, champ, event) {
            return {
                id_sp: sport.id_sp,
                name_sp: sport.name_sp,
                id_ch: champ.id_ch,
                id_ch_gl: champ.id_ch_gl,
                name_ch: champ.name_ch,
                id_ev: event.id_ev,
                st_ev: event.st_ev,
                status_ev: event.status_ev,
                date_ev: event.date_ev,
                id_ht: event.id_ht,
                id_at: event.id_at,
                name_ht: event.name_ht,
                name_at: event.name_at,
                sc_ev: event.sc_ev,
                quotes: this.make_quotes(event),
            }
        }

        this.make_quotes = function(event) {
            quotes = {};
            if (event.main['69']) {
                var values = Object.values(event.main['69'].data);
                if (values && values[0].blocks.Wm) {
                    var quotes = values[0].blocks.Wm;
                    for (var key in quotes) {
                        quotes[key] = quotes[key].kf;
                    }
                }
            }
            return quotes;
        }

        this.filter_empty_events = function(events) {
            return events.filter(function(value) {
                return value.quotes.P1 && value.quotes.P2;
            });
        }

        this.filter_ended_events = function(events) {
            return events.filter(function(value) {
                return value.status_ev == 0;
            });
        }

        this.sort_data = function(events) {
            events = events.sort(function(a, b) {
                return a.date_ev - b.date_ev;
            });
            return events;
        }

        this.first_day = function(events) {
            var date = new Date();
            date.setTime(events[0].date_ev + 1000);
            date.setHours(0, 0, 0, 0);
            return date.getTime() / 1000;
        }

        this.filter_first_day_events = function(events) {
            var first_day = this.first_day(events);
            return events.filter(function(value) {
                return value.status_ev - first_day < 86400;
            });
        }

        this.select_data = function(events) {
            switch (this.config.sort) {
                case 'first':
                    return events[0];
                case 'last':
                    return events[data.length - 1];
                case 'rand':
                    return events[Math.floor(Math.random() * events.length)];
                case 'day':
                default:
                    var first_day_events = this.filter_first_day_events(events);
                    return first_day_events[Math.floor(Math.random() * first_day_events.length)];
            }
        }

        this.make_dates = function(event) {
            var now = new Date();
            var date = new Date(event.date_ev * 1000);
            var dates = {
                time: String('0' + date.getHours()).slice(-2) + ':' + String('0' + date.getMinutes()).slice(-2),
                date: String('0' + date.getDate()).slice(-2) + '.' + String('0' + (date.getMonth() + 1)).slice(-2),
                day: date.getDate(),
                month: this.i18n.months[this.config.lang][date.getMonth()],
                weekday: this.i18n.days[this.config.lang][date.getDay()],
                humday: '',
                live: date.getTime() < now.getTime(),
            }
            now.setHours(0, 0, 0, 0);
            var diff = (date.getTime() - now.getTime()) / 1000;
            dates.humday = diff < 86400 ? this.i18n.today[this.config.lang]
                : diff < 86400 * 2 ? this.i18n.tomorrow[this.config.lang]
                : diff < 86400 * 7 ? dates.weekday
                : (dates.day + ' ' + dates.month);
            return dates;
        }

        this.make_names = function(event) {
            var names = {
                sport: event.name_sp,
                event: event.name_ht + ' - ' + event.name_at,
                team1: event.name_ht,
                team2: event.name_at,
                champ: event.name_ch.replace(event.name_sp + '. ', ''),
            }
            return names;
        }

        this.make_logos = function(event) {
            return {
                logo1: this.config.static + this.config.image + '/' + event.id_ht + '.png',
                logo2: this.config.static + this.config.image + '/' + event.id_at + '.png',
            }
        }

        this.make_utm = function() {
            var utm = [];
            for (var key in this.config) {
                if (key.indexOf('utm_') === 0 && this.config[key]) {
                    utm.push(key + '=' + this.config[key]);
                }
            }
            utm = utm.join('&');
            return utm;
        }

        this.make_links = function(event) {
            var links = '';
            var type = (event.date_ev * 1000) < new Date().getTime() ? 'live' : 'line';
            var utm = this.make_utm();
            if (this.config.link) {
                links = this.config.link
                var tmp = {
                    '{domain}': this.config.domain,
                    '{type}': type,
                    '{sport}': this.sports[event.id_sp],
                    '{champ}': event.id_ch,
                    '{event}': event.id_ev,
                    '{url}': encodeURIComponent(links.url),
                    '{utm}': utm,
                }
                for (var t in tmp) links = links.replace(t, tmp[t]);
            } else {
                links = this.config.domain + this.i18n.lang[this.config.lang] + '/' + type + '/'
                    + this.sports[event.id_sp] + '/' + event.id_ch + '/' + event.id_ev + (utm ? '?' : '') + utm;
            }
            return links;
        }

        this.make_event = function(event) {
            var names = this.make_names(event);
            var logos = this.make_logos(event);
            var dates = this.make_dates(event);
            var links = this.make_links(event);

            return {
                ID: event.id_ev,
                CH: event.id_ch,
                SP: event.id_sp,

                SPORT: names.sport,
                CHAMP: names.champ,
                EVENT: names.event,

                TEAM1: names.team1,
                VS: this.i18n.vs[this.config.lang],
                TEAM2: names.team2,

                LOGO1: logos.logo1,
                LOGO2: logos.logo2,

                START: event.date_ev,
                STARTTIME: dates.time,
                STARTDATE: dates.date,
                STARTDAY: dates.day,
                STARTMONTH: dates.month,
                STARTWEEKDAY: dates.weekday,
                STARTHUMDAY: dates.humday,

                LIVE: dates.live,

                QUOTE1: event.quotes.P1.toFixed(2),
                QUOTEX: event.quotes.X ? event.quotes.X.toFixed(2) : '',
                QUOTE2: event.quotes.P2.toFixed(2),

                LINK: links,
            }
        }

        this.render = function() {
            this.event = this.select_data(this.events);
            window.autobet.event = this.make_event(this.event);
            this.callback();
        }

        this.empty = function() {
            if (this.config.empty && window.autobet.configs[this.config.empty]) {
                this.init(this.config.empty);
            } else {
                this.callback();
            }
        }

        this.load_event = function() {
            if (this.config.ids_ch.length || this.config.ids_ev.length) {
                this.load_events();
            } else {
                this.empty();
            }
        }

        this.callback = function() {
            if (!this.callback_count) this.callback_count = 0;
            if (this.config.callback
                && !this.callback_count
                && (typeof window[this.config.callback] == 'function')
            ) {
                this.callback_count++;
                window[this.config.callback]();
            }
        }

        this.load_query = function(string) {
            if (string[0] == '?') string = string.substr(1);
            var params = string.split('&').map(function(param) { return param.split('='); });
            this.query = params.reduce(function(query, param) { if (param[0]) query[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || ''); return query; }, {});
        }

        this.load_config = function(alias) {
            alias = alias || this.query.alias || window.autobet.alias || this.default.alias;
            var config = window.autobet.configs[alias] || {};
            for (var i in this.default) {
                this.config[i] = this.query[i] || window.autobet[i] || config[i] || this.default[i];
            }
            window.autobet.fields = {};
            for (i in config) if (this.default[i] === undefined) window.autobet.fields[i] = config[i];
        }

        this.init = function(alias) {
            this.load_query(window.location.search);
            this.load_config(alias);
            window.setTimeout(this.callback.bind(this), 2000);
            this.load_event();
        }

        this.init(alias);
    }

    window.setTimeout(function() { window.autobet.debug = new Autobet(); }, 0);

}());

window.autobet.configs =
// autobet.configs
{
    "milan": {
        "ids_sp": [
            "1"
        ],
        "ids_ch": [
            "74979"
        ],
        "ids_tm": [],
        "ids_ev": [],
        "sort": "day",
        "image": "jersey",
        "link": "",
        "empty": "",
        "utm_medium": "",
        "utm_campaign": "",
        "utm_content": "",
        "utm_term": "",
        "AMOUNT": "100 000 ₽",
        "COIN": "100 000",
        "DISCLAIMER": "*До 100 000 рублей в виде фрибетов**. ** Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с 14.11.2022 (00:00:00 МСК) по 31.12.2022 (23:59:59 МСК). Для участия в акции участнику необходимо зарегистрироваться и сделать ставку  от 500 рублей на любое событие с кф. от 1.8 на сайте www.betcity.ru или в мобильном приложении Бетсити. Полные правила акции, информацию об организаторе, призовом фонде, количестве призов или выигрышей, сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. Розыгрыш происходит в момент совершения события. Источник информации об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru.",
        "PROMOCODE": "NEW3"
    },
    "irland": {
        "ids_sp": [
            "1"
        ],
        "ids_ch": [
            "74979"
        ],
        "ids_tm": [],
        "ids_ev": [],
        "sort": "day",
        "image": "jersey",
        "link": "",
        "empty": "",
        "utm_medium": "",
        "utm_campaign": "",
        "utm_content": "",
        "utm_term": "",
        "AMOUNT": "100 000 ₽",
        "COIN": "100 000",
        "DISCLAIMER": "*До 100 000 рублей в виде фрибетов**. ** Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с 14.11.2022 (00:00:00 МСК) по 31.12.2022 (23:59:59 МСК). Для участия в акции участнику необходимо зарегистрироваться и сделать ставку  от 500 рублей на любое событие с кф. от 1.8 на сайте www.betcity.ru или в мобильном приложении Бетсити. Полные правила акции, информацию об организаторе, призовом фонде, количестве призов или выигрышей, сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. Розыгрыш происходит в момент совершения события. Источник информации об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru.",
        "PROMOCODE": "NEW3"
    },
    "test": {
        "ids_sp": [
            "1"
        ],
        "ids_ch": [
            "74979"
        ],
        "ids_tm": [],
        "ids_ev": [],
        "sort": "day",
        "image": "jersey",
        "link": "",
        "empty": "",
        "utm_medium": "",
        "utm_campaign": "",
        "utm_content": "",
        "utm_term": ""
    },
    "dota": {
        "ids_sp": [
            "73"
        ],
        "ids_ch": [
            "149625"
        ],
        "ids_tm": [],
        "ids_ev": [
            "12907560"
        ],
        "sort": "rand",
        "image": "logo",
        "link": "",
        "empty": "",
        "utm_medium": "",
        "utm_campaign": "",
        "utm_content": "",
        "utm_term": "",
        "AMOUNT": "100 502 ₽",
        "COIN": "100 502",
        "DISCLAIMER": "Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2 Dota 2",
        "PROMOCODE": "DOKA2DOKA2DOKA2DOKA2DOKA2"
    },
    "test2": {
        "ids_sp": [
            "1"
        ],
        "ids_ch": [],
        "ids_tm": [],
        "ids_ev": [],
        "sort": "",
        "image": "",
        "link": "",
        "empty": "",
        "utm_medium": "",
        "utm_campaign": "",
        "utm_content": "",
        "utm_term": "",
        "AMOUNT": "100 000 ₽",
        "COIN": "100 000",
        "DISCLAIMER": "*До 100 000 рублей в виде фрибетов**. ** Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с 14.11.2022 (00:00:00 МСК) по 31.12.2022 (23:59:59 МСК). Для участия в акции участнику необходимо зарегистрироваться и сделать ставку  от 500 рублей на любое событие с кф. от 1.8 на сайте www.betcity.ru или в мобильном приложении Бетсити. Полные правила акции, информацию об организаторе, призовом фонде, количестве призов или выигрышей, сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. Розыгрыш происходит в момент совершения события. Источник информации об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru.",
        "PROMOCODE": "NEW3"
    }
}