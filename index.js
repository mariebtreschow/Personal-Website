const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      pug = require('pug'),
      nodemailer = require('nodemailer'),
      app = express();


var transporter = nodemailer.createTransport('smtps://treschow.marie%40gmail.com:xxxxxx@smtp.gmail.com');


app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(request, response) {
  console.log('Requesting homepage and contact form');
  response.send(pug.renderFile(__dirname + '/views/application.pug', {}));
});

app.post('/send-email', function(request, response){
  console.log('called the post route on express');
  console.log('HTTP request body was:');
  console.log(request.body);

  transporter.sendMail({
    from: 'treschow.marie@gmail.com',
    to: 'treschow.marie@gmail.com',
    subject: 'Email received from Personal Website',
    text: request.body.email_content + '\n\nSender Email: ' +
    request.body.emailAddress  + '\nSender Full Name: ' + request.body.fullName
    }, (error, info) => {
    if (error) {
      return console.log(error);
    }

    console.log('Message sent: ' + info.response);
  });

  response.redirect('/');
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!!!');
});
