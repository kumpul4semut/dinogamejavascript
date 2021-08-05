var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;


//jump function
function jump(){
  character.classList.add('lompat')
  setTimeout(function(){
    character.classList.remove('lompat')
  },300);
}

//game over
setInterval(function(){
  //ambil posisi left block
  let block__left = window.getComputedStyle(block).getPropertyValue('left')
  let character__top = window.getComputedStyle(character).getPropertyValue('top')
  if (parseInt(block__left) < 20 && parseInt(block__left) > -20 && parseInt(character__top) >= 130) {
    score = 0
    //alert('nabrak oy')
  }else{
    score ++
  
    document.getElementById('score').innerHTML= 'Score: '+Math.floor(score/135)
  }
},10);