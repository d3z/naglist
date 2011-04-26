var naglist = [];
var id = 0;

exports.list = function()
{
  return naglist;
}

exports.addNewNag = function(text)  
{
  naglist.push({id:id++, text:text});
}

exports.updateNag = function(id, text)
{
  naglist.forEach(function(nag) {
    if (nag.id == id) {
      nag.text = text;
      return;
    }
  });
}

exports.deleteNag = function(id)
{
  for (var i = naglist.length-1; i>=0; i--) {
    var nag = naglist[i];
    if (nag.id == id) {
      naglist.splice(i, 1);
      return;
    }
  }
}

