const questions = [
    {
        question: "1. What does rizz refer to?",
        options: ["Charisma or charm", "The fizzy foam at the top of a soda", "A sort of raspberry-blueberry candy flavor", "A bad mood"],
        correct: 0
    },
    {
        question: "2. Which of these terms refers to taking a bit of your friend's food?",
        options: ["Fanum tax", "Goodie tax", "snack sneaking", "tspmo🥀"],
        correct: 0
    },
    {
        question: "3. What is mewing?",
        options: ["A tongue exercise", "The sound a cat makes", "A way of flirting", "A bad mood"],
        correct: 0
    },
    {
        question: "4. In which U.S. state are wild, strange, unfortunate things most likely to happen, according to the internet?",
        options: ["Washington", "NYC", "Ohio", "Texas"],
        correct: 2
    },
    {
        question: "5.  Who is your sunshine?",
        options: ["MyBoo", "LeBonBon", "Sigma Squidward", "BanBan"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome-screen").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.classList.add("d-none");

    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    progressText.textContent = `Soal ke ${currentQuestionIndex + 1} dari ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-dark m-1";
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsElement.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");

    if (selectedIndex === questions[currentQuestionIndex].correct) {
        feedbackElement.textContent = "✅ fr";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "❌ nah";
        feedbackElement.style.color = "red";
    }

    nextButton.classList.remove("d-none");
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("result-screen").classList.remove("d-none");
    document.getElementById("score-text").textContent = `ur score: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-screen").classList.add("d-none");
    document.getElementById("welcome-screen").classList.remove("d-none");
}