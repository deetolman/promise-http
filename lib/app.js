const bodyParse = require('./bodyParser');
const { parse } = require('url');

let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParse.Parser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
};

