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
               if (!formValidation.telTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === 'en|ru|ua') {
               if (!formValidation.nameTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === 'num') {
               if (!formValidation.numTest(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === 'minmax') {
               if (!formValidation.minmax(formRequiredItem)) {
                  formValidation.addError(formRequiredItem);
                  error++;
               }
            } else if (formRequiredItem.dataset.required === 'file' && formRequiredItem.value !== '') {
               if (!formValidation.fileUpload(formRequiredItem)) {
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
      })

   },
   // - - - - - - - [show file preview after upload] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   filePreview(form) {
      const inputFile = form.querySelector('[type=file]');
      const filesContainer = form.querySelector('._files-container');
      const maxFiles = 3;
      let files = [];

      inputFile.addEventListener('change', () => {
         const sortedFiles = Array.from(inputFile.files).filter(file => formValidation.fileValidation(file));

         if (files.length + sortedFiles.length > maxFiles) {
            event.stopPropagation();
            event.preventDefault();
            alert(`Максимальное количество файлов: ${maxFiles}`);
            return false;
         }

         // load 1 image
         // files = [...sortedFiles];
         // lot of images
         files = [...files, ...sortedFiles];
         filesContainer.innerHTML = '';

         for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
               const previewImage = document.createElement('img');
               previewImage.classList.add('_file-preview-content');
               previewImage.src = e.target.result;
               // const imageUrl = URL.createObjectURL(file); tp://localhost:3000/3cb14188-f34c-4f00-9601-63d77e83a420 net::E
               previewImage.alt = 'Загрузка изображения';

               const deleteButton = document.createElement('button');
               deleteButton.classList.add('_file-delete-button');
               deleteButton.dataset.delete = i;
               deleteButton.textContent = 'Удалить';

               const fileWrapper = document.createElement('div');
               fileWrapper.classList.add('_file-wrapper');
               fileWrapper.classList.add('_imw');
               fileWrapper.appendChild(previewImage);
               fileWrapper.appendChild(deleteButton);

               filesContainer.appendChild(fileWrapper);
            };
            reader.onerror = function() {
               alert('Error!');
            };
         }

      });

      filesContainer.addEventListener('click', (e) => {
         if (e.target.classList.contains('_file-delete-button')) {
            const index = e.target.dataset.delete;
            files.splice(index, 1);

            const currentFileWrapper = e.target.closest('._file-wrapper');
            filesContainer.removeChild(currentFileWrapper);

            // Обновляем значение dataset.delete для других изображений в списке после удаления изображения
            const remainingFiles = filesContainer.querySelectorAll('._file-wrapper');
            remainingFiles.forEach((file, i) => {
               file.querySelector('._file-delete-button').dataset.delete = i;
            });
         }
      });

      document.querySelector('.check').addEventListener('click', function(e) {
         console.log(files);
      });
   },

   fileValidation(file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxFileSize = 2 * 1024 * 1024;
      if (!allowedTypes.includes(file.type)) {
         alert(`Тільки зображення!`);
         // inputFile.dataset.error = 'Только изображения';
         // formValidation.addError(inputFile);
         return false;
      }
      if (file.size > maxFileSize) {
         alert(`Не більше 2 мегабайт!`);
         // inputFile.dataset.error = 'Меньше 2 мб';
         // formValidation.addError(inputFile);
         return false;
      }
      return true;
   },
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
      if (formRequiredItem.type === 'file') {
         const inputError = formRequiredItem.closest('.file').querySelector('.form-text-error');
         if (inputError) {
            formRequiredItem.closest('.file').removeChild(inputError);
         }
         if (formRequiredItem.hasAttribute('data-error')) {
            formRequiredItem
               .closest('.file')
               .insertAdjacentHTML('beforeend', `<div class="form-text-error">${formRequiredItem.dataset.error}</div>`);
         }
      } else {
         const inputError = formRequiredItem.parentElement.querySelector('.form-text-error');
         if (inputError) {
            formRequiredItem.parentElement.removeChild(inputError);
         }
         if (formRequiredItem.hasAttribute('data-error')) {
            formRequiredItem.parentElement.insertAdjacentHTML(
               'beforeend',
               `<div class="form-text-error">${formRequiredItem.dataset.error}</div>`
            );
         }
      }
   },
   // - - - - - - - [add text and visual errors] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   removeError(formRequiredItem) {
      formRequiredItem.classList.remove('_form-error');
      formRequiredItem.parentElement.classList.remove('_form-error');
      if (formRequiredItem.parentElement.querySelector('.form-text-error')) {
         formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form-text-error'));
      } else if (formRequiredItem.type === 'file' && formRequiredItem.closest('.file').querySelector('.form-text-error')) {
         formRequiredItem.closest('.file').removeChild(formRequiredItem.closest('.file').querySelector('.form-text-error'));
      }
   },
   // - - - - - - -[form validation tests] - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   emailTest(formRequiredItem) {
      //eslint-disable-next-line
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
   },
   telTest(formRequiredItem) {
      //eslint-disable-next-line
      return /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(formRequiredItem.value);
   },
   nameTest(formRequiredItem) {
      return /^([А-Яа-яЪъЁёЫыэЭ\s]+|[a-zA-Z\s]+|[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\s]+)$/.test(formRequiredItem.value);
   },
   numTest(formRequiredItem) {
      return /^[0-9]*$/.test(formRequiredItem.value);
   },
   minmax(formRequiredItem) {
      if (formRequiredItem.value.length > 5 && formRequiredItem.value.length < 10) {
         return true;
      }
      return false;
   },
};
export const hasErrors = formValidation.hasErrors;
export const filePreview = formValidation.filePreview;
export const viewPass = formValidation.viewPass;
export const formFullReset = formValidation.formFullReset;