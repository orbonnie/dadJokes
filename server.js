const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// app.use(express.static(__dirname + '/../client/root'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello');
})

let port = 1128;

app.listen(port, () => console.log(`listening on port ${port}`));