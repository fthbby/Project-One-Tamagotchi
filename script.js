
//-------Cat Stats----------//
let cat = {
    name:'',
    hunger: 0,
    boredom: 0,
    energy: 100,
    count: 0,
    
}

const boredBar = document.getElementById('bored-bar-progress');
const energyBar = document.getElementById('energy-bar-progress');
const hungerBar = document.getElementById('hunger-bar');
const counter  = document.querySelector('#counter')


const $hungerBar = $('#hunger-bar');
const $boredBar = $('#bored-bar');
const $energyBar = $('#energy-bar');

let hungerBarProgress = '';
let boredBarProgress= '';
let energyBarProgress= '';

let catStartSound =()=> new Audio('audio/catStartSound.mp3').play();
let catSadSound =()=> new Audio('audio/catSadSound.mp3').play();
let catPurrSound =()=>new Audio('audio/catPurrSound.mp3').play();
let catEatSound =()=> new Audio('audio/catEatSound.mp3').play();
let catPlaySound =()=> new Audio('audio/catPlaySound.mp3').play();

function startCount(){
    countProgress = setInterval(()=>{
    cat.count++;
    counter.innerText = cat.count;
        if (cat.count >= 10){ //------ change timer here
            console.log('winner!')
            showWinnerPage();
            gameEnds();
            clearInterval(countProgress)
        }
    }, 1500); //------ this changes speed of counter..
    
}
// document.addEventListener('click',function(){
//     console.log(count)
// })

//----------below are the event listeners for the action buttons

const feedButton =document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');


feedButton.addEventListener('click', () => {
    console.log('clickedTheFeedsAgain');
    catEatSound();
    resetHunger(); 
    
})

playButton.onclick = () => {
    console.log('clicked da play');
    catPlaySound();
    resetBored();
}

sleepButton.onclick = () => {
    console.log('clicked the sleep');
    catPurrSound();
    resetEnergy();
}



//------this is the stats bars interval codes-------//

function intervalStartHunger(){
    hungerBarProgress = setInterval(function () {
        cat.hunger++;
        $('#hunger-bar').css('width', cat.hunger +'%');
        if (cat.hunger >= 100){
            console.log('this hungerBar works');
            gameEnds();
            showLoserPage();
            //------game over here
        }
    }, 100)
}

function intervalStartBored(){
    boredBarProgress = setInterval(function () {
        cat.boredom++;
        $('#bored-bar').css('width', cat.boredom +'%');
        if (cat.boredom >= 100){
            console.log('this bored works');
            gameEnds();
            showLoserPage();
            // showLoserPage();
            //------game over here
        }
    }, 50)
}

function intervalStartEnergy(){
    energyBarProgress = setInterval(function () {
        cat.energy--;
        $('#energy-bar').css('width', cat.energy+'%');
        if (cat.energy <= 0){
            console.log('this energy. works');
            // resetEnergy();
            gameEnds();
            showLoserPage();

        }
    }, 100)
}



//------------ resetting functions ---------------//

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
    

function resetEnergy(){
    cat.energy = 100;
    clearInterval(energyBarProgress);
    $('#energy-bar').css('width',cat.energy+'%');
    intervalStartEnergy();
    }
    

//-------------PLAY THE GAME -------------------//

function playGame(){
    catStartSound();
    startCount(0); //-------this one starts the counter,
    intervalStartHunger();
    intervalStartBored();
    intervalStartEnergy();
    clearWelcomePage();
}


//--------------------GAME ENDS-------------//

function gameEnds(){
    clearInterval(hungerBarProgress);
    clearInterval(energyBarProgress);
    clearInterval(boredBarProgress);
    $('#bored-bar').css('width', 0 + '%');
    $('#hunger-bar').css('width', 0 + '%');
    $('#energy-bar').css('width', 100 + '%');

}


const catName = document.querySelector('#catName');
const gameStartButton = document.querySelector('.gameStartButton')

//------WELCOME page functions-------------//

function clearWelcomePage(){
    $('.welcome-page').css('display','none');
}

function showWelcomePage(){
    $('.welcome-page').css('display','flex');
    gameEnds();
}

//-------- WINNING page functions-----------//

function showWinnerPage(){
    $('.winner-page').css('display','flex');
    $('.loser-page').css('display','none');
    clearWelcomePage();
    gameEnds();
    // clearInterval(hungerBarProgress);
    // clearInterval(energyBarProgress);
    // clearInterval(boredBarProgress);

}

function clearWinnerPage(){
    $('.winner-page').css('display','none');
}

//--------LOSER page functions--------------//

function clearLoserPage() {
    $('.loser-page').css('display','none');
}
function showLoserPage() { //------need to review this one....
    catSadSound();
    $('.loser-page').css('display','flex');
    $('.winner-page').css('display','none');
    $('.winner-page').css('visbility','hidden');

    clearWelcomePage();
    gameEnds();
    clearInterval(hungerBarProgress);
    clearInterval(energyBarProgress);
    clearInterval(boredBarProgress);

}



gameStartButton.addEventListener('click', function(e){
    if (e.target.innerText =='Enter'){
        cat.name = $('#catName').val();
        $('#name-box').text(cat.name)
        // $('.try-again').css('display','none')
        // addNameToGame();
        // clearInterval(intervalStartEnergy)
        // clearInterval(intervalStartHunger)
        // clearInterval(intervalStartBored)
        playGame();
    }
})

// const playAgainButton = document.querySelector('.playAgainButton')
const $playAgainButton = $('.playAgainButton')

$playAgainButton.on('click', function(e){
    if (e.target.innerText =='Play again!'){
        e.preventDefault();
        console.log('clickie')
        clearWinnerPage();
        clearLoserPage();
        $('body').css('visibility','hidden');
        $('body').css('background-image','none')
        location.reload();
        // return false;

    }
}
)

