var readline = require('readline');
var id3_reader = require('id3_reader');

var lyrics = "";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
	lyrics = lyrics.concat(line+"\n");
})

  .on('close',function(close){
  	var params = {
  path: './LetMeBurn.mp3',
  tags: {
    title: 'Let Us Burn',
    artist: 'Within Temptation',
    album: 'Hydra',
    track_number: '6/10',
    unsychronized_lyric_text_transcription: lyrics
    
      /*Fot synchronized lyrics
      unsychronized_lyric_text_transcription:'',
      synchronized_lyric_text: lyrics*/
  }
}
 
	id3_reader.write(params, function(err, data) {
  
  	console.log(err, data);
 
})
 	
 });
