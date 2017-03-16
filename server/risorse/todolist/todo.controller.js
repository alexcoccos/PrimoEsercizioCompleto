var mongoose = require('mongoose');
var Lista = require('./todo.model.js');
module.exports = (function(){

  var getLista = function(req,res){
    Lista.find().exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err)
    });
  }

  var deleteLista = function(req,res){

  }
  var creaLista = function(req,res){
    var nuovo = new Lista(req.body);
    nuovo.save()
    .then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }



  return{
    getLista: getLista,
    deleteLista: deleteLista,
    creaLista: creaLista
  }


})();
