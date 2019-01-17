/* eslint-disable no-console */
const { parse } = require('url');
const { getCharacter, getCharacters } = require('./service/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      });
  }
  else if(url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>');
        characters.map(char => {
          res.write(`<p>${char.name}</p><p>${char.status}</p><p>${char.species}</p>`);
        });
        res.end('</body></html>');
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
};

