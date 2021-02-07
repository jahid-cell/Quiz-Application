const startButton = document.querySelector(".start-btn");
const nextButton = document.querySelector(".next-btn");
const questionContainerElements = document.querySelector(".question-container");

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
startButton.addEventListener('click', startGame)
const questionElement = document.querySelector(".question");
const answerButtonsElement = document.querySelector(".answer-button");
var shuffledQuestion, currentQuestionIndex;

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElements.classList.remove("hide")
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });

}


function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectButton = e.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide");
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [

    {
        question: "Which one is the head office of United Nation ?",
        answer: [
            { text: "New York", correct: true },
            { text: "Lyon", correct: false },
            { text: "Heauge", correct: false },
            { text: "Zeneva", correct: false }
        ]
    },

    {
        question: "Who is the inventor of Computer ?",
        answer: [
            { text: "Charls Babese", correct: true },
            { text: "Thomas Hill", correct: false },
            { text: "Denis Richee", correct: false },
            { text: "None of Them", correct: false }
        ]
    },

    {
        question: "How many countries are there in EuroZone ?",
        answer: [
            { text: "47", correct: false },
            { text: "17", correct: false },
            { text: "28", correct: false },
            { text: "19", correct: true }
        ]
    },

    {
        question: "Which one is not a kind of Data Structure ?",
        answer: [
            { text: "STACK", correct: false },
            { text: "Queue", correct: false },
            { text: "Node", correct: true },
            { text: "Linked-List", correct: false }
        ]
    },

    {
        question: "Who is the writer of Paradoxical Sajid  ?",
        answer: [
            { text: "Sadat Hossain", correct: false },
            { text: "Humiyn Ahmed", correct: false },
            { text: "Azad bin Rashid", correct: false },
            { text: "Arif Azad", correct: true }
        ]
    }


]