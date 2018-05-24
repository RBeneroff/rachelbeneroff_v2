var express        = require('express'),
    app            = express();
var path           = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function() {
console.log('I HERE ---> 3000');
});
