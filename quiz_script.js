 const questions = [
    {
        question: "Яка економічна система передбачає централізоване планування і контроль урядом?",
        answers: [
            { text: "Ринкова економіка", correct: false},
            { text: "Традиційна економіка", correct: false},
            { text: "Командна економіка", correct: true},
            { text: "Змішана економіка", correct: false},
        ]
    },
    {
        question: "Що таке валовий внутрішній продукт (ВВП)?",
        answers: [
            { text: "Сума всіх доходів громадян країни за рік", correct: false},
            { text: "Загальна ринкова вартість товарів та послуг, вироблених у країні за певний період", correct: true},
            { text: "Сума всіх податків, зібраних урядом за рік", correct: false},
            { text: "Кількість робочих місць, створених у країні за рік", correct: false},
        ]

    },
    {
        question: "Що таке інфляція?",
        answers: [
            { text: "Підвищення рівня безробіття", correct: false},
            { text: "Зниження рівня заробітної плати", correct: false},
            { text: "Падіння виробництва товарів і послуг", correct: false},
            { text: "Підвищення загального рівня цін на товари і послуги", correct: true},
        ]

    },
    {
        question: "Яке з наведених визначень найкраще описує поняття \"попит\"?",
        answers: [
            { text: "Кількість товарів, яку продавці готові продати за певну ціну", correct: false},
            { text: "Кількість товарів, яку споживачі готові купити за певну ціну", correct: true},
            { text: "Сума грошей, яку споживачі готові витратити на товари", correct: false},
            { text: "Сума грошей, яку продавці готові витратити на виробництво товарів", correct: false},
        ]

    },
    {
        question: "Що таке дефіцит бюджету?",
        answers: [
            { text: "Сума грошей, яку уряд витрачає на соціальні програми", correct: false},
            { text: "Різниця між доходами та видатками уряду, коли видатки перевищують доходи", correct: true},
            { text: "Кількість грошей, яку країна позичає в міжнародних організацій", correct: false},
            { text: "Сума грошей, яку громадяни витрачають на товари і послуги", correct: false},
        ]

    },
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score - 0;
    nextButton.innerHTML = "Наступне питання";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `Ви надали ${score} правильних відповідей із ${questions.length}.`;
    nextButton.innerHTML = "Спробувати ще раз";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })

 startQuiz();

 //ЕКз-31 081224 reference: https://www.youtube.com/watch?v=PBcqGxrr9g8