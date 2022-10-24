const arrowOne = document.querySelector('.round');
const arrowTwo = document.querySelector('.round-two');
const arrowThree = document.querySelector('.round-three');
const input = document.querySelector('#input-field');
const backgroundNoise = document.querySelector('#background-noise');
const albums = document.querySelectorAll('#background-noise .card');
const timer = document.querySelector('#set-timer');
const submit = document.querySelector('.submit');
const workZone = document.querySelector('#work-zone');

//arrows

arrowOne.addEventListener('click', ()=> {
    input.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
})

arrowTwo.addEventListener('click', ()=> {
    backgroundNoise.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
})

arrowThree.addEventListener('click', ()=> {
    timer.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
})

submit.addEventListener('click', ()=> {
    workZone.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
})


backgroundNoise.addEventListener('click', (e)=>{

    if(e.target.parentNode.classList.contains('card')){
    for(let i = 0; i < albums.length; i++){
        albums[i].classList.remove('selected');
    }
    e.target.parentNode.classList.add('selected');
    } 
})

// text animation

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = ["want to do a thing?", "hit the arrow"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span class="caret" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// countdown animation

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

let today = new Date();
let now = new Date().getTime();
let countDownDate = addMinutes(today, 15);
// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);