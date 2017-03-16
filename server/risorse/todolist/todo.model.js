var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListaSchema= new Schema({

  titolo: {
    type: String,
    required: [true,"Inserisci il titolo"]
  },
  descrizione:{
    type:String,
    required: [true,"Inserisci descrizione"]
  },
  fatto: {
    type: Boolean,
    default: false
  }

});

var Lista= mongoose.model('lista',ListaSchema);

module.exports = Lista;
