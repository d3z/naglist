var express = require('express'),
    handlers = require('./handlers'),
    nags = require('./nags'),
    app = express.createServer();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.logger());
  app.set('view engine', 'jade');
  app.set('view options', {layout:false});
});

app.get('/', fetchNags, handlers.index);
app.post('/', fetchNags, handlers.create);
app.put('/:id', fetchNags, handlers.update);
app.delete('/:id', fetchNags, handlers.remove);
    
app.listen(8000);
console.log('server started.');

function fetchNags(request, response, next)
{
  request.nags = nags;
  next();
}
