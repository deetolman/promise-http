const fsPromises = require('fs').promises;
const fs = require('fs');

//pending -> waiting for promise to finish
//fulfilled
//rejected
fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => fsPromises.writeFile('./http-copy.md', data))
  .then(() => console.log('Done!'))
  .catch(err => console.log(err));

const readPromise = src => new Promise((resolve, reject) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return reject(err); {
      resolve(data);
    }
  });
});

readPromise('./http.md')
  .then(data => console.log(data));





