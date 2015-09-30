#ID3-lyrics-writer

Node comand-line project for inserting lyrics to mp3 file. 

##Mission

Every mp3 file contains ID3 tags which we are able to read and write to.  
The idea is to store lyrics saved in txt file inside the mp3 unsychronised lyrics tag. 

>There are two types of lyrics type: 
-Synchronised lyrics/text
>-Unsychronised lyrics/text transcription  

>(For more visit: <http://id3.org/id3v2.3.0#Unsychronised_lyrics.2Ftext_transcription>)

##Background Story

There are many versions of ID tags (ID3v1,ID3v2,ID4...).

	TODO:check older mp3 file if they contain lyrics-tag
	
ID3 Writer-CLI <https://www.npmjs.com/package/id3-writer-cli> is what would do the job
however it looks like it is not developed yet. Only thing which worked was --help option. 
After trying to get a version:

	id3-writer --version

I received :

	null
	No assignment - TypeError: Cannot read property '1' of null
	null
	No assignment - TypeError: Cannot read property '2' of null
	Not implemented yet.



