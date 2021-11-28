

let catsHunger = 0;
let catsBoredom = 0;
let catsEnergy = 0;


const boredBar = document.getElementById('bored-bar');
const hungerBar = document.getElementById('hunger-bar');
const energyBar = document.getElementById('energy-bar');


// -------- this is the  stats bar interval code ------------//
function intervalStart (chooseBar,interval) {
    
    setInterval(() => {
        const computedStyle = getComputedStyle(chooseBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        chooseBar.style.setProperty('--width', width +.05);
        // console.log(width);
        pushTo = width;
        // console.log(width);
            // pushTo = parseFloat(width);
        // console.log('amount for hungs:' + pushTo);
       
    }, (interval));
    // pushTo = width;
    // console.log(pushTo);
  

}

//-------- need to create different interval for energy... needs to go down --//

function intervalStartReverse (chooseBar, interval){
    setInterval(() => {
        const computedStyle = getComputedStyle(chooseBar);
        const width = parseFloat(computedStyle.getPropertyValue('--width'));
        chooseBar.style.setProperty('--width',width -.05)
    }, (interval));
}




// why are the numbers opposite??? isnt higher number supposed to be faster?? need to figure this one
//----- moving this one to the start function a the bottom ---//
// intervalStart(boredBar, 5)
// intervalStart(hungerBar, 1)
// intervalStartReverse(energyBar, 9)


// -------- this is the counter for age function --------//
const counter  = document.querySelector('#counter')

let count = 0; //----- maybe move this one to the top.
function startCount(count){
setInterval(() => {
    if (count <= 9){
        count++;
        counter.innerText = count;
    }
}, 1500); //------ this changes speed of counter..
}



//----------below are the event listeners for the action buttons

const feedButton =document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');


feedButton.addEventListener('click', () => {
    console.log('clickedTheFeedsAgain');
    clickAction(hungerBar);
})

playButton.onclick = () => {
    console.log('clicked da play');
    clickAction(boredBar);
}

sleepButton.onclick = () => {
    console.log('clicked the sleep');
    clickActionNegative(energyBar);
}

const clickAction = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width - 10);
    }
    console.log(catsHunger)
}

const clickActionNegative = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width + 10);
    }
}



function playGame(){
    startCount(0); //-------this one starts the counter
    intervalStart(boredBar, 5)
    intervalStart(hungerBar, 1)
    intervalStartReverse(energyBar, 9)
    clearWelcomePage();
}

const welcomePage = document.querySelector('.welcome-page');
const welcomeStart = document.querySelector('.welcome-start')
const nameBox = document.getElementById('#name-box');
const catName = document.getElementsByClassName('.catName');

const gameStartButton = document.querySelector('.gameStartButton')

// const $gameStartButton = $('.gameStartButton');
// $welcomePage = $('.welcome-page');

function clearWelcomePage(){
    $('.welcome-page').css('display','none');
}

console.log(nameBox)


// $gameStartButton.on('submit',playGame());

gameStartButton.addEventListener('click', function(e){
    if (e.target.innerText ==='Enter'){
        playGame();
        console.log('hello')
    }
})