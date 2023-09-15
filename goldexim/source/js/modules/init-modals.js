import {setupModal, closeModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalRules = document.querySelector('.modal--rules');
const modalRulesBtns = document.querySelectorAll('[data-modal="rules"]');
const modalClubRules = document.querySelector('.modal--clubrules');
const modalClubRulesBtns = document.querySelectorAll('[data-modal="clubrules"]');
const modalPolitics = document.querySelector('.modal--politics');
const modalPoliticsBtns = document.querySelectorAll('[data-modal="politics"]');
const modalCookies = document.querySelector('.modal--cookies');
const modalCookiesBtns = document.querySelectorAll('[data-modal="cookies"]');
const modalBonus = document.querySelector('.modal--bonus');
const modalBonusBtns = document.querySelectorAll('[data-modal="bonus"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalRules && modalRulesBtns.length) {
    setupModal(modalRules, false, modalRulesBtns, false, false);
  }
  if (modalClubRules && modalClubRulesBtns.length) {
    setupModal(modalClubRules, false, modalClubRulesBtns, false, false);
  }
  if (modalPolitics && modalPoliticsBtns.length) {
    setupModal(modalPolitics, false, modalPoliticsBtns, false, false);
  }
  if (modalCookies && modalCookiesBtns.length) {
    setupModal(modalCookies, false, modalCookiesBtns, false, false);
  }
  if (modalBonus && modalBonusBtns.length) {
    setupModal(modalBonus, false, modalBonusBtns, false, false);
  }
};

export {initModals, closeModal};
