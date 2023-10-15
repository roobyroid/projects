import IMask from 'imask';
const element = document.querySelector('.js_input-tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(element, maskOptions);
const formValidation = {
  // - - - - - - - [if errors > 1 -> error] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  hasErrors(form) {
    form.addEventListener('focusin', (e) => {
      const targetElement = e.target;
      if (targetElement.tagName === 'INPUT' || targetElement.tagName === 'TEXTAREA') {
        formValidation.removeError(targetElement);
      }
    });
    const formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      let error = 0;
      formRequiredItems.forEach((formRequiredItem) => {
        if (formRequiredItem.dataset.required === 'email') {
          if (!formValidation.emailTest(formRequiredItem)) {
            formValidation.addError(formRequiredItem);
            error++;
          }
        } else if (formRequiredItem.dataset.required === 'checkbox') {
          if (!formRequiredItem.checked) {
            formValidation.addError(formRequiredItem);
            error++;
          }
        } else if (formRequiredItem.dataset.required === 'tel') {
          if (mask._unmaskedValue.length !== 11) {
            formValidation.addError(formRequiredItem);
            error++;
          }
        } else if (formRequiredItem.dataset.required === 'text') {
          if (!formValidation.nameTest(formRequiredItem)) {
            formValidation.addError(formRequiredItem);
            error++;
          }
        } else if (formRequiredItem.dataset.required === 'textarea') {
          if (!formValidation.nameTest(formRequiredItem) || formRequiredItem.value.length < 50) {
            formValidation.addError(formRequiredItem);
            error++;
          }
        } else if (formRequiredItem.value === '') {
          formValidation.addError(formRequiredItem);
          error++;
        }
      });
      return error;
    }
  },
  // - - - - - - - [viewPass] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  viewPass(form) {
    const viewPassItems = form.querySelectorAll('[type=password]');
    viewPassItems.forEach((viewPassItem) => {
      form.addEventListener('click', (e) => {
        if (e.target.closest('[data-show-password]')) {
          const showPassIcon = form.querySelector('[data-show-password] use');
          if (viewPassItem.type === 'password') {
            viewPassItem.setAttribute('type', 'text');
            showPassIcon.setAttribute('href', './sprites/sprite.svg#icon-eye-open');
          } else {
            viewPassItem.setAttribute('type', 'password');
            showPassIcon.setAttribute('href', './sprites/sprite.svg#icon-eye-closed');
          }
        }
      });
    });
  },
  // - - - - - - - [show file preview after upload] - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  // - - - - - - - [reset form] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  formFullReset(form) {
    const filePreview = form.querySelector('.file-preview');
    filePreview.innerHTML = '';
    form.reset();
  },
  // - - - - - - - [add text and visual errors] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    const inputError = formRequiredItem.parentElement.querySelector('.form__text-error');
    if (inputError) {
      formRequiredItem.parentElement.removeChild(inputError);
    }
    if (formRequiredItem.hasAttribute('data-error')) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class="form__text-error">${formRequiredItem.dataset.error}</div>`,
      );
    }
  },
  // - - - - - - - [add text and visual errors] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    if (formRequiredItem.parentElement.querySelector('.form__text-error')) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector('.form__text-error'),
      );
    }
  },
  // - - - - - - -[form validation tests] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  emailTest(formRequiredItem) {
    //eslint-disable-next-line
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  },
  telTest(formRequiredItem) {
    //eslint-disable-next-line
    return /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(
      formRequiredItem.value,
    );
  },
  nameTest(formRequiredItem) {
    return /^([А-Яа-яЪъЁёЫыэЭ\s]+|[a-zA-Z\s]+)$/.test(formRequiredItem.value);
  },
};
export const hasErrors = formValidation.hasErrors;
export const viewPass = formValidation.viewPass;
export const formFullReset = formValidation.formFullReset;
