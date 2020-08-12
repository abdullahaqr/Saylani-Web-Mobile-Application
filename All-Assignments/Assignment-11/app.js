var questionsArray = [
    {
        question: "Full Form of RAM is ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Random Actual Memory",
            "Right Access Memory",
            "None of the above",
        ]
    },
    {
        question: "Full Form of LCD is ?",
        answer: "Liquid Crystal Display",
        options: [
            "Liquid Crystal Display",
            "Light Crystal Display",
            "Liquid Cold Display",
            "None of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is ?",
        answer: "Electronic Mail",
        options: [
            "Electric Mail",
            "Easy Mail",
            "Electronic Mail",
            "None of the above",
        ]
    },
    {
        question: "Full Form of ATM is ?",
        answer: "Automated Teller Machine",
        options: [
            "Auto Transmission Method",
            "Automatic Transition Money",
            "Automated Teller Machine",
            "None of the above",
        ]
    },
    {
        question: "Full Form of SEO is ?",
        answer: "None of the above",
        options: [
            "Safe Engine Optimization",
            "Secure Engine Optimization",
            "Secret Engine Optimization",
            "None of the above",
        ]
    },
];

var questionCount = 0;
var score = 0;
var attemptAnswer = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var percentageAnswer = 0;
var nameTry = "";
var nameCheck = "";

var minute = 2;
var sec = 00;
var interval;
var minSpan = document.getElementById("minSpan")
var secSpan = document.getElementById("secSpan")
var timer = document.getElementById("timer")


function startQuiz() {
    var name = document.getElementById("name")
    nameCheck = name.value
    if (nameCheck == "") {
        alert("Please Enter Your Name !")
    }
    else {
        var welcome = document.getElementById("welcome")
        welcome.classList.add("d-none")

        var quiz = document.getElementById("quiz")
        quiz.classList.remove("d-none")
        showQuestion(0)
        interval = setInterval(timerFunc, 1000)
    }

}
function tryAgain() {
    var result = document.getElementById("result")
    result.classList.add("d-none")

    var quiz = document.getElementById("quiz")
    quiz.classList.remove("d-none")

    removeActiveClass()
    showQuestion(0)

    var name = document.getElementById("name")
    name.value = nameTry

    interval = setInterval(timerFunc, 1000)
}

function showQuestion(e) {
    questionNumber(questionCount)

    // To show question
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML = "Q." + (questionCount + 1) + " : " + questionsArray[e].question

    // To show option
    var optionElement = document.getElementsByClassName("optionElement")
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
}

function nextQuestion() {
    if (questionCount <= 4) {
        validate(questionCount)

        if (questionCount < 5) {
            showQuestion(questionCount)
            removeActiveClass()
        }
        if (questionCount == 5) {
            showResult()
        }

    }
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
            attemptAnswer += 1
            correctAnswer += 1
            questionCount++;
        } else {
            attemptAnswer += 1
            wrongAnswer += 1
            questionCount++;
        }
    }
}

function questionNumber(e) {
    var header = document.getElementById("header")
    header.innerHTML = "Question # " + (e + 1) + " / 5"
}

function timerFunc() {
    sec = (Math.abs(sec))
    minute = (Math.abs(minute))

    if (sec == 00) {
        minute--;
        sec = 60;
    }
    sec--;

    if (sec < 10) {
        secSpan.innerHTML = "0" + sec.toString();
    } else {
        secSpan.innerHTML = sec;
    }
    if (minute < 10) {
        minSpan.innerHTML = "0" + minute.toString();
    } else {
        minSpan.innerHTML = minute;
    }

    if (minute == 00 && sec == 20) {
        timer.classList.add("timerRed")
    }

    if (minute == 00 && sec == 00) {
        timer.classList.remove("timerRed")
        alert("Oopps!! Time's Up !!!");
        showResult()
    }
}

function showResult() {
    var quiz = document.getElementById("quiz")
    quiz.classList.add("d-none")

    var result = document.getElementById("result")
    result.classList.remove("d-none")

    percentageAnswer = ((score / 50) * 100)

    var studentName = document.getElementById("studentName")
    var name = document.getElementById("name")
    var attempt = document.getElementById("attempt")
    var correct = document.getElementById("correct")
    var wrong = document.getElementById("wrong")
    var percentage = document.getElementById("percentage")
    var totalScore = document.getElementById("totalScore")

    studentName.innerHTML = name.value
    attempt.innerHTML = attemptAnswer
    correct.innerHTML = correctAnswer
    wrong.innerHTML = wrongAnswer
    percentage.innerHTML = percentageAnswer + " %"
    totalScore.innerHTML = score + " / 50"

    questionCount = 0;
    score = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    percentageAnswer = 0;

    nameTry = name.value

    name.value = ""

    resetTimer()
}

function goToHome() {
    var result = document.getElementById("result")
    result.classList.add("d-none")

    var welcome = document.getElementById("welcome")
    welcome.classList.remove("d-none")

    questionCount = 0;
    score = 0;
    correctAnswer = 0;
    wrongAnswer = 0;
    percentageAnswer = 0;

}

function resetTimer(){

    clearInterval(interval);
    minute = 0;
    sec = 00;
    secSpan.innerHTML = 00;
    minSpan.innerHTML = 02;
}
