const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));
};

const getCharacters = () => {
  return Promise.resolve([
    {
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    },
    {
      name: 'Morty Smith',
      species: 'Human',
      status: 'Alive'
    }
  ]);
};

  

module.exports = { getCharacters, getCharacter };
