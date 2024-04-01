module.exports = {
   extends: ["stylelint-config-standard-scss",
             "stylelint-config-rational-order",
             "stylelint-config-prettier-scss"],
   rules: {
     'selector-class-pattern': null, //fix BEM naming
     'declaration-block-no-redundant-longhand-properties': null, //treat redundant longhand properties as an appropriate codestyle
     'value-keyword-case': null, //fix errors on scss variable values
     'color-hex-length': 'long', //use long color codes, e.g. #ffffff instead of #fff
     'no-descending-specificity': null,
   },
   "ignoreFiles": [
     "src/scss/vendor/**/*.scss",
     "dev/**/*.css",
     "web/**/*.css",
   ]
 };
 