const express = require('express');
const compression = require('compression');

const port = process.env.PORT;
const appFolder = 'dist/peachtree-bank';

const app = express();
app.use(compression());

app.get('*.*', express.static(appFolder, { maxAge: '1y' }));

app.all('*', function (req, res) {
  res.status(200).sendFile('/', { root: appFolder });
});

app.listen(port, function () {
  console.log('Peachtree is running on 80');
});
