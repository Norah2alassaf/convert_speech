




	
	
	
var speech=true;
window.SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults=true;

while(speech==true){
	recognition.start();
  recognition.addEventListener('result',e=>{
	
	const transcript=Array.from(e.results)
	.map(result=>result[0])
	.map(result=>result.transcript)
	
	textbox.innerHTML=transcript;
	

  

   

})

   
      




}

