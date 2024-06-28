const quizData = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
        question: 'Kura ir šī komanda?',
        options: ['Real Madrid', 'Barcelona', 'Chelsea', 'PSG'],
        answer: 1
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
        question: 'Kura ir šī komanda?',
        options: ['Chelsea', 'Liverpool', 'Arsenal', 'Manchester City'],
        answer: 0
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/120px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Juventus', 'Inter Milan', 'AC Milan', 'Napoli'],
        answer: 0
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/200px-Manchester_United_FC_crest.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Manchester City', 'Manchester United', 'Tottenham Hotspur', 'Leicester City'],
        answer: 1
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
        question: 'Kura ir šī komanda?',
        options: ['Arsenal', 'Chelsea', 'West Ham United', 'Everton'],
        answer: 0
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/190px-Paris_Saint-Germain_F.C..svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Lyon', 'PSG', 'Marseille', 'Monaco'],
        answer: 1
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/186px-FC_Real_Madrid_Logo.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Real Madrid', 'Atletico Madrid', 'Barcelona', 'Sevilla'],
        answer: 0
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/190px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen', 'Bayern Munich'],
        answer: 3
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/200px-FC_Internazionale_Milano_2021.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['AC Milan', 'Inter Milan', 'Napoli', 'Juventus'],
        answer: 1
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/187px-FC_Liverpool.svg.png',
        question: 'Kura ir šī komanda?',
        options: ['Manchester United', 'Liverpool', 'Arsenal', 'Chelsea'],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('team-image').src = currentQuestion.image;
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result').textContent = '';
}

function selectOption(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        document.getElementById('result').textContent = 'Pareizi!';
        score++;
    } else {
        document.getElementById('result').textContent = 'Nepareizi!';
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').innerHTML = `<h2>Jūs ieguvāt ${score} no ${quizData.length} punktiem!</h2>`;
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);

