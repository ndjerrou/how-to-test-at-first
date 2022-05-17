const { forEach } = require('./forEach');

let sum = 0;
forEach([1, 2, 4], (el, idx) => {
  sum += el;
});

if (sum === 6) console.log('OK');
else {
  throw new Error('Sum not correct');
}

test('kikoo', () => {});
