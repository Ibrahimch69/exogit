class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
let questions = [
    new Question("Pour combien d'euros tu fais le plein ?!", ["Gratuit ça", "Une bonne centaine je dirais", "Qui a la reponse meme ?", "Je suis pas une balance."], "Gratuit ça"),
    new Question("Es-ce que tu PEP'S pour sauver la daronne ?", ["azy la daronne à fait son temp","azy une fois aux chalet", "on lfaisait deja avant donc tranquil", "je suis toujours pas une poukav"], "on lfaisait deja avant donc tranquil"),
    new Question("Combien de round pour te metre k.o ?", ["1 seul uesh", "beaucoup je crois", "aux nom je vais rien dire", "s/o le fc zoulette on fuit"], "aux nom je vais rien dire"),
    new Question("Es-ce que t'a deja été ? (filosof ici)", ["termine ta phrase sinon bagarre","Et toi, sue dit-tu de la causalité?", "oui, je crois.", "ouga bouga"], "ouga bouga")
];
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0; 
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}
const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        endQuizHTML = `
            <h1 class="justify-content-center text-center font pt-2 pb-4>Quiz terminé !</h1>
            <h3 class="justify-content-center text-center font pt-2 pb-4> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
            this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;
        guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
        }
    }
    for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
        }
    },
};
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    } 
}
let quiz = new Quiz(questions);
quizApp();