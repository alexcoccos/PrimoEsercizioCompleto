var express = require('express');
var router = express.Router();
var Lista = require('./todo.controller.js');

//crea lista
router.post('/',Lista.creaLista);
//prendi tutti gli elementi di lista
router.get('/',Lista.getLista);
// //elimina dalla lista
router.delete('/:id([0-9a-f]{24})',Lista.deleteLista);







module.exports=router;
