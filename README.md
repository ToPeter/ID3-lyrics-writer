#ID3-lyrics-writer

Node comand-line project for inserting lyrics to mp3 file. 

##Mission

Every mp3 file contains ID3 tags which we are able to read and write to.  
The idea is to store lyrics saved in txt file inside the mp3 unsychronised lyrics tag. 

>There are two types of lyrics type: 
>1. Synchronised lyrics/text
>2. Unsychronised lyrics/text transcription  
>
>(For more info visit [this page](http://id3.org/id3v2.3.0#Unsychronised_lyrics.2Ftext_transcription))




##Background Story

There are many versions of ID tags (ID3v1,ID3v2,ID3v2.4.0...).

	IMPORTANT: Your music player must support all versions of ID3 tags. This program works with v2.4
	so if you use music player which reads only ID3 tags v2.3 then the lyrics will not be shown

	TODO: make it works for all ID3 tag versions
	
``ID3 Writer CLI`` ([npmjs](https://www.npmjs.com/package/id3-writer-cli)) is what would do the job
however it looks like it is not developed yet. Only thing which worked was **--help** option. 
After trying to get a version:

	id3-writer --version

received :

	null
	No assignment - TypeError: Cannot read property '1' of null
	null
	No assignment - TypeError: Cannot read property '2' of null
	Not implemented yet.

##How to run project (Unsychronised lyrics/text transcription)

You need to install: 

	$ npm install id3_reader
	$ npm install readlines

For reading MP3 tags:

	$ node tagReader.js

For writing lyrics to MP3:

	$ cat lyrics.txt | node build.js
	
	- if the answer is null undefined; lyrics were saved into the file
	- now your can run tagReader.js to check the result

>For some reason I can see only part of lyrics on my phone device. 
>I know that they are written there but they are not shown entirely. 

	TODO: check why is this happening
	TODO: better file structure of node

**Synchronised lyrics/text** should be even easier to do. You need lyrics in 
file format .lrc, to set unsychronised lyrics tag to empty value and set synchronised lyrics
tag value to be equal with your .lrc file. After these steps all should work. 





