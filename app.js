/* OBSERVER AURIS
   Main JavaScript  */

/* GET HTML ELEMENTS  */

//secret
const title = document.querySelector("#setupScreen h1");
// Modes

const killerMode = document.getElementById("killerMode");
const survivorMode = document.getElementById("survivorMode");
const blendMode = document.getElementById("blendMode");

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

const questionNumber = document.getElementById("questionNumber");

const questionContent = document.getElementById("questionContent");

const answers = document.getElementById("answers");

const nextButton = document.getElementById("nextButton");
const leaveButton = document.getElementById("leaveButton");
const restartButton = document.getElementById("restartButton");
const finalScore = document.getElementById("finalScore");

const skillCheckSound = new Audio("audio/skillcheck.mp3");

const skillCheckScreen = document.getElementById("skillCheckScreen");

const skillCheckCanvas = document.getElementById("skillCheckCanvas");

const skillCheckButton = document.getElementById("skillCheckButton");

const skillCheckCorrect = document.getElementById("skillCheckCorrect");

const skillCheckWrong = document.getElementById("skillCheckWrong");

const reactionDisplay = document.getElementById("reactionDisplay");

const skillCheckLeave = document.getElementById("skillCheckLeave");

const skillCheckContext = skillCheckCanvas.getContext("2d");

let timerInterval;
let perkLogoClicks = 0;
let perkLogoClickTimer;

function drawSkillCheck() {

    const ctx = skillCheckContext;

    const width = skillCheckCanvas.width;
    const height = skillCheckCanvas.height;

    const centerX = width / 2;
    const centerY = height / 2;

    const radius = 155;

    ctx.clearRect(
        0,
        0,
        width,
        height
    );

    // OUTER CIRCLE

    ctx.beginPath();

    ctx.arc(
        centerX,
        centerY,
        radius,
        0,
        Math.PI * 2
    );

    ctx.strokeStyle = "#eeeeee";
    ctx.lineWidth = 5;

    ctx.stroke();

// GOOD ZONE

ctx.beginPath();

ctx.arc(
    centerX,
    centerY,
    radius,
    gameState.skillCheck.goodStart,
    gameState.skillCheck.goodEnd
);

ctx.strokeStyle = "#eeeeee";
ctx.lineWidth = 14;

ctx.stroke();

// GREAT ZONE

ctx.beginPath();

ctx.arc(
    centerX,
    centerY,
    radius,
    gameState.skillCheck.greatStart,
    gameState.skillCheck.greatEnd
);

ctx.strokeStyle = "#111111";
ctx.lineWidth = 14;

ctx.stroke();

    // NEEDLE

    const angle =
        gameState.skillCheck.needleAngle;

    const needleLength = radius + 20;

    const needleX =
        centerX +
        Math.cos(angle) * needleLength;

    const needleY =
        centerY +
        Math.sin(angle) * needleLength;

    ctx.beginPath();

    ctx.moveTo(
        centerX,
        centerY
    );

    ctx.lineTo(
        needleX,
        needleY
    );

    ctx.strokeStyle = "#d33";
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    ctx.stroke();
}

/*Creaste SKillcheck */

function createSkillCheck() {

    // Activate the skill check
    gameState.skillCheck.active = true;

  // Random location for the center of the scoring area

const scoringCenter = Math.random() * Math.PI * 2;

// GOOD zone

const goodSize = Math.PI * 0.30;

gameState.skillCheck.goodStart = scoringCenter - goodSize / 2;

gameState.skillCheck.goodEnd = scoringCenter + goodSize / 2;

// GREAT zone

const greatSize = Math.PI * 0.10;

gameState.skillCheck.greatStart = scoringCenter - greatSize / 2;

gameState.skillCheck.greatEnd = scoringCenter + greatSize / 2;

    // Random starting position for the needle
    gameState.skillCheck.needleAngle = Math.random() * Math.PI * 2;

    // How fast the needle rotates
    gameState.skillCheck.needleSpeed = 0.045;

    // Record when the skill check appeared
    gameState.skillCheck.shownAt = performance.now();

    // Clear previous reaction message
    reactionDisplay.textContent = "";

    // Draw the circle
    drawSkillCheck();

    // Start animation
    cancelAnimationFrame(
        gameState.skillCheck.animationFrame
    );

    animateSkillCheck();
}

//animation function//

function animateSkillCheck() {

    // Stop if there is no active skill check
    if (!gameState.skillCheck.active) {
        return;
    }

    // Move the needle
    gameState.skillCheck.needleAngle += gameState.skillCheck.needleSpeed;

    // Redraw everything
    drawSkillCheck();

    // Continue animation
    gameState.skillCheck.animationFrame = requestAnimationFrame(animateSkillCheck);
}

//function attempt skillcheck //

function attemptSkillCheck() {

    // Don't allow another input after the check is finished
    if (!gameState.skillCheck.active) {
        return;
    }

    // Stop the needle
    gameState.skillCheck.active = false;

    cancelAnimationFrame(
        gameState.skillCheck.animationFrame
    );

    // Calculate reaction time
    const reactionTime =
        performance.now() -
        gameState.skillCheck.shownAt;

    // Get the current needle angle
    const angle =
        normalizeAngle(
            gameState.skillCheck.needleAngle
        );

    // Get the GOOD zone
    const goodStart =
        normalizeAngle(
            gameState.skillCheck.goodStart
        );

    const goodEnd =
        normalizeAngle(
            gameState.skillCheck.goodEnd
        );

    // Get the GREAT zone
    const greatStart =
        normalizeAngle(
            gameState.skillCheck.greatStart
        );

    const greatEnd =
        normalizeAngle(
            gameState.skillCheck.greatEnd
        );

    // Check GREAT first
    const isGreat =
        isAngleInsideRange(
            angle,
            greatStart,
            greatEnd
        );

    // Then check GOOD
    const isGood =
        isAngleInsideRange(
            angle,
            goodStart,
            goodEnd
        );


    if (isGreat) {

        gameState.skillCheck.correct++;

        reactionDisplay.textContent =
            `GREAT! — ${Math.round(reactionTime)} ms`;

    } else if (isGood) {

        gameState.skillCheck.correct++;

        reactionDisplay.textContent =
            `GOOD — ${Math.round(reactionTime)} ms`;

    } else {

        gameState.skillCheck.wrong++;

        reactionDisplay.textContent =
            `MISS — ${Math.round(reactionTime)} ms`;
    }


    updateSkillCheckStats();
}

// CUSTOM ANGLE //
function normalizeAngle(angle) {

    const fullCircle =
        Math.PI * 2;

    angle =
        angle % fullCircle;

    if (angle < 0) {
        angle += fullCircle;
    }

    return angle;
}

// INSIDE THE RANGE //
function isAngleInsideRange(
    angle,
    start,
    end
) {

    if (start <= end) {

        return (
            angle >= start &&
            angle <= end
        );
    }

    // Handles a zone crossing 0°
    return (
        angle >= start ||
        angle <= end
    );
}

 // STATS UPDATE //
function updateSkillCheckStats() {

    skillCheckCorrect.textContent =
        `Correct: ${gameState.skillCheck.correct}`;

    skillCheckWrong.textContent =
        `Missed: ${gameState.skillCheck.wrong}`;
}

skillCheckButton.addEventListener(
    "click",
    function () {

        attemptSkillCheck();

    }
);

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.code === "Space" &&
            !event.repeat &&
            !skillCheckScreen.hidden
        ) {

            event.preventDefault();

            attemptSkillCheck();
        }
    }
);

/*  GAME STATE */

const gameState = {

    mode: "quiz",

 quiz: {
    timerEnabled: false,
    timePerQuestion: 10,
    guessType: "logo",
    perkType: "blend",
    totalQuestions: 10,
    currentQuestion: 0,
    score: 0,
    usedPerks: []
},

 skillCheck: {
    mode: "normal",
    correct: 0,
    wrong: 0,

    active: false,

    animationFrame: null,

    needleAngle: 0,
    needleSpeed: 0,

    goodStart: 0,
    goodEnd: 0,

    greatStart: 0,
    greatEnd: 0,

    shownAt: 0
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

    gameState.quiz.totalQuestions = Number(questionCount.value);
   
});

/*  TIME SELECTION  */

timeSelect.addEventListener("change", function () {

    gameState.quiz.timePerQuestion = Number(timeSelect.value);

});

/*  START GAME  */

startButton.addEventListener("click", function () {

    gameState.quiz.currentQuestion = 0;
    gameState.quiz.score = 0;

    gameState.quiz.totalQuestions = Number(questionCount.value);

    gameState.quiz.timePerQuestion = Number(timeSelect.value);

    // Hide setup
    setupScreen.hidden = true;

    // Show game
    gameScreen.hidden = false;

    // Make sure results are hidden
    resultsScreen.hidden = true;

    console.log("Game started!");
    console.log(gameState);

createQuestion();
});

/* ---------- PERK TYPE ---------- */

// Killer
killerMode.addEventListener("click", function () {

    gameState.quiz.perkType = "killer";

    killerMode.classList.add("selected");
    survivorMode.classList.remove("selected");
    blendMode.classList.remove("selected");

});

// Survivor
survivorMode.addEventListener("click", function () {

    gameState.quiz.perkType = "survivor";

    survivorMode.classList.add("selected");
    killerMode.classList.remove("selected");
    blendMode.classList.remove("selected");

});

// Blend
blendMode.addEventListener("click", function () {

    gameState.quiz.perkType = "blend";

    blendMode.classList.add("selected");
    killerMode.classList.remove("selected");
    survivorMode.classList.remove("selected");

});

/* =========================================
   QUESTION GENERATION
   ========================================= */


/* ---------- SHUFFLE ARRAY ---------- */

function shuffleArray(array) {

    return array.sort(function () {
        return Math.random() - 0.5;
    });

}


/* ---------- GET AVAILABLE PERKS ---------- */

function getAvailablePerks() {

    // Start with every perk
    let availablePerks = perks;


    // If Killer or Survivor was selected,
    // filter the database.
    if (gameState.quiz.perkType !== "blend") {

        availablePerks = perks.filter(function (perk) {

            return perk.type === gameState.quiz.perkType;

        });

    }


    return availablePerks;

}


/* ---------- CREATE QUESTION ---------- */

function createQuestion() {
    const availablePerks = getAvailablePerks();

    if (availablePerks.length < 5) {
        console.error("Not enough perks available to create a question.");
        return;
    }

    // Remove perks that have already been used
    const unusedPerks = availablePerks.filter(function (perk) {
        return !gameState.quiz.usedPerks.includes(perk.name);
    });

    // If we've used every perk, allow the pool to reset
    if (unusedPerks.length === 0) {
        gameState.quiz.usedPerks = [];
    }

    const questionPool =
        unusedPerks.length >= 5
            ? unusedPerks
            : availablePerks;

    const shuffledPerks = shuffleArray([...questionPool]);

    const correctPerk = shuffledPerks[0];

    // Mark this perk as used
    gameState.quiz.usedPerks.push(correctPerk.name);

    const wrongPerks = shuffledPerks.slice(1, 5);

    const answerChoices = [correctPerk, ...wrongPerks];

    shuffleArray(answerChoices);

    gameState.quiz.currentPerk = correctPerk;

    displayQuestion(correctPerk, answerChoices);
}


/* ---------- DISPLAY QUESTION ---------- */

function displayQuestion(correctPerk, answerChoices) {

    /*
        Question number
    */

    questionNumber.textContent =
        `Question ${gameState.quiz.currentQuestion + 1} / ${gameState.quiz.totalQuestions}`;


    /*
        Clear previous question.
    */

    questionContent.innerHTML = "";
    answers.innerHTML = "";


    /*
        Display either the perk logo
        or the perk description.
    */
if (gameState.quiz.guessType === "logo") {

    if (correctPerk.image !== "") {

        const image = document.createElement("img");

        image.src = correctPerk.image;
        image.alt = "Mystery perk logo";
        image.classList.add("perk-image");

        image.addEventListener("click", function () {

            if (correctPerk.name !== "A Place For Us") {
                return;
            }

            perkLogoClicks++;

            clearTimeout(perkLogoClickTimer);

            perkLogoClickTimer = setTimeout(function () {
                perkLogoClicks = 0;
            }, 1000);

            if (perkLogoClicks >= 4) {

                alert("ITS US, ITS US, ITS US");

                perkLogoClicks = 0;
            }
        });

        questionContent.appendChild(image);

    } else {

        const placeholder =
            document.createElement("div");

        placeholder.textContent =
            "[ PERK IMAGE GOES HERE ]";

        questionContent.appendChild(placeholder);
    }

} else {

    const description =
        document.createElement("p");

    description.innerText = correctPerk.description;

    description.classList.add("question-description");

    questionContent.appendChild(description);
}

    /*
        Create the five answer buttons.
    */

    answerChoices.forEach(function (perk) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent = perk.name;

        button.classList.add("answer-button");


        /*
            Remember which perk this button
            represents.
        */

        button.dataset.perkName = perk.name;


        /*
            Check answer when clicked.
        */

        button.addEventListener("click", function () {

            checkAnswer(
                button,
                perk,
                correctPerk,
                answerChoices
            );

        });

        answers.appendChild(button);

    });
startTimer();
}

function startTimer() {
    clearInterval(timerInterval);

    if (!gameState.quiz.timerEnabled) {
        timerDisplay.textContent = "";
        return;
    }

    let timeLeft = gameState.quiz.timePerQuestion;

    timerDisplay.textContent = `${timeLeft}s`;

    timerInterval = setInterval(function () {
        timeLeft--;

        timerDisplay.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            timeLeft = 0;
            timerDisplay.textContent = "TIME'S UP!";

            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    // Show the correct answer
    buttons.forEach(function (button) {
        if (
            button.dataset.perkName ===
            gameState.quiz.currentPerk.name
        ) {
            button.classList.add("correct");
        } else {
            button.classList.add("blurred");
        }
    });

    nextButton.hidden = false;
}

/* 
   ANSWER CHECKING
  */

function checkAnswer(
    selectedButton,
    selectedPerk,
    correctPerk,
    answerChoices
) {
    clearInterval(timerInterval);
   
    const buttons =
        document.querySelectorAll(".answer-button");


    /*
        Prevent the player from answering
        multiple times.
    */

    buttons.forEach(function (button) {

        button.disabled = true;

    });


    /*
        Was the answer correct?
    */

    if (selectedPerk.name === correctPerk.name) {

        selectedButton.classList.add("correct");

        gameState.quiz.score++;

    } else {

        /*
            Player selected the wrong answer.
        */

        selectedButton.classList.add("wrong");


        /*
            Find the correct answer and
            turn it green.
        */

        buttons.forEach(function (button) {

            if (
                button.dataset.perkName ===
                correctPerk.name
            ) {

                button.classList.add("correct");

            }

        });

    }


    /*
        Blur all answers that aren't
        the selected answer or correct answer.
    */

    buttons.forEach(function (button) {

        const isSelected =
            button === selectedButton;

        const isCorrect =
            button.dataset.perkName ===
            correctPerk.name;


        if (!isSelected && !isCorrect) {

            button.classList.add("blurred");

        }

    });


    /*
        Show the NEXT button.
    */

    nextButton.hidden = false;

}

/*
   NEXT QUESTION
 */

nextButton.addEventListener("click", function () {

    // Move to the next question
    gameState.quiz.currentQuestion++;

    /*
        Check if we've reached the end
        of the quiz.
    */

    if (
        gameState.quiz.currentQuestion >=
        gameState.quiz.totalQuestions
    ) {

        showResults();

        return;

    }

    // Hide the button while the new question loads
    nextButton.hidden = true;

    // Create the next question
    createQuestion();

});

/*
   RESULTS
 */

function showResults() {
    clearInterval(timerInterval);

    gameScreen.hidden = true;
    resultsScreen.hidden = false;

    finalScore.textContent =
        `${gameState.quiz.score} / ${gameState.quiz.totalQuestions}`;

   
//makes play again work
   
}

restartButton.addEventListener("click", function () {
    gameState.quiz.currentQuestion = 0;
    gameState.quiz.score = 0;
    gameState.quiz.usedPerks = [];

    resultsScreen.hidden = true;
    gameScreen.hidden = false;

    createQuestion();
});

//leave match

leaveButton.addEventListener("click", function () {
   clearInterval(timerInterval);
   
    gameScreen.hidden = true;
    resultsScreen.hidden = true;
    setupScreen.hidden = false;

    gameState.quiz.currentQuestion = 0;
    gameState.quiz.score = 0;
    gameState.quiz.usedPerks = [];

    nextButton.hidden = true;
});

//test skill check //

createSkillCheck();

/* =========================================
   EASTER EGG
   ========================================= */

let titleClicks = 0;
let titleClickTimer;

title.addEventListener("click", function () {

    titleClicks++;

    clearTimeout(titleClickTimer);

    titleClickTimer = setTimeout(function () {

        titleClicks = 0;

    }, 1000);


    if (titleClicks >= 4) {

        alert(
            "💜 Made for you with Love, Sweat,...and Lots of survivor blood 🫪"
        );

        titleClicks = 0;

    }

});
