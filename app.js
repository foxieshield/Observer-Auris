/* OBSERVER AURIS
   Main JavaScript  */

/* GET HTML ELEMENTS  */

// Screens
const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");

// Timer settings
const timerOff = document.getElementById("timerOff");
const timerOn = document.getElementById("timerOn");
const timeSetting = document.getElementById("timeSetting");
const timeSelect = document.getElementById("timeSelect");

// Guess type
const logoMode = document.getElementById("logoMode");
const descriptionMode = document.getElementById("descriptionMode");

// Question count
const questionCount = document.getElementById("questionCount");

// Start
const startButton = document.getElementById("startButton");

/*  GAME STATE */

const gameState = {

    mode: "quiz",

    quiz: {
        timerEnabled: false,
        timePerQuestion: 10,
        guessType: "logo",
        totalQuestions: 10,
        currentQuestion: 0,
        score: 0
    },

    skillCheck: {
        mode: "normal",
        correct: 0,
        wrong: 0
    }

};

/*  TIMER SETTING  */

// Timer OFF
timerOff.addEventListener("click", function () {

    gameState.quiz.timerEnabled = false;

    timerOff.classList.add("selected");
    timerOn.classList.remove("selected");

    // Hide time-per-question setting
    timeSetting.hidden = true;

});


// Timer ON
timerOn.addEventListener("click", function () {

    gameState.quiz.timerEnabled = true;

    timerOn.classList.add("selected");
    timerOff.classList.remove("selected");

    // Show time-per-question setting
    timeSetting.hidden = false;

});

/*  GUESS TYPE */

// Logo
logoMode.addEventListener("click", function () {

    gameState.quiz.guessType = "logo";

    logoMode.classList.add("selected");
    descriptionMode.classList.remove("selected");

});

// Description
descriptionMode.addEventListener("click", function () {

    gameState.quiz.guessType = "description";

    descriptionMode.classList.add("selected");
    logoMode.classList.remove("selected");

});

/*  QUESTION COUNT */

questionCount.addEventListener("change", function () {

    gameState.quiz.totalQuestions =
        Number(questionCount.value);

});

/*  TIME SELECTION  */

timeSelect.addEventListener("change", function () {

    gameState.quiz.timePerQuestion =
        Number(timeSelect.value);

});

/*  START GAME  */

startButton.addEventListener("click", function () {

    /*
        Reset the quiz before starting.
        This is important when the player
        chooses "Play Again" later.
    */

    gameState.quiz.currentQuestion = 0;
    gameState.quiz.score = 0;

    /*
        Make sure the latest settings
        are stored.
    */

    gameState.quiz.totalQuestions =
        Number(questionCount.value);

    gameState.quiz.timePerQuestion =
        Number(timeSelect.value);

    // Hide setup
    setupScreen.hidden = true;

    // Show game
    gameScreen.hidden = false;

    // Make sure results are hidden
    resultsScreen.hidden = true;


    console.log("Game started!");
    console.log(gameState);

});

