const fsPromises = require('fs').promises;

const removeCapitals = str => {
  return str
    .split('')
    .filter(letter => {
      return letter ===  letter.toLowerCase();

    })
    .join('');
};

const transformer = src => {
  // fsPromises.readFile(src);
  return read(src)
  // .then(data => removeCapitals(data))
    .then(removeCapitals)
  // .then(data => makeAllLettersCapital(data))
    .then(makeAllLettersCapital)
  // .then(data => reverse(data))
    .then(reverse)
  // .then(data => trim(data));
    .then(trim);
};

module.exports = transformer;
