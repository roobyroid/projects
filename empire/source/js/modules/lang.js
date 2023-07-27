const lang = () => {
  const allLang = ['en', 'ru'];
  let currentLang = 'en';

  const textHomePage = {
    feedbackSoc: {
      en: 'Message our<br> manager',
      ru: 'Связаться с<br> менеджером',
    },
    signUpHeader: {
      en: 'Sign Up',
      ru: 'Регистрация',
    },
    logInHeader: {
      en: 'Log In',
      ru: 'Вход',
    },
    overheadHeroTitle: {
      en: 'Convert your traffic with',
      ru: 'Конвертируй свой трафик вместе с',
    },
    itemHero1: {
      en: 'Betting and Gamblig offers',
      ru: 'Беттинг и Гэмблинг офферы',
    },
    itemHero2: {
      en: 'Direct Advertiser',
      ru: 'Прямой рекламодатель',
    },
    itemHero3: {
      en: 'Inhouse offers',
      ru: 'Внутренние предложения',
    },
    countryHero: {
      en: ' IN / BD / PK / TR / CA',
      ru: 'Индия/Бангладеш/Пакистан/Турция/Канада',
    },
    btnHero: {
      en: 'REGISTRATION',
      ru: 'РЕГИСТРАЦИЯ',
    },
    cardCost: {
      en: 'From 25$ to 300$',
      ru: 'От 25$ до 300$',
    },
    benefitsTitle: {
      en: 'What are the benefits of Empire Partners?',
      ru: 'ПОЧЕМУ СТОИТ РАБОТАТЬ С EMPIRE PARTNERS?',
    },
    benefitsCard1: {
      en: 'High rates',
      ru: 'Высокий&nbsp;CR',
    },
    benefitsCard2: {
      en: 'Payouts every 2&nbsp;weeks or&nbsp;upon request',
      ru: 'Выплаты каждые две недели или по&nbsp;запросу',
    },
    benefitsCard3: {
      en: 'Unique promo materials',
      ru: 'Эксклюзивные промо-материалы',
    },
    benefitsCard4: {
      en: 'Easy-to-use affiliate account',
      ru: 'Удобный личный кабинет',
    },
    benefitsCard5: {
      en: 'Individual Terms',
      ru: 'Индивидуальные условия',
    },
    benefitsCard6: {
      en: 'Personal Manager 24/7',
      ru: 'Персональный менеджер 24/7',
    },
    benefitsCard7: {
      en: 'Detailed statistics for every partner',
      ru: 'Детализированная статистика для каждого партнера',
    },
    benefitsCard8: {
      en: '25% to&nbsp;your first<br> payment',
      ru: '+25% к&nbsp;первой выплате',
    },
    benefitsBtn: {
      en: 'JOIN NOW',
      ru: 'Присоединяйся',
    },
    paymentsTitle: {
      en: 'Quick payments to&nbsp;webmasters',
      ru: 'БЫСТРЫЕ ВЫПЛАТЫ ВЕБ-МАСТЕРАМ ПО&nbsp;ЗАПРОСУ',
    },
    paymentsItem1: {
      en: 'Bank Cards',
      ru: 'Банковские карты',
    },
    paymentsItem2: {
      en: 'Crypto',
      ru: 'Крипта',
    },
    paymentsItem3: {
      en: 'E-Wallet',
      ru: 'Электронные Кошельки',
    },
    socTitle: {
      en: 'Communication<br> with the manager',
      ru: 'СВЯЗАТЬСЯ С<br> МЕНЕДЖЕРОМ',
    },
    question1: {
      en: 'What does your affiliate programm offer?',
      ru: 'Какие офферы предлагает ваша аффилиэйт программа?',
    },
    question2: {
      en: 'Traffic from which countries do&nbsp;you accept?',
      ru: 'Трафик из&nbsp;каких стран вы&nbsp;принимаете?',
    },
    question3: {
      en: 'How much do&nbsp;you pay for engaged user?',
      ru: 'Сколько вы&nbsp;платите за&nbsp;одного привлеченного юзера?',
    },
    question4: {
      en: 'What are the restrictions on&nbsp;the sources of&nbsp;traffic?',
      ru: 'Какие ограничения по&nbsp;источникам трафика?',
    },
    question5: {
      en: 'What payment methods do&nbsp;you support?',
      ru: 'Какие платежные методы вы&nbsp;поддерживаете?',
    },
    question6: {
      en: 'What is&nbsp;the minimum payment?',
      ru: 'Какая минимальная сумма вывода?',
    },
    question7: {
      en: 'Does your affiliate programe offer creatives?',
      ru: 'Предоставляет&nbsp;ли ваша аффилиейт программа креативы?',
    },
    question8: {
      en: 'Where can&nbsp;I get promo materials?',
      ru: 'Где я&nbsp;могу получить баннеры и&nbsp;другие промо-материалы?',
    },
  };

  const langParent = document.querySelector('.js_lang');
  const langHead = langParent.querySelector('.js_lang-head');
  const langHeadVal = langHead.querySelector('.js_lang-val');
  const langItems = langParent.querySelectorAll('li');

  langHead.addEventListener('click', () => {
    langParent.classList.toggle('open');
  });

  function changeLang() {
    for (const key in textHomePage) {
      const elements = document.querySelectorAll(`[data-lang=${key}]`);
      elements.forEach((element) => {
        if (element) {
          element.innerHTML = textHomePage[key][currentLang];
        }
      });
    }
  }

  langItems.forEach((langItem) => {
    langItem.addEventListener('click', () => {
      const button = langItem.querySelector('[data-btn]');
      let langText = button.textContent;
      currentLang = button.getAttribute('data-btn');
      button.setAttribute('data-btn', currentLang === 'en' ? 'ru' : 'en');
      button.textContent = langHeadVal.textContent;
      langHeadVal.textContent = langText;
      langParent.classList.remove('open');
      changeLang();
    });
  });

  changeLang();
};
export default lang;
