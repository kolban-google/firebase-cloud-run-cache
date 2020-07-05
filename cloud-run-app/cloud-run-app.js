/**
 * Cloud Run application that generates and delivers dynamiocally generated content.
 */

const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());

app.get('/cr/generate-s-maxage', (req, res) => {
  res.set('Cache-Control', 'public,s-maxage=5');
res.send(`
<html>
<head>
</head>
<body>
<p>Hello from Cloud Run (/cr/generate): ${new Date().toString()}</p>
</body>
</html>
`);
});

app.get('/cr/generate-no-store', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send(`
<html>
  <head>
  </head>
  <body>
    <p>Hello from Cloud Run (/cr/generate-no-store): ${new Date().toString()}</p>
  </body>
</html>
`);
});

app.get('/cr/generate', (req, res) => {
  res.send(`
<html>
  <head>
  </head>
  <body>
    <p>Hello from Cloud Run (/cr/generate): ${new Date().toString()}</p>
  </body>
</html>
`);
});

app.get('/cr/generate-default', (req, res) => {
  res.send(`
<html>
  <head>
  </head>
  <body>
    <p>Hello from Cloud Run (/cr/generate-default: ${new Date().toString()}</p>
  </body>
</html>
`);
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});