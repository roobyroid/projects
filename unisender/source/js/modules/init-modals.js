import {setupModal, closeModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalForm = document.querySelector('.modal--form');
const modalFormBtns = document.querySelectorAll('[data-modal="form"]');

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

  if (modalForm && modalFormBtns.length) {
    setupModal(modalForm, false, modalFormBtns, false, false);
  }
};

export {initModals, closeModal};
