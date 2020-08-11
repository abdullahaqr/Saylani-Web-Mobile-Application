var questionsArray = [
    {
        question: "Full Form of RAM is ?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is ?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is ?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is ?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is ?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];


function startQuiz() {
    var name = document.getElementById("name")
    if (name.value == "") {
        alert("Please Enter Your Name !")
    }
    else {
        var welcome = document.getElementById("welcome")
        welcome.classList.add("d-none")

        var quiz = document.getElementById("quiz")
        quiz.classList.remove("d-none")
        showQuestion(0)

    }

}

function showQuestion(e) {
    questionNumber(questionCount)
    countDownTimer()

    // show q
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = "Q." + (questionCount + 1) + " : " + questionsArray[e].question

    // show option
    var optionElement = document.getElementsByClassName("optionElement")
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
}

var questionCount = 0;
var score = 0;

function nextQuestion() {
    validate(questionCount)
    showQuestion(questionCount)
    removeActiveClass()

}

function putActiveClass(e) {
    removeActiveClass()
    e.classList.add("active")
}
function removeActiveClass() {
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}

function validate(e) {

    if (document.querySelectorAll("p.active").length == 0) {
        alert("Please select one option !")
    }
    else {
        var active = document.querySelector("p.active")
        if (active.innerHTML == questionsArray[e].answer) {
            score += 10
            questionCount++;
            console.log(score)
        }
    }
}

function questionNumber(e) {
    var header = document.getElementById("header")
    header.innerHTML = "Question # " + (e + 1) + " / 5"

    console.log(header.innerHTML)
}


function countDownTimer() {
    var minute = 2;
    var sec = 00;
    var minSpan = document.getElementById("minSpan")
    var secSpan = document.getElementById("secSpan")
    var timer = document.getElementById("timer")
    function timerFunc() {

        
        if (sec == 00) {
            minute--;
            sec = 60;
        }
        sec--;

        if (sec < 10) {
            secSpan.innerHTML = "0" + sec.toString();
        }else{
            secSpan.innerHTML =  sec;
        }
        if (minute < 10) {
            minSpan.innerHTML = "0" + minute.toString();
        }else{
            minSpan.innerHTML =  minute;
        }

        if(minute == 00 && sec == 20){
            timer.classList.add("timerRed")
        }

        if(minute == 00 && sec == 00){
            timer.classList.remove("timerRed")
            alert("Oopps!! Time's Up !!!");
        }
    }
    setInterval(timerFunc, 1000);
}
