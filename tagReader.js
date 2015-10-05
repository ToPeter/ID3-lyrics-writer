
var id3_reader = require('id3_reader');


id3_reader.read('./LetMeBurn.mp3', function(err, data) {
  
  console.log(err, data);
 
})
