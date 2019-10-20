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

//Globals
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

let questions = [
    {
        question: "Which Champion is known as 'The Bounty Hunter'?",
        imgSrc: "assets/img/maxresdefault.jpg",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    },
    {
        question: "",
        imgSrc: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""
    }
    
]

