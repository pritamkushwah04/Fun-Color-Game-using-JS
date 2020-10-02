alert("connected!");
var numSquares = 6;
var colors=[];
var pickedColor;
var squares =document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("displayresult");
var resetButton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
setUpModeButtons();
setUpSquares();
reset(); 

}


function reset(){
      //genrate new colors
     colors=generateRandomColors(numSquares);   
    //new picked color
     pickedColor =pickcolor();
    //change display color 
     colorDisplay.textContent=pickedColor;
     //change color of square 
    for(var i=0; i < squares.length; i++)
     if(colors[i]){
        squares[i].style.display = "block";
     squares[i].style.background = colors[i];
     }
     else{
        squares[i].style.display = "none";
     }
     //reset  background color of h1 to steelblue
     h1.style.background= "steelblue";
     //change message dispaly teext
     messageDisplay.textContent = "";
     //change playagain text to new color;
     resetButton.innerHTML = "New Color";

}


 
resetButton.addEventListener("click",function(){
  reset();
})
function changeColor(colors){
//loop through all squares 
	for( var i=0;i<squares.length;i++)
	{
     squares[i].style.background=colors;
    }   
}
function pickcolor(){
      var random=Math.floor(Math.random()*numSquares);
      return colors[random];	
}
function generateRandomColors(num){
//take an array
var arr = []
//repeat num times
for(var i =0;i<num;i++)
{
	arr.push(randomColor()) ;
}
//generate random color and push into arr
//return that arr
return arr;
}

// reurn color in this format ---->"rgb(255, 0, 255)",  
function randomColor(){
//random number for red

var r = Math.floor(Math.random() * 256);
//random number for green
var g = Math.floor(Math.random() * 256);
//random number for blue
var b = Math.floor(Math.random() * 256);
//return srting "rgb(255, 0, 255)"
return "rgb(" + r + ", " + g + ", " + b +")" ;
}

function setUpModeButtons(){
      for(var i =0; i < modebuttons.length;i++)
     modebuttons[i].addEventListener("click",function(){
     modebuttons[0].classList.remove("selected");
     modebuttons[0].classList.remove("selected");
     this.classList.add(".selected");
     this.textContent=== "Easy" ? numSquares =3: numSquares = 6;
     reset();
     });

}
function setUpSquares(){
  for(var i=0; i < squares.length; i++){
    //initialize color
     squares[i].style.background = colors[i];
     //add click listener
     squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.background;
        console.log(pickedColor + clickedcolor)
        if(clickedcolor === pickedColor)
        {
        messageDisplay.textContent="correct!!";
        changeColor(clickedcolor);
        h1.style.background = clickedcolor;
        resetButton.innerHTML = "Play Again?";     
        }
        else{
        this.style.background="#232323";
        messageDisplay.textContent="Try again";
        }    
      })

    }
function exitTheGame(){
      var random=Math.floor(Math.random()*numSquares);
      return colors[random];	
}
 }
