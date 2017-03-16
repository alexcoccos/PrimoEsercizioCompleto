var path = require('path');
var bodyparser= require('body-parser');
module.exports = function(app,express){

  app.use(bodyparser.json());

  //rotta per la cartella to do list
  app.use('/api/completobd',require('./../risorse/todolist/index.js'));// lo mettimao per differire le chiamte server da quelle client: le api sn per il server




};
