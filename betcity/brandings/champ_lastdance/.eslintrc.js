module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-param-reassign': 0, // fix htmlelement properties change
    'no-unused-vars': 1, // change no-unused-vars from error to warning
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }], // allow ++ and -- only for loops
    'prefer-destructuring': 0, // allow use arr[index] for objects, arrays and array-like objects (e.g. NodeList)
  },
};
