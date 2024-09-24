var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0;i < numberOfDrumButtons; i++ )
    document.querySelectorAll("button")[i].addEventListener("click", function(){
var b = this.innerHTML;
makeSoud(b);
});
document.addEventListener("keypress", function(event){
    makeSoud(event.key);
});
function makeSoud(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play
            alert("w");
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass");
            kick.play
            break;
    }

}




document.getElementById("button1").addEventListener("click", function(){
   let r = parseFloat(document.getElementById("inputtype").value);
  document.getElementById("area").innerHTML = 3.14159*r*r;
});
