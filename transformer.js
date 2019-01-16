const fsPromises = require('fs').promises;

// const read = src => fsPromises.readFile(src, { encoding: 'utf8' });

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter === letter.toLowerCase();
    })
    .join('');
};

const makeAllLettersCapital = str => str.toUpperCase();

const reverse = str => str.split('').reverse().join('');
const trim = str => str.trim();

const transformer = src => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
  // .then(data => removeCapitals(data))
    .then(removeCapitals)
  // .then(data => makeAllLettersCapital(data))
    .then(makeAllLettersCapital)
  // .then(data => reverse(data))
    .then(reverse)
  // .then(data => trim(data));
    .then(trim);
};

module.exports = { transformer, removeCapitals };

