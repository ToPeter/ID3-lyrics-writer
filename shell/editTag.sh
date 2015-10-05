$Filename = FileOpenDialog ("Select Mp3 File", "/home/tope/git/ID3-lyrics-writer/", "Music (*.mp3)")
$sTagInfo = _ID3ReadTag($Filename)
MsgBox(0,"TagInfo",$sTagInfo)
MsgBox(0,"ID3v1 Title",_ID3GetTagField("Title")) ;Title from ID3v1
MsgBox(0,"ID3v2 Title",_ID3GetTagField("TIT2")) ;Title from ID3v2


