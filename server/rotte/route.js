var path = require('path');
module.exports = function(app,express){
  //rotta per la cartella to do list
  app.use('/api/completobd',require('./../risorse/todolist/index.js'));// lo mettimao per differire le chiamte server da quelle client: le api sn per il server

};
