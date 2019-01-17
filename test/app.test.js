const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/mocks/rickAndMortyApi.js');

describe('app', () => {
  it('gets character by id', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
  it('gets list of characters', () => {
    return request(app)
      .get('/characters/')
      .then(res => {
        expect(res.text).toEqual(
          '<html><body><p>Rick Sanchez</p><p>Alive</p><p>Human</p><p>Morty Smith</p><p>Alive</p><p>Human</p></body></html>');
      });
  });
});
it('save a note to notes object', () => {
  return request(app)
    .post('/characters')
    .send({ characterId: 1, note: 'My favorite character' })
    .then(res => {
      //need to return a 204 not a 200
      expect(res.status).toEqual(200);
    });
});


 

      
