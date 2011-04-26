exports.index = function(request, response)
{
  var nags = request.nags;
  response.render('index', {nags:nags.list});
}

exports.create = function(request, response)
{
  var nags = request.nags;
  console.log('creating nag with text "' + request.body.text + '"');
  nags.addNewNag(request.body.text);
  response.send('ok');
}

exports.update = function(request, response)
{
  var nags = request.nags;
  response.send('updating the nag ' + request.params.id);
  nags.updateNag(request.params.is, request.body.text);
}

exports.remove = function(request, response)
{
  var nags = request.nags;
  response.send('removing the nag ' + request.params.id);
  nags.deleteNag(request.params.id);
}
