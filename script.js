

let cat = {
    name:'',
    hunger: 0,
    boredom: 0,

}
// let catsHunger = 0;
// let catsBoredom = 0;
// let catsEnergy = 0;

// let interval = 0;

const boredBar = document.getElementById('bored-bar-progress');
const energyBar = document.getElementById('energy-bar-progress');
const hungerBar = document.getElementById('hunger-bar');

const $hungerBar = $('#hunger-bar');
const $boredBar = $('#bored-bar');
const $energyBar = $('#energy-bar');

let hungerBarProgress = '';
let boredBarProgress= '';
let energyBarProgress= '';


//------this is the stats bars interval codes-------//

// function intervalStart(chooseBar, speed){
//     let width = 1;
//     const rate = () => {
//         if (width>=100){
//             console.log('over 100')
//             clearInterval(interval);
//         } else {
//             width++;
//             chooseBar.style.width = `${width}%`
//         }
//     };

//     const interval = setInterval(rate, speed);
// }
//-------- need to create different interval for energy... needs to go down --//


function intervalStartReverse(chooseBar, speed){
    let width = 90;
    const rate = () => {
        if (width<=0){
            console.log('under 0')
            clearInterval(interval);
        } else {
            width--;
            chooseBar.style.width = `${width}%`
        }
    };

    const interval = setInterval(rate, speed);
}

// function intervalStartReverse (chooseBar, interval){
//     setInterval(() => {
//         const computedStyle = getComputedStyle(chooseBar);
//         const width = parseFloat(computedStyle.getPropertyValue('--width'));
//         chooseBar.style.setProperty('--width',width -.05)
//     }, (interval));
// }



// -------- this is the counter for age function --------//
const counter  = document.querySelector('#counter')

// let count = 0; //----- maybe move this one to the top.
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
    resetHunger(); //----testing this one
})

playButton.onclick = () => {
    console.log('clicked da play');
    resetBored();
    // clickAction(boredBar);
}

sleepButton.onclick = () => {
    console.log('clicked the sleep');
    resetEnergy();
    clickActionNegative(energyBar);
}

//--------------------



function intervalStartHunger(){
    hungerBarProgress = setInterval(function () {
        cat.hunger++;
        $('#hunger-bar').css('width', cat.hunger +'%');
        if (cat.hunger >= 100){
            console.log('this works')
            //------game over here
        }
    }, 100)
}

function intervalStartBored(){
    boredBarProgress = setInterval(function () {
        cat.boredom++;
        $('#bored-bar').css('width', cat.boredom +'%');
        if (cat.boredom >= 100){
            console.log('this bored works')
            //------game over here
        }
    }, 100)
}

function resetHunger(){
    cat.hunger =0;
    clearInterval(hungerBarProgress);
    $hungerBar.css('width',cat.hunger+'%');
    intervalStartHunger() // --- test
    }


function resetBored(){
    cat.boredom =0;
    clearInterval(boredBarProgress);

    $boredBar.css('width',cat.boredom+'%');
    intervalStartBored() // --- test
    }
    
    
  
//----------------------

//-------
const clickActionNegative = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width + 10);
    }
}






function playGame(){
    startCount(0); //-------this one starts the counter,
    intervalStartHunger();
    intervalStartBored();
    // intervalStart(boredBar, 60);
    // intervalStartReverse(energyBar, 80);
    // clearWelcomePage();
}

const welcomePage = document.querySelector('.welcome-page');
const welcomeStart = document.querySelector('.welcome-start')
const nameBox = document.querySelector('#name-box');
const catName = document.querySelector('#catName');
const gameStartButton = document.querySelector('.gameStartButton')



// function clearWelcomePage(){
//     $('.welcome-page').css('display','none');
// }


// gameStartButton.addEventListener('submit', playGame())


gameStartButton.addEventListener('click', function(e){
    if (e.target.innerText ==='Enter'){
        cat.name = $('#catName').val();
        $('#name-box').text(cat.name)
        // addNameToGame();
        playGame();
    }
})

// gameStartButton.addEventListener('submit',function(e){
//     if(!isValid){
//         e.preventDefault();
//     }
//     playGame();
//     console.log('this one works')
// })

// let $nameBox = $('#name-box')
// let nameBox1 = document.querySelector('#name-box')
// console.log($($nameBox).innerText)

// const getCatName = document.getElementById('catName').value;
// const $getCatName = $('#catName');

// function addNameToGame(){
//     $('#name-box').text(getCatName)
//     // nameBox.innerText = getCatName;
// }

