const lang = () => {
  const allLang = ['en', 'ru'];
  let currentLang = localStorage.getItem('language') || 'en';

  const textHomePage = {
    overheadHeroTitle: {
      en: 'Affiliate Tournament&nbsp;from',
      ru: 'Партнерский турнир от',
    },
    info: {
      en: 'INFORMATION',
      ru: 'Информация',
    },
    infoText: {
      en: 'Available geos:',
      ru: 'Доступные регионы:',
    },
    leaderboard: {
      en: 'leaderboard',
      ru: 'Таблица лидеров',
    },
    boardHeadName: {
      en: 'WEB NAME',
      ru: 'ВЕБ-ИМЯ',
    },
    boardHeadPTS: {
      en: 'PTS',
      ru: 'Очки',
    },
    contacts: {
      en: 'contacts',
      ru: 'Контакты',
    },
    terms: {
      en: 'Terms and Conditions',
      ru: 'Правила и условия',
    },
    termsSubtitle: {
      en: 'Valid only for offers<br> with the&nbsp;RS payment&nbsp;model',
      ru: 'Действительно только для предложений<br> с&nbsp;моделью оплаты&nbsp;RS',
    },
    from: {
      en: 'From',
      ru: 'От',
    },
    termsInfo: {
      en: '1&nbsp;DEP = 10&nbsp;PTS',
      ru: '1 ДЕП = 10 ОЧКОВ',
    },
    detailed: {
      en: 'Detailed conditions',
      ru: 'Подробные условия',
    },
    detailedText: {
      en: 'Conditions',
      ru: 'Условия',
    }
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
      changeLang();
    });
  });

  changeLang();
};
export default lang;
