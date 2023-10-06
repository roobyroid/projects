function ValidateForm(form) {

    this.$form = document.querySelector(form);

    if (this.$form === null) {
        return;
    }

    this.$btn = this.$form.querySelector('form .form__btn ');

    // this.$btn = this.$form.querySelector('.form__submit');

    var _self = this;

    this.$form.addEventListener('blur', function (event) {
        // console.log(event, event.target)
        var target = event.target;
        var targetName = target.dataset.name;

        if (targetName === 'tel') {
            if (!_self.checkValue(target) || !_self.checkTel(target.value)) {
                _self.addError(target);
                _self.validDataFalse(target);
                _self.statusNotValid();
            } else {
                _self.removeError(target);
                _self.validDataTrue(target);
                _self.statusYesValid();
            }
        }


        if (targetName === 'password') {
            if (!_self.checkValue(target) || !_self.checkPass(target.value)) {
                _self.addError(target);
                // _self.addErrorText("Invalid name");
                _self.validDataFalse(target)
            } else {
                _self.removeError(target);
                // _self.removeErrorText();
                _self.validDataTrue(target)
            }
        }

        if (targetName === 'date') {
            if (!_self.checkValue(target) || !_self.checkDate(target.value)) {
                _self.addError(target);
                // _self.addErrorText("Invalid name");
                _self.validDataFalse(target)
            } else {
                _self.removeError(target);
                // _self.removeErrorText();
                _self.validDataTrue(target)
            }
        }



        if (targetName === 'agree') {
            if (!_self.checkCheckbox(target)) {
                // _self.addError(target);
                _self.validDataFalse(target)
            } else {
                // _self.removeError(target);
                _self.validDataTrue(target)
            }
        }


        if (_self.checkForm('[data-name]')) {
            _self.statusYesValid();
        } else {
            _self.statusNotValid();
        }



    }, true);







    this.$form.addEventListener('change', function (event) {
        const target = event.target;
        const targetName = target.dataset.name;

        if (targetName === 'agree') {
            if (!_self.checkCheckbox(target)) {
                // _self.addError(target);
                _self.validDataFalse(target)
            } else {
                // _self.removeError(target);
                _self.validDataTrue(target)
            }
        }


        if (targetName === 'code') {
            if (!_self.checkValue(target) || !_self.checkValue(target.value)) {
                _self.addError(target);
                // _self.addErrorText("Invalid name");
                _self.validDataFalse(target)
            } else {
                _self.removeError(target);
                // _self.removeErrorText();
                _self.validDataTrue(target)
            }
        }





        if (_self.checkForm('[data-valid]')) {
            _self.statusYesValid();
        } else {
            _self.statusNotValid();
        }

    });




    this.$form.addEventListener('submit', function (event) {

        var target = event.target;
        var targetName = target.dataset.name;
        var error = document.querySelector('.error-text');

        if (targetName === 'tel') {
            if (!_self.checkValue(target) || !_self.checkTel(target.value)) {
                _self.addError(target);
                _self.validDataFalse(target);
                _self.statusNotValid();
            } else {
                _self.removeError(target);
                _self.validDataTrue(target);
                _self.statusYesValid();
            }
        }


        if (targetName === 'password') {
            if (!_self.checkValue(target) || !_self.checkPass(target.value)) {
                _self.addError(target);
                // _self.addErrorText("Invalid name");
                _self.validDataFalse(target)
            } else {
                _self.removeError(target);
                // _self.removeErrorText();
                _self.validDataTrue(target)
            }
        }

        if (targetName === 'date') {
            if (!_self.checkValue(target) || !_self.checkDate(target.value)) {
                _self.addError(target);
                _self.validDataFalse(target)
            } else {
                _self.removeError(target);
                _self.validDataTrue(target)
            }
        }

        if (targetName === 'agree') {
            if (!_self.checkCheckbox(target)) {
                // _self.addError(target);
                _self.validDataFalse(target)
            } else {
                // _self.removeError(target);
                _self.validDataTrue(target)
            }
        }





        if (_self.checkForm('[data-name]')) {
            _self.statusYesValid();
        } else {
            _self.statusNotValid();
        }


    });

}

ValidateForm.prototype.checkValue = function (selector) {
    return selector.value !== '';
};

ValidateForm.prototype.validDataTrue = function (selector) {
    return selector.dataset.valid = 'true';
};

ValidateForm.prototype.validDataFalse = function (selector) {
    return selector.dataset.valid = 'false';
};

ValidateForm.prototype.addError = function (selector) {
    selector.classList.add('item-error');
    selector.parentNode.classList.add('item-error');
};

ValidateForm.prototype.removeError = function (selector) {
    selector.classList.remove('item-error');
    selector.parentNode.classList.remove('item-error');
};

ValidateForm.prototype.addErrorText = function (message) {
    error.innerHTML = message;
    error.classList.add('active');
};

ValidateForm.prototype.removeErrorText = function () {
    error.innerHTML = '';
    error.classList.remove('active');
};

ValidateForm.prototype.checkForm = function (selector) {
    return [].every.call(this.$form.querySelectorAll(selector), function (item) {
        return item.dataset.valid === 'true';
    });
};

ValidateForm.prototype.statusYesValid = function () {
    this.$btn.classList.add('active');
    this.$btn.disabled = false;
};

ValidateForm.prototype.statusNotValid = function () {
    this.$btn.classList.remove('active');
    this.$btn.disabled = true;
};

ValidateForm.prototype.checkEmail = function (emailValue) {
    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    return email.test(emailValue);
};

ValidateForm.prototype.checkPass = function (passValue) {
    // var pass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    // var pass = /(?=^.{8,}$)(?![.\n]).*$/;
    // var pass = '/^(?=.*\d)(?=.*[A-Z]).{8,}$/';

    var pass = /^[a-zA-Z0-9]{8,}$/

    return pass.test(passValue);
};

ValidateForm.prototype.checkTel = function (telValue) {
    // var tel = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
    // var tel = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
    // var tel = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2})) /;
    var tel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/

    return tel.test(telValue);
};

ValidateForm.prototype.checkCheckbox = function (selector) {
    return selector.checked;
};

ValidateForm.prototype.checkDate = function (dateValue) {

    // console.log(new Date(dateValue))
    function iOS() {
        return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod',
                'Mac68K',
                'MacPPC',
                'MacIntel',
            ].includes(navigator.platform)
            // iPad on iOS 13 detection
            ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }


    for (let i = 0; i < dateValue.length; i++) {
        if (dateValue[i] === '_') {
            return false;
        }
    }

    if (iOS()) {
        var euro_date = dateValue;
        euro_date = euro_date.split('.');
        var us_date = euro_date.reverse().join('/');
        // console.log(us_date)



        const getAge = (birthDateString) => {
            const today = new Date();
            const birthDate = new Date(birthDateString);
            const yearsDifference = today.getFullYear() - birthDate.getFullYear();
            if (
                today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
            ) {
                return yearsDifference - 1;
            }

            return yearsDifference;
        };

        if (getAge(us_date) >= 18) {
            return true;
        } else {
            return false;
        }

    } else {
        // for(let i =0; i<dateValue.length; i++){
        //     if(dateValue[i] === '_'){
        //         return false;
        //     }
        // }

        var eighteenYearsAgo = moment().subtract("years", 18);
        var birthday = moment(dateValue);
        // console.log(dateValue)


        if (!birthday.isValid()) {
            return "invalid date";
        } else if (eighteenYearsAgo.isAfter(birthday)) {
            return true;
        } else {
            return false;
        }
    }


    // return true;

};

ValidateForm.prototype.checkSubmit = function () {
    this.$form.querySelectorAll([data - valid]).f
};

new ValidateForm('.form');