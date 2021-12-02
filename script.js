
//-------Cat Stats & Game Variables----------//
let cat = {
    name:'',
    hunger: 0,
    boredom: 0,
    energy: 100,
    count: 0,
}

const counter  = document.querySelector('#counter')
const feedButton =document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');


let hungerBarProgress = '';
let boredBarProgress= '';
let energyBarProgress= '';

//------- Audio Clips----------------//

let catStartSound =()=> new Audio('audio/catStartSound.mp3').play();
let catSadSound =()=> new Audio('audio/catSadSound.mp3').play();
let catPurrSound =()=>new Audio('audio/catPurrSound.mp3').play();
let catEatSound =()=> new Audio('audio/catEatSound.mp3').play();
let catPlaySound =()=> new Audio('audio/catPlaySound.mp3').play();

//-----------------------------------//

function startCount(){
    countProgress = setInterval(()=>{
    cat.count++;
    counter.innerText = cat.count;
        if (cat.count >=15){
            transformCat()
        }
        if (cat.count >= 30){ //------ change timer here
            console.log('winner!')
            showWinnerPage();
            gameEnds();
            clearInterval(countProgress)
        }
    }, 1500); //------ this changes speed of counter..
    
}


//---------Event Listeners---------------//

feedButton.addEventListener('click', () => {
    catEatSound();
    resetHunger(); 
})

playButton.onclick = () => {
    catPlaySound();
    resetBored();
}

sleepButton.onclick = () => {
    catPurrSound();
    resetEnergy();
}

$('.gameStartButton').on('click', function(e){
    if (e.target.innerText =='Play'){
        cat.name = $('#catName').val();
        $('#name-box').text(cat.name);
        playGame();
    }
})


$('.playAgainButton').on('click', function(e){
    if (e.target.innerText =='Play again!'){
        e.preventDefault();
        clearWinnerPage();
        clearLoserPage();
        $('body').css('visibility','hidden');
        $('body').css('background-image','none')
        location.reload();

    }
})

//------this is the stats bars interval codes-------//

function intervalStartHunger(){
    hungerBarProgress = setInterval(function () {
        cat.hunger++;
        $('#hunger-bar').css('width', cat.hunger +'%');
        if (cat.hunger >= 100){
            gameEnds();
            showLoserPage();
        }
    }, 125)
}

function intervalStartBored(){
    boredBarProgress = setInterval(function () {
        cat.boredom++;
        $('#bored-bar').css('width', cat.boredom +'%');
        if (cat.boredom >= 100){
            gameEnds();
            showLoserPage();
        }
    }, 100)
}

function intervalStartEnergy(){
    energyBarProgress = setInterval(function () {
        cat.energy--;
        $('#energy-bar').css('width', cat.energy+'%');
        if (cat.energy <= 0){
            gameEnds();
            showLoserPage();
        }
    }, 150)
}


//------------ resetting functions ---------------//

function resetHunger(){
    cat.hunger =0;
    clearInterval(hungerBarProgress);
    $('#hunger-bar').css('width',cat.hunger+'%');
    intervalStartHunger() // --- test
    }

function resetBored(){
    cat.boredom =0;
    clearInterval(boredBarProgress);
    $('#bored-bar').css('width',cat.boredom+'%');
    intervalStartBored() // --- test
    }
    
function resetEnergy(){
    cat.energy = 100;
    clearInterval(energyBarProgress);
    $('#energy-bar').css('width',cat.energy+'%');
    intervalStartEnergy();
    }
    

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
    clearLoserPage();
    clearWelcomePage();
    catStartSound()
    gameEnds();
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
    clearWinnerPage();
    clearWelcomePage();
    gameEnds();
    clearInterval(hungerBarProgress);
    clearInterval(energyBarProgress);
    clearInterval(boredBarProgress);
    //------have to clear interval twice for some reason or it will repeat the winning page------//
}



function transformCat(){
    $('.cat').css('animation','fadeOut 2s');
    $('.cat').css('opacity','0');
    $('.cat2').css('animation','fadeIn 8s')
    $('.cat2').css('display','inline');
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


//-------------PLAY THE GAME -------------------//

function playGame(){
    catStartSound();
    startCount(); //-------this one starts the counter,
    intervalStartHunger();
    intervalStartBored();
    intervalStartEnergy();
    clearWelcomePage();
}