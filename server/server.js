var express = require('express');
var app = express();
const  PORT = 3000;

require('./config/DataBase/database.js');
require('./rotte/route.js')(app,express);

app.listen(PORT,function(){
  console.log('app start at http://localhost:'+ PORT);
});
