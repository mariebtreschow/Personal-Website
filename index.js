const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      pug = require('pug'),
      app = express();

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(request, response) {
  console.log('Requesting homepage and contact form');
  response.send(pug.renderFile(__dirname + '/views/application.pug', {}));
});

app.post('/send-email', function(request, response) {
  console.log('called the post route on express');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!!!');
});
