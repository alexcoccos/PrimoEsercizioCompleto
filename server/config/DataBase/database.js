var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds133290.mlab.com:33290/completobd',function(err){
  if(err){
    console.log(err);
  }else{
    console.log("database connesso");
  }
})
