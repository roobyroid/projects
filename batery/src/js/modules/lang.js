const lang = () => {
  const allLang = ['en', 'ru'];
  let currentLang = localStorage.getItem('language') || 'en';

  const textHomePage = {
    overheadHeroTitle: {
      en: 'Affiliate Tournament&nbsp;from',
      ru: 'Арбитражный турнир от',
    },
    info: {
      en: 'information',
      ru: 'Информация',
    },
    period: {
      en: '<span>period</span> of&nbsp;tournament',
      ru: '<span>Период</span> турнира',
    },
    leaderboard: {
      en: 'leaderboard',
      ru: 'Таблица лидеров',
    },
    boardWebmasterName: {
      en: 'WEB NAME',
      ru: 'имя веба',
    },
    boardHeadPTS: {
      en: 'PTS',
      ru: 'Очки',
    },
    contacts: {
      en: 'contacts',
      ru: 'Контакты',
    },
    termsBtn: {
      en: 'Terms and Conditions',
      ru: 'Правила и условия',
    },
    terms: {
      en: 'Terms<br> and Conditions',
      ru: 'Правила<br> и условия',
    },
    termsSubtitle: {
      en: 'Valid only for offers<br> with the&nbsp;RS payment&nbsp;model',
      ru: 'Актуально только для оферов<br> с&nbsp;моделью оплаты&nbsp;RS',
    },
    from: {
      en: 'From',
      ru: 'От',
    },
    termsInfo: {
      en: '1&nbsp;DEP = 10&nbsp;PTS',
      ru: '1&nbsp;депозит=10 баллов',
    },
    rules: {
      en: 'Rules for scoring',
      ru: 'Правила начисления баллов',
    },
    rulesText: {
      en: `1&nbsp;deposit of&nbsp;a&nbsp;player who registered during the tournament period is&nbsp;equal to&nbsp;10&nbsp;points.<br>
The amount of&nbsp;points in&nbsp;the tournament is&nbsp;calculated using the formula: 100 deposits * 10&nbsp;points = 1000&nbsp;points.`,
      ru: `1&nbsp;депозит игрока, сделавшего регистрацию в&nbsp;период срока проведения турнира, приравнивается к&nbsp;10&nbsp;баллам.<br>
      Сумма баллов в&nbsp;турнире рассчитывается по&nbsp;формуле: 100 депозитов*10 баллов=1000&nbsp;баллов.`,
    },
    detailed: {
      en: 'Detailed conditions',
      ru: 'Условия',
    },
    detailedText: {
      en: `1. Allowed sources: everything except spam, motive, fraud.<br>
      2. Cuts and other conditions prohibiting participation in&nbsp;the tournament:<br>
      inconsistent traffic source;<br>
      prohibited traffic source;<br>
      fraud and conspiracy;<br>
      lack of&nbsp;traffic (new FTD) for two or&nbsp;more months.<br>
      3.Only webmasters who have connected to&nbsp;the tournament offer are allowed to&nbsp;participate in&nbsp;the tournament. Traffic to&nbsp;other offers will not be&nbsp;taken into account in&nbsp;the tournament rankings.<br>
      4.Payments for received traffic are carried out in&nbsp;accordance with the conditions stated in&nbsp;the offer description.<br>
      5. The results of&nbsp;the tournament are summed up&nbsp;in&nbsp;this period: 01.10.2024-10.20.2024.<br>
      6. Payment of&nbsp;prizes is&nbsp;made only by&nbsp;transferring the winning amount to&nbsp;the winner&rsquo;s usdt trc wallet.<br>
      7. During the tournament, the webmaster will be&nbsp;provided with feedback on&nbsp;his traffic (at&nbsp;the webmaster&rsquo;s request).<br>
      8.If the webmaster was blocked, we&nbsp;cut off his tournament points. The Affiliate manager is&nbsp;obliged to&nbsp;indicate the reason for the cut/blocking and provide the information on&nbsp;the basis of&nbsp;the decision, which was made by&nbsp;advertiser. The provided information is&nbsp;confidential and can be&nbsp;transferred to&nbsp;third parties only with the consent of&nbsp;both sides (webmaster and advertiser).`,
      ru: `1.Разрешенные источники: все, кроме спама, мотива, фрода.<br>
      2.Срезы и&nbsp;другие условия запрета участия в&nbsp;турнире:<br>
      несогласованный источник траффика;<br>
      запрещенный источник траффика;<br>
      мошенничество и&nbsp;сговор;<br>
      отсутствие траффика (новые FTD) два и&nbsp;более месяцев.<br>
      3.К участию в&nbsp;турнире допускаются только вебмастера, которые подключились к&nbsp;турнирному офферу. Траффик на&nbsp;другие офферы не&nbsp;будет учтен в&nbsp;турнирном рейтинге.<br>
      4.Выплаты по&nbsp;налитому траффику проводятся в&nbsp;соответствии с&nbsp;условиями, озвученными в&nbsp;описании оффера.<br> 
      5.Итоги турнира подводятся в&nbsp;период с&nbsp;1&nbsp;по&nbsp;10&nbsp;ноября 2024&nbsp;г.<br>
      6.Выплата призов производится только методом перевода выигрышной суммы на&nbsp;кошелек usdt trc победителя.<br>
      7.В процессе проведения турнира вебмамстеру будет предоставлен фидбек по&nbsp;его траффику (по&nbsp;запросу вебмастера).<br>
      8.При блокировке вебмастера, срезаем его турнирные баллы. Affiliate manager обязан указать причину среза/блокировки и&nbsp;предоставить информацию, на&nbsp;основании которой было принято решение. Предоставленная информация является конфиденциальной и&nbsp;может быть передана третьим лицам только с&nbsp;согласия обеих сторон (вебмастера и&nbsp;рекламодателя).`,
    },
  };

  const langParent = document.querySelector('.js_lang');
  const langHead = langParent.querySelector('.js_lang-head');
  const langHeadVal = langHead.querySelector('.js_lang-val');
  const langBtns = langParent.querySelectorAll('[data-btn]');

  langHead.addEventListener('click', () => {
    langParent.classList.toggle('open');
  });

  function changeLang() {
    langBtns.forEach((btn) => {
      btn.style.display = 'block';
      if (btn.dataset.btn === currentLang) {
        btn.style.display = 'none';
        langHeadVal.textContent = btn.textContent;
      }
    });

    for (const key in textHomePage) {
      const elements = document.querySelectorAll(`[data-lang=${key}]`);
      elements.forEach((element) => {
        if (element) {
          element.innerHTML = textHomePage[key][currentLang];
        }
      });
    }

    // change fonts title
    const body = document.querySelector('body');
    if (currentLang === 'ru') {
      body.classList.add('lang-ru');
    } else {
      body.classList.remove('lang-ru');
    }
  }

  langBtns.forEach((langBtn) => {
    langBtn.addEventListener('click', () => {
      currentLang = langBtn.dataset.btn;
      localStorage.setItem('language', langBtn.dataset.btn);
      langParent.classList.remove('open');

      document.querySelectorAll('.js_accordion').forEach((accordion) => {
        if (accordion.classList.contains('open')) {
          accordion.classList.remove('open');
          accordion.querySelector('.js_accordion-control').setAttribute('aria-expanded', false);
          accordion.querySelector('.js_accordion-content').setAttribute('aria-hidden', true);
          accordion.querySelector('.js_accordion-content').style.maxHeight = null;
        }
      });

      changeLang();
    });
  });

  changeLang();
};
export default lang;
