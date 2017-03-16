var path = require('path');
var bodyparser= require('body-parser');
module.exports = function(app,express){

  app.use(bodyparser.json());
 // rotte statiche che evitano casini dopo
 //bootstrap
  app.use('/bootstrap',express.static(path.join(__dirname,"..","..","node_modules","bootstrap","dist")));
//jquery
  app.use('/jquery',express.static(path.join(__dirname,"..","..","node_modules","jquery","dist")));
//angular
  app.use('/angular',express.static(path.join(__dirname,"..","..","node_modules","angular")));
//angular-ui-router
  app.use('/angular-ui-router',express.static(path.join(__dirname,"..","..","node_modules","angular-ui-router")));
//file js
  app.use('/js',express.static(path.join(__dirname,"..","..","client","js")));
//file css
  app.use('/css',express.static(path.join(__dirname,"..","..","client","css")));

//rotta per l'index generale
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"..","..","client","index.html"));
  })

  //rotta per la cartella to do list
  app.use('/api/completobd',require('./../risorse/todolist/index.js'));// lo mettimao per differire le chiamte server da quelle client: le api sn per il server




};
