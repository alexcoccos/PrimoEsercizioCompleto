var express = require('express');
var router = express.Router();
var Lista = require('./todo.controller.js');

//prendi tutti gli elementi di lista
router.get('/',Lista.getLista);
//elimina dalla lista
router.delete('/',Lista.deleteLista);







module.exports=router;
