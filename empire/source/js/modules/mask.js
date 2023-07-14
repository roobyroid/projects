import Inputmask from 'inputmask';

const telMask = () => {
  const telSelector = document.querySelectorAll('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99', {showMaskOnHover: false, showMaskOnFocus: false});
  inputMask.mask(telSelector);
};

export default telMask;
