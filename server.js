const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var cors = require('cors')
const app = express();
const PORT = 3004;
app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public/')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});

module.exports = app;