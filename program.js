                /*
                Which Champion is known as "The Bounty Hunter"?
                
                    Graves - Talon - Miss Fortune - Master Yi 
                





                Which champion says this line?: "Join the glorious evolution."
                
                    Blitzcrank - Orrn - Viktor - Olaf 
                




                Who was Gangplank's first love?
                
                    Illaoi - Lissandra - Neeko - Fiora 
                




                Which champion did Faker use in his famous outplay vs KT's Ryu in 2014?
                
                    Zed - Ryze - Orianna - LeBlanc 
                




                
                What does Warwick's ult range scale off of?
                
                    Attack Damage(AD) - Ability Power(AP) - Attack Speed(AS) - Movement Speed(MS) 
                




                Which of the champions listed below is the communities most hated champion?
                
                    Zed - Riven - Yasuo - Pyke 
                */
//===================================================================================================================================================================================
console.log("hello world");

const start = document.getElementById("start")
const trivia = document.getElementById("trivia")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const A = document.getElementById("A")
const B = document.getElementById("B")
const C = document.getElementById("C")
const D = document.getElementById("D")
const counter = document.getElementById("counter")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("score")

//create questions using objects
let questions = [
    {
        question: "Which Champion is known as 'The Bounty Hunter'?",
        imgSrc: "assets/img/maxresdefault.jpg",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
    {
        question: "Which champion says this line?: 'Join the glorious evolution.'",
        imgSrc: "assets/img/download.jpg",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
    {
        question: "Who was Gangplank's first love?",
        imgSrc: "assets/img/Gangplank_0.jpg",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },
    {
        question: "Which champion did Faker use in his famous outplay vs KT's Ryu in 2014?",
        imgSrc: "assets/img/faker-why-he-re-signed-skt-pressure-2019-league-of-legends.jpg",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },
    {
        question: "What does Warwick's ult range scale off of?",
        imgSrc: "assets/img/Warwick_Splash_0.0.jpg",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Correct",
        correct: "D"
    },
    {
        question: "Which of the champions listed below is the communities most hated champion?",
        imgSrc: "assets/img/mosthated.jpg",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    }
    
];

//create veriables

const lastQuestion = question.lenght - 1;
let runningQuestion = 0;

//render a question
function renderQuestion(){
    let q = questions[runningQuestion]

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display = "none";
renderQuestion();
trivia.style.display = "block";

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++)
    {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"
    }
}

