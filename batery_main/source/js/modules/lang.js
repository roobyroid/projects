const lang = () => {
  const allLang = ['en', 'ru'];
  let currentLang = localStorage.getItem('language') || 'en';

  const textHomePage = {
    feedbackSoc: {
      en: 'Message our<br> manager',
      ru: 'Связаться с<br> менеджером',
    },
    menuItem1: {
      en: 'Affiliate Program',
      ru: 'Партнёрская программа',
    },
    menuItem4: {
      en: 'Communication with the manager',
      ru: 'Связаться с менеджером',
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
      ru: 'Почему стоит работать Empire Partners?',
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
      ru: 'Быстрые выплаты веб-мастерам по запросу',
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
    answer1: {
      en: 'Empire Partners is a new affiliate program, so all our offers are in-house',
      ru: 'Empire Partners является новой партнерской программой, поэтому все наши офферы in-house',
    },
    question2: {
      en: 'Traffic from which countries do&nbsp;you accept?',
      ru: 'Трафик из&nbsp;каких стран вы&nbsp;принимаете?',
    },
    answer2: {
      en: `At the moment Empire Partners affiliate program works with the following countries: IN, BD, PK, TR, CA
      The list of countries is constantly changing and expanding, so it is better to check with your affiliate manager for up-to-date information.`,
      ru: `На данный момент партнерская программа Empire Partners работает со следующими странами: IN, BD, PK, TR, CA
      Список стран постоянно изменяется и расширяется, поэтому лучше уточнять актуальную информацию у Вашего аффилиейт менеджера.`,
    },
    question3: {
      en: 'How much do&nbsp;you pay for engaged user?',
      ru: 'Сколько вы&nbsp;платите за&nbsp;одного привлеченного юзера?',
    },
    answer3: {
      en: `We work with CPA/RevShare/Hybrid work models.<br>
      The rate depends on the GEO and the source of your traffic.<br>
      All conditions can be discussed with your personal affiliate manager.`,
      ru: `Работаем по разным моделям работы CPA/RevShare/Hybrid.<br>
      Ставка зависит от ГЕО и источника вашего траффика.<br>
      Все условия можно обсудить с персональным аффилиэйт менеджером.`,
    },
    question4: {
      en: 'What are the restrictions on&nbsp;the sources of&nbsp;traffic?',
      ru: 'Какие ограничения по&nbsp;источникам трафика?',
    },
    answer4: {
      en: `The affiliate program specializes at attracting reliable traffic sources,
      excluding fraud and motivated players. We do not accept email spam, social media
      spam or any other form of spam. Any manipulation of cookies is prohibited.`,
      ru: `Партнерская программа специализируется на привлечении надежных источников
      трафика, исключая фрод и мотивированных игроков. Мы не принимаем почтовый спам,
      спам в социальных сетях и любой другой вид спама. Запрещены любые манипуляции с cookies.`,
    },
    question5: {
      en: 'What payment methods do&nbsp;you support?',
      ru: 'Какие платежные методы вы&nbsp;поддерживаете?',
    },
    answer5: {
      en: 'TRON (trc20)',
      ru: 'TRON (trc20)',
    },
    question6: {
      en: 'What is the minimum withdrawal amount?',
      ru: 'Какая минимальная сумма вывода?',
    },
    answer6: {
      en: 'The minimum withdrawal amount from an affiliate account is $100.',
      ru: 'Минимальная сумма вывода денег с аффилиэйт счета - 100$.',
    },
    question7: {
      en: 'Does your affiliate program provide creatives?',
      ru: 'Предоставляет ли ваша аффилиейт программа креативы?',
    },
    answer7: {
      en: `Yes, our managers are ready to provide converting and relevant landing pages and banners for
      your advertising campaigns, or you can find them in your personal account.`,
      ru: `Да, наши менеджеры готовы предоставить конвертящие и актуальные лендинги и баннеры для ваших
      рекламных кампаний, либо вы можете их увидеть в своем личном кабинете.`,
    },
    question8: {
      en: 'How often do you make payments?',
      ru: 'Как часто вы проводите выплаты?',
    },
    answer8: {
      en: 'At the moment we pay partners twice a month.',
      ru: 'На данный момент мы платим партнерам два раза в месяц',
    },
    btnPartner: {
      en: 'Become a partner',
      ru: 'Стань партнёром',
    },
    modalTitle: {
      en: 'CHOOSE GEO',
      ru: 'ВЫБЕРИ ГЕО',
    },
    modalBtn: {
      en: 'ANOTHER COUNTRY',
      ru: 'ДРУГАЯ СТРАНА',
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
      changeLang();
    });
  });

  changeLang();
};
export default lang;
