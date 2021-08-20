

var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
var textbox=document.getElementById('speech-to-text-area');
var text1=document.createTextNode('Click Start to continue with speech recognition....');
document.getElementById('instruction').appendChild(text1);
var text=document.createTextNode('Speech Recognition is on.......');
var stopText=document.createTextNode('Click start to continue.........');
//var display=document.createTextNode('');
//var content=document.createElement('div');
var tempContent;

recognition.continuous=true;
recognition.lang="en";
function startRecord()
{
    recognition.start();
    tempContent=" ";
    var instruction=document.getElementById('instruction');
    instruction.replaceChild(text,instruction.childNodes[0]);
}

recognition.onresult=function(event)
{
    var current=event.resultIndex;
    var transcript=event.results[current][0].transcript;
    tempContent+=transcript;
    console.log(tempContent);
    textbox.innerHTML+=tempContent; 
    tempContent=" ";
}

function stopRecord()
{
    recognition.stop();
    var prev=document.getElementById('instruction');
    prev.replaceChild(stopText,prev.childNodes[0]);
}

