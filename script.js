

let cat = {
    name:'',
    hunger: 0,
    boredom: 0,
    energy: 100,
    count: 0,
    
}
// let countProgress = 0;

const boredBar = document.getElementById('bored-bar-progress');
const energyBar = document.getElementById('energy-bar-progress');
const hungerBar = document.getElementById('hunger-bar');

const $hungerBar = $('#hunger-bar');
const $boredBar = $('#bored-bar');
const $energyBar = $('#energy-bar');

let hungerBarProgress = '';
let boredBarProgress= '';
let energyBarProgress= '';


// -------- this is the counter for age function --------//
const counter  = document.querySelector('#counter')

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
    // clickActionNegative(energyBar);
}

//--------------------

function gameEnds(){
    $('#bored-bar').css('width', 0 + '%');
    $('#hunger-bar').css('width', 0 + '%');
    $('#energy-bar').css('width', 100 + '%');

}

//------this is the stats bars interval codes-------//

function intervalStartHunger(){
    hungerBarProgress = setInterval(function () {
        cat.hunger++;
        $('#hunger-bar').css('width', cat.hunger +'%');
        if (cat.hunger >= 100){
            console.log('this hungerBar works')
            // resetHunger();
            clearInterval(hungerBarProgress);
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
            console.log('this bored works')
            clearInterval(boredBarProgress);
            gameEnds();
            showLoserPage();
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
           resetEnergy();
            clearInterval(energyBarProgress);
            gameEnds();
            showLoserPage();

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
    

function resetEnergy(){
    cat.energy = 100;
    clearInterval(energyBarProgress);
    $('#energy-bar').css('width',cat.energy+'%');
    intervalStartEnergy();
    }
    


//-------
const clickActionNegative = (chooseBar) => {
    const computedStyle = getComputedStyle(chooseBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    if (width >=0){
    chooseBar.style.setProperty('--width', width + 10);
    }
}



function playGame(){
    // clearLoserPage();
    startCount(0); //-------this one starts the counter,
    intervalStartHunger();
    intervalStartBored();
    intervalStartEnergy();
    clearWelcomePage();
}


const catName = document.querySelector('#catName');
const gameStartButton = document.querySelector('.gameStartButton')



function clearWelcomePage(){
    $('.welcome-page').css('display','none');
}

function showWelcomePage(){
    $('.welcome-page').css('display','flex');
    gameEnds();

}
function clearLoserPage() {
    $('.loser-page').css('display','none');
}
function showLoserPage() {
    $('.loser-page').css('display','inline');
    $('.winner-page').css('display','none');
    $('.try-again').css('display','inline')


}


function showWinnerPage(){
    $('#playAgainButton').css('display','flex')

    $('.winner-page').css('display','inline');
    $('.loser-page').css('display','none');
    clearWelcomePage();
    clearInterval(hungerBarProgress);
    clearInterval(energyBarProgress);
    clearInterval(boredBarProgress);

}

function clearWinnerPage(){
    $('.winner-page').css('display','none');
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
        location.reload();
        // return false;

    }
}
)


// playAgainButton.addEventListener('click', function(e){
//     if (e.target.innerText =='Play again!'){
//         e.preventDefault();
//         console.log('clickie')
//         clearWinnerPage();
//         clearLoserPage();
//         $('body').css('visibility','hidden');
//         location.reload();
//         // return false;

//     }
// }
// )





// playAgainButton.addEventListener('click', function(e){
//     if (e.target.innerText =='Try again!'){
//         e.preventDefault();
//         console.log('clickie')
//         clearWinnerPage();
//         clearLoserPage();
//         $('body').css('visibility','hidden');
//         location.reload();
//         // return false;

//     }
// }
// )