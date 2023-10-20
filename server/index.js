import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/index';

const PORT = process.env.PORT || 80;
const app = express();

app.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    );
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
