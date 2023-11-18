var minutes = 00;
var seconds = 00;
var tens = 00;
var outputMinutes = document.getElementById('minutes');
var outputSeconds = document.getElementById('seconds');
var outputTens = document.getElementById('tens');
var Interval;

var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');

buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime,10);
});

buttonStop.addEventListener('click', () =>{
    clearInterval(Interval);
})

buttonReset.addEventListener('click',() =>{
    clearInterval(Interval);
    minutes = '00';
    seconds = '00';
    tens = '00';
    outputMinutes.innerHTML = minutes;
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <=9){
        outputTens.innerHTML = '0' + tens;
    }
    if(tens >9){
        outputTens.innerHTML = tens;
    }
    if(tens >99){
        seconds++;
        outputSeconds.innerHTML = '0' + seconds;
        tens = 0;
        outputTens.innerHTML = '0' + tens;
    }
if(seconds > 9){
    outputSeconds.innerHTML = seconds;
}
if(seconds>60){
    minutes++;
    outputMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    outputSeconds.innerHTML = '0' + seconds;
}
}

//for toggle mode

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const btn = document.querySelectorAll('.btn2');
// const h1 = document.querySelector('h1');

toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)';
        body.style.color = 'black';
        body.style.transition = '2s';

    }
    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
  
    }
})
console.log(btn);