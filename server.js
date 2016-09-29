var express = require("express");

var app = express();

app.get('/:query', function (req, res) {
  var query = req.params.query;
  var date;
  var jsonResponse = {'unix': null, 'natural': null};
  
  if(parseInt(query)){
      date = parseUnixQuery(parseInt(query));
      console.log(typeof date);
  }
  else {
      date = parseStringQuery(query);
  }
  
  if(date){
      jsonResponse.unix = date.getTime();
      jsonResponse.natural = date.toDateString();
  }
  
  res.json(jsonResponse);
  
});

function parseUnixQuery(query){
    var date = new Date(query);
    return date;
}

function parseStringQuery(query) {
    var date = new Date(Date.parse(query));
    return date;
}
app.listen(8080, function () {
  console.log('Running on 8080');
});