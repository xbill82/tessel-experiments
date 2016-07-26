var express = require('express');
var app = express();

app.use(express.static('static'));
app.use('/bower_components', express.static('bower_components'));

const PORT = 3000

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
