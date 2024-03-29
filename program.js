console.log("hello world");

const start = document.getElementById("start")
const trivia = document.getElementById("trivia")
const question = document.getElementById("question")
const qImg = document.getElementById("qImg")
const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")
const counter = document.getElementById("counter")
const timeGauge = document.getElementById("timeGauge")
const progress = document.getElementById("progress")
const scoreDiv = document.getElementById("scoreContainer")

//create questions using objects
let questions = [
    {
        question: "Which Champion is known as 'The Bounty Hunter'?",
        imgSrc: "assets/img/maxresdefault.jpg",
        choiceA: "Graves",
        choiceB: "Talon",
        choiceC: "Miss Fortune",
        choiceD: "Master Yi",
        correct: "C"
    },
    {
        question: "Which champion says this line?: 'Join the glorious evolution.'",
        imgSrc: "assets/img/download.jpg",
        choiceA: "Blitzcrank",
        choiceB: "Orrn",
        choiceC: "Viktor",
        choiceD: "Olaf",
        correct: "C"
    },
    {
        question: "Who was Gangplank's first love?",
        imgSrc: "assets/img/Gangplank_0.jpg",
        choiceA: "Illaoi",
        choiceB: "Lissandra",
        choiceC: "Neeko",
        choiceD: "Fiora",
        correct: "A"
    },
    {
        question: "Which champion did Faker use in his famous outplay vs KT's Ryu in 2014?",
        imgSrc: "assets/img/faker-why-he-re-signed-skt-pressure-2019-league-of-legends.jpg",
        choiceA: "Zed",
        choiceB: "Ryze",
        choiceC: "Orianna",
        choiceD: "LeBlanc",
        correct: "A"
    },
    {
        question: "What does Warwick's ult range scale off of?",
        imgSrc: "assets/img/Warwick_Splash_0.0.jpg",
        choiceA: "Attack Damage(AD)",
        choiceB: "Ability Power(AP)",
        choiceC: "Attack Speed(AS)",
        choiceD: "Movement Speed(MS)",
        correct: "D"
    },
    {
        question: "Which of the champions listed below is the communities most hated champion?",
        imgSrc: "assets/img/mosthated.jpg",
        choiceA: "Zed",
        choiceB: "Riven",
        choiceC: "Yasuo",
        choiceD: "Pyke",
        correct: "C"
    }
    
];

//create veriables

const lastQuestion = questions.lenght - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth /questionTime;
let timer;
let score = 0;


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
//couldn't figure out how to make this work with jQurry, will ask later
start.addEventListener("click",startQuiz);
//start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    trivia.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter,1000); // 1000ms = 1s
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }
    else if (count >= questionTime)
    {
        runningQuestion++;
        renderQuestion();
        count = 0;        
    }
    else if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
        count = 0;
    }
    else if(lastQuestion >= runningQuestion){
        scoreRender();
    }
        
    

}

//check answers

function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        // answer is correct
        score++
        runningQuestion++;
        renderQuestion();
        count = 0;
    }
    else if(answer != questions[runningQuestion].correct)
    {
        // answer is wrong
        runningQuestion++;
        renderQuestion();
        count = 0;
    }
    else if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else if(lastQuestion >= runningQuestion){
        scoreRender();
        
    }
        
}


function scoreRender(){
    scoreDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/questions.length);
    //$("#scoreDiv").text(scorePercent)

    let img = (scorePercent >= 80) ? "assets/img/5.png":
              (scorePercent >= 60) ? "assets/img/4.png":
              (scorePercent >= 40) ? "assets/img/3.png":  
              (scorePercent >= 20) ? "assets/img/2.png":
              "assets/img/1.png";  
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePercent +"%</p>";     
}
