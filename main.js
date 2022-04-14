x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
draw_apple = "";
draw_banana = "";
to_number = "";

function preload(){
  apple = loadImage("apple.png");
  banana = loadImage("banana.png");
} 
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function start()
{
  document.getElementById("status").innerHTML = "The system is listening, so please speak.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The system has been recognized with: " + content; 
    to_number = Number(content);

    if (Number.isInteger(to_number)){
      draw_apple = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The system has not recognized anything."; 
    }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height);
  canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 0; i<to_number; i++){
      x = Math.floor(Math.random() * screen_width);
      y = Math.floor(Math.random() * screen_height);
      image(apple, x, y, 50,50);  

    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + " Apples drawn";
    speak()
    draw_apple = "";

    if(draw_banana == "set")
    {
      for(var i = 0; i<to_number; i++){
        x = Math.floor(Math.random() * screen_width);
        y = Math.floor(Math.random() * screen_height);
        image(banana, x, y, 50,50);  
  
      }
      document.getElementById("status").innerHTML = to_number + " Bananas drawn";
      speak_data = to_number + " Bananas drawn";
      speak()
      draw_banana = "";
}

function speak(){
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}
  }
}
