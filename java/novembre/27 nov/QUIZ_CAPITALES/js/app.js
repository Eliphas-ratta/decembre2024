const questions = [
    {
        country: 'France',
        correct: 'Paris',
        options: ['Lyon', 'Marseille', 'Nice']
    },
    {
        country: 'Italie',
        correct: 'Rome',
        options: ['Venise', 'Florence', 'Milan']
    },
    {
        country: 'Espagne',
        correct: 'Madrid',
        options: ['Barcelone', 'Séville', 'Valence']
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const responseMessage = document.getElementById('response-message');
const responseTable = document.querySelector('#response-table tbody');
const scoreContainer = document.getElementById('score-container');
const finalScore = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    responseMessage.textContent = '';
    responseTable.innerHTML = '';
    scoreContainer.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = `Quelle est la capitale de ${question.country}?`;

    const answers = [question.correct, ...question.options];
    answers.sort(() => Math.random() - 0.5); // Mélange les réponses

    answersContainer.innerHTML = ''; // Réinitialise les réponses
    responseMessage.textContent = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(button, answer, question.correct));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(button, selected, correct) {
    const buttons = answersContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true); // Désactive tous les boutons

    if (selected === correct) {
        button.classList.add('correct');
        responseMessage.textContent = 'Bonne réponse!';
        responseMessage.style.color = 'green';
        score++;
    } else {
        button.classList.add('wrong');
        responseMessage.textContent = 'Mauvaise réponse!';
        responseMessage.style.color = 'red';
        // Marquer la bonne réponse
        buttons.forEach(btn => {
            if (btn.textContent === correct) {
                btn.classList.add('correct');
            }
        });
    }

    // Ajouter au tableau des réponses
    addResponseToTable(questions[currentQuestionIndex].country, selected, selected === correct ? 'Oui' : 'Non');

    // Passer à la question suivante après 1 seconde
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endQuiz();
        }
    }, 2000);
}

function addResponseToTable(country, answer, isCorrect) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${country}</td>
        <td>${answer}</td>
        <td>${isCorrect}</td>
    `;
    responseTable.appendChild(row);
}

function endQuiz() {
    questionText.textContent = '';
    answersContainer.innerHTML = '';
    scoreContainer.classList.remove('hidden');
    finalScore.textContent = `Votre score final est : ${score}/${questions.length}`;
}

restartBtn.addEventListener('click', startQuiz);

startQuiz();
