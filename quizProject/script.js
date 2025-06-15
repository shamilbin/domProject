// // DOM Elements

// const startScreen = document.getElementById("start-screen");
// const quizScreen = document.getElementById("quiz-screen");
// const resultScreen = document.getElementById("result-screen");
// const startButton = document.getElementById("start-btn");
// const questionText = document.getElementById("question-text");
// const answersContainer = document.getElementById("answers-container");
// const currentQuestionSpan = document.getElementById("current-question");
// const totalQuestionsSpan = document.getElementById("total-questions");
// const scoreSpan = document.getElementById("score");
// const finalScoreSpan = document.getElementById("final-score");
// const maxScoreSpan = document.getElementById("max-score");
// const resultMessage = document.getElementById("result-message");
// const restartButton = document.getElementById("restart-btn");
// const progressBar = document.getElementById("progress");


// // const quizQuestions = [
// //   {
// //     question: "What is the capital of France?",
// //     answers: [
// //       { text: "London", correct: false },
// //       { text: "Berlin", correct: false },
// //       { text: "Paris", correct: true },
// //       { text: "Madrid", correct: false },
// //     ],
// //   },
// //   {
// //     question: "Which planet is known as the Red Planet?",
// //     answers: [
// //       { text: "Venus", correct: false },
// //       { text: "Mars", correct: true },
// //       { text: "Jupiter", correct: false },
// //       { text: "Saturn", correct: false },
// //     ],
// //   },
// //   {
// //     question: "What is the largest ocean on Earth?",
// //     answers: [
// //       { text: "Atlantic Ocean", correct: false },
// //       { text: "Indian Ocean", correct: false },
// //       { text: "Arctic Ocean", correct: false },
// //       { text: "Pacific Ocean", correct: true },
// //     ],
// //   },
// //   {
// //     question: "Which of these is NOT a programming language?",
// //     answers: [
// //       { text: "Java", correct: false },
// //       { text: "Python", correct: false },
// //       { text: "Banana", correct: true },
// //       { text: "JavaScript", correct: false },
// //     ],
// //   },
// //   {
// //     question: "What is the chemical symbol for gold?",
// //     answers: [
// //       { text: "Go", correct: false },
// //       { text: "Gd", correct: false },
// //       { text: "Au", correct: true },
// //       { text: "Ag", correct: false },
// //     ],
// //   },
// // ];

// const quizQuestions = [
//   { question: "What is the capital of Italy?", answers: [
//       { text: "Rome", correct: true },
//       { text: "Milan", correct: false },
//       { text: "Venice", correct: false },
//       { text: "Naples", correct: false },
//     ]
//   },
//   { question: "Who wrote 'Hamlet'?", answers: [
//       { text: "William Shakespeare", correct: true },
//       { text: "Jane Austen", correct: false },
//       { text: "Mark Twain", correct: false },
//       { text: "Charles Dickens", correct: false },
//     ]
//   },
//   { question: "Which element has atomic number 6?", answers: [
//       { text: "Carbon", correct: true },
//       { text: "Oxygen", correct: false },
//       { text: "Nitrogen", correct: false },
//       { text: "Helium", correct: false },
//     ]
//   },
//   { question: "Which planet has the most moons?", answers: [
//       { text: "Saturn", correct: true },
//       { text: "Mars", correct: false },
//       { text: "Jupiter", correct: false },
//       { text: "Uranus", correct: false },
//     ]
//   },
//   { question: "What is the capital of Japan?", answers: [
//       { text: "Tokyo", correct: true },
//       { text: "Kyoto", correct: false },
//       { text: "Osaka", correct: false },
//       { text: "Hiroshima", correct: false },
//     ]
//   },
//   { question: "What gas do plants release during photosynthesis?", answers: [
//       { text: "Oxygen", correct: true },
//       { text: "Carbon dioxide", correct: false },
//       { text: "Nitrogen", correct: false },
//       { text: "Hydrogen", correct: false },
//     ]
//   },
//   { question: "What is the smallest prime number?", answers: [
//       { text: "2", correct: true },
//       { text: "1", correct: false },
//       { text: "3", correct: false },
//       { text: "0", correct: false },
//     ]
//   },
//   { question: "Which ocean is off the California coast?", answers: [
//       { text: "Pacific Ocean", correct: true },
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Southern Ocean", correct: false },
//     ]
//   },
//   { question: "Who painted the Starry Night?", answers: [
//       { text: "Vincent van Gogh", correct: true },
//       { text: "Claude Monet", correct: false },
//       { text: "Pablo Picasso", correct: false },
//       { text: "Leonardo da Vinci", correct: false },
//     ]
//   },
//   { question: "What is H2O commonly known as?", answers: [
//       { text: "Water", correct: true },
//       { text: "Oxygen", correct: false },
//       { text: "Hydrogen", correct: false },
//       { text: "Salt", correct: false },
//     ]
//   },
//   { question: "What year did the Titanic sink?", answers: [
//       { text: "1912", correct: true },
//       { text: "1905", correct: false },
//       { text: "1920", correct: false },
//       { text: "1918", correct: false },
//     ]
//   },
//   { question: "Which country gifted the Statue of Liberty?", answers: [
//       { text: "France", correct: true },
//       { text: "England", correct: false },
//       { text: "Spain", correct: false },
//       { text: "Germany", correct: false },
//     ]
//   },
//   { question: "What’s the hardest natural substance on Earth?", answers: [
//       { text: "Diamond", correct: true },
//       { text: "Gold", correct: false },
//       { text: "Iron", correct: false },
//       { text: "Silver", correct: false },
//     ]
//   },
//   { question: "Which country is known as the Land of the Rising Sun?", answers: [
//       { text: "Japan", correct: true },
//       { text: "China", correct: false },
//       { text: "Thailand", correct: false },
//       { text: "South Korea", correct: false },
//     ]
//   },
//   { question: "What fruit has its seeds on the outside?", answers: [
//       { text: "Strawberry", correct: true },
//       { text: "Apple", correct: false },
//       { text: "Grape", correct: false },
//       { text: "Banana", correct: false },
//     ]
//   },
//   { question: "Which animal is known as the tallest in the world?", answers: [
//       { text: "Giraffe", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Camel", correct: false },
//       { text: "Horse", correct: false },
//     ]
//   },
//   { question: "How many continents are there on Earth?", answers: [
//       { text: "7", correct: true },
//       { text: "5", correct: false },
//       { text: "6", correct: false },
//       { text: "8", correct: false },
//     ]
//   },
//   { question: "What is the largest planet in our solar system?", answers: [
//       { text: "Jupiter", correct: true },
//       { text: "Saturn", correct: false },
//       { text: "Earth", correct: false },
//       { text: "Mars", correct: false },
//     ]
//   },
//   { question: "Who invented the telephone?", answers: [
//       { text: "Alexander Graham Bell", correct: true },
//       { text: "Thomas Edison", correct: false },
//       { text: "Nikola Tesla", correct: false },
//       { text: "Guglielmo Marconi", correct: false },
//     ]
//   },
//   { question: "Which element is represented by Fe?", answers: [
//       { text: "Iron", correct: true },
//       { text: "Gold", correct: false },
//       { text: "Lead", correct: false },
//       { text: "Zinc", correct: false },
//     ]
//   },
//   { question: "What is Earth's only natural satellite?", answers: [
//       { text: "The Moon", correct: true },
//       { text: "Phobos", correct: false },
//       { text: "Europa", correct: false },
//       { text: "Titan", correct: false },
//     ]
//   },
//   { question: "Which gas is most abundant in Earth's atmosphere?", answers: [
//       { text: "Nitrogen", correct: true },
//       { text: "Oxygen", correct: false },
//       { text: "Carbon Dioxide", correct: false },
//       { text: "Hydrogen", correct: false },
//     ]
//   },
//   { question: "What is the fastest land animal?", answers: [
//       { text: "Cheetah", correct: true },
//       { text: "Lion", correct: false },
//       { text: "Horse", correct: false },
//       { text: "Gazelle", correct: false },
//     ]
//   },
//   { question: "Which instrument has keys, pedals and strings?", answers: [
//       { text: "Piano", correct: true },
//       { text: "Guitar", correct: false },
//       { text: "Violin", correct: false },
//       { text: "Flute", correct: false },
//     ]
//   },
//   { question: "Who developed the theory of relativity?", answers: [
//       { text: "Albert Einstein", correct: true },
//       { text: "Isaac Newton", correct: false },
//       { text: "Stephen Hawking", correct: false },
//       { text: "Galileo Galilei", correct: false },
//     ]
//   },
//   { question: "What’s the boiling point of water at sea level?", answers: [
//       { text: "100°C", correct: true },
//       { text: "90°C", correct: false },
//       { text: "110°C", correct: false },
//       { text: "120°C", correct: false },
//     ]
//   },
//   { question: "Which continent has the most countries?", answers: [
//       { text: "Africa", correct: true },
//       { text: "Asia", correct: false },
//       { text: "Europe", correct: false },
//       { text: "South America", correct: false },
//     ]
//   },
//   { question: "What is the largest mammal?", answers: [
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//       { text: "Hippopotamus", correct: false },
//     ]
//   },
//   { question: "Which planet is known for its rings?", answers: [
//       { text: "Saturn", correct: true },
//       { text: "Mars", correct: false },
//       { text: "Jupiter", correct: false },
//       { text: "Uranus", correct: false },
//     ]
//   },
//   { question: "What currency is used in the UK?", answers: [
//       { text: "Pound Sterling", correct: true },
//       { text: "Euro", correct: false },
//       { text: "Dollar", correct: false },
//       { text: "Yen", correct: false },
//     ]
//   },
//   { question: "Who discovered penicillin?", answers: [
//       { text: "Alexander Fleming", correct: true },
//       { text: "Marie Curie", correct: false },
//       { text: "Louis Pasteur", correct: false },
//       { text: "Gregor Mendel", correct: false },
//     ]
//   },
//   { question: "What is the capital of Canada?", answers: [
//       { text: "Ottawa", correct: true },
//       { text: "Toronto", correct: false },
//       { text: "Vancouver", correct: false },
//       { text: "Montreal", correct: false },
//     ]
//   },
//   { question: "Which is the largest desert?", answers: [
//       { text: "Sahara", correct: true },
//       { text: "Gobi", correct: false },
//       { text: "Kalahari", correct: false },
//       { text: "Atacama", correct: false },
//     ]
//   },
//   { question: "What is the main ingredient in guacamole?", answers: [
//       { text: "Avocado", correct: true },
//       { text: "Tomato", correct: false },
//       { text: "Onion", correct: false },
//       { text: "Pepper", correct: false },
//     ]
//   },
//   { question: "What year did man first land on the Moon?", answers: [
//       { text: "1969", correct: true },
//       { text: "1959", correct: false },
//       { text: "1979", correct: false },
//       { text: "1989", correct: false },
//     ]
//   },
//   { question: "Which metal is liquid at room temperature?", answers: [
//       { text: "Mercury", correct: true },
//       { text: "Gold", correct: false },
//       { text: "Silver", correct: false },
//       { text: "Copper", correct: false },
//     ]
//   },
//   { question: "What’s the tallest mountain on Earth?", answers: [
//       { text: "Mount Everest", correct: true },
//       { text: "K2", correct: false },
//       { text: "Kangchenjunga", correct: false },
//       { text: "Lhotse", correct: false },
//     ]
//   },
//   { question: "Who is known as the father of computers?", answers: [
//       { text: "Charles Babbage", correct: true },
//       { text: "Alan Turing", correct: false },
//       { text: "Bill Gates", correct: false },
//       { text: "Steve Jobs", correct: false },
//     ]
//   },
//   { question: "Which country is home to the kangaroo?", answers: [
//       { text: "Australia", correct: true },
//       { text: "New Zealand", correct: false },
//       { text: "Canada", correct: false },
//       { text: "India", correct: false },
//     ]
//   },
//   { question: "What is 7 x 8?", answers: [
//       { text: "56", correct: true },
//       { text: "48", correct: false },
//       { text: "64", correct: false },
//       { text: "42", correct: false },
//     ]
//   },
//   { question: "What do bees produce?", answers: [
//       { text: "Honey", correct: true },
//       { text: "Milk", correct: false },
//       { text: "Silk", correct: false },
//       { text: "Wax", correct: false },
//     ]
//   },
//   { question: "Which planet is closest to the Sun?", answers: [
//       { text: "Mercury", correct: true },
//       { text: "Venus", correct: false },
//       { text: "Earth", correct: false },
//       { text: "Mars", correct: false },
//     ]
//   },
//   { question: "What is 12 squared?", answers: [
//       { text: "144", correct: true },
//       { text: "154", correct: false },
//       { text: "134", correct: false },
//       { text: "124", correct: false },
//     ]
//   },
//   { question: "Who wrote '1984'?", answers: [
//       { text: "George Orwell", correct: true },
//       { text: "Aldous Huxley", correct: false },
//       { text: "Ray Bradbury", correct: false },
//       { text: "Jules Verne", correct: false },
//     ]
//   },
// ];

// // Quiz variables

// let currentQuestionIndex = 0;
// let score = 0;
// let answerDisabled = false;

// totalQuestionsSpan.textContent = quizQuestions.length;
// maxScoreSpan.textContent = quizQuestions.length;

// startButton.addEventListener("click", startQuiz);
// restartButton.addEventListener("click", restartQuiz);

// // function startQuiz() {
// //   console.log("Quiz Started");

// //   currentQuestionIndex = 0;
// //   score=0
// //   scoreSpan.textContent = score;
// //   startScreen.classList.remove("active");
// //   quizScreen.classList.add("active");

// //   showQuestion();
// // }
// function startQuiz() {
//   console.log("Quiz Started");

//   // Shuffle the quizQuestions array
//   shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);

//   currentQuestionIndex = 0;
//   score = 0;
//   scoreSpan.textContent = score;
//   totalQuestionsSpan.textContent = shuffledQuestions.length;
//   maxScoreSpan.textContent = shuffledQuestions.length;

//   startScreen.classList.remove("active");
//   quizScreen.classList.add("active");

//   showQuestion();
// }


// // function showQuestion() {
// //   answerDisabled = false;
// //   const currentQuestion = quizQuestions[currentQuestionIndex];
// //   currentQuestionSpan.textContent = currentQuestionIndex + 1;
// //   const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
// //   progressBar.style.width = progressPercent + "%";

// //   questionText.textContent = currentQuestion.question;
// //   answersContainer.innerHTML = "";

// //   currentQuestion.answers.forEach((answer) => {
// //     const button = document.createElement("button");
// //     button.textContent = answer.text;
// //     button.classList.add("answer-btn");

// //     //
// //     button.dataset.correct = answer.correct;

// //     button.addEventListener("click", selectAnswer);

// //     answersContainer.appendChild(button);
// //   });
// // }
// function showQuestion() {
//   answerDisabled = false;
//   const currentQuestion = shuffledQuestions[currentQuestionIndex];
//   currentQuestionSpan.textContent = currentQuestionIndex + 1;
//   const progressPercent = (currentQuestionIndex / shuffledQuestions.length) * 100;
//   progressBar.style.width = progressPercent + "%";

//   questionText.textContent = currentQuestion.question;
//   answersContainer.innerHTML = "";

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.textContent = answer.text;
//     button.classList.add("answer-btn");
//     button.dataset.correct = answer.correct;
//     button.addEventListener("click", selectAnswer);
//     answersContainer.appendChild(button);
//   });
// }

// function selectAnswer(event) {
//   if (answerDisabled) return;

//   answerDisabled = true;
//   const selectedButton = event.target;
//   const isCorrect = selectedButton.dataset.correct === "true";

//   Array.from(answersContainer.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     } else if(button===selectedButton) {
//       button.classList.add("incorrect");
//     }
//   });
//   if (isCorrect) {
//     score++;
//     scoreSpan.textContent = score;
//   }
//   setTimeout(() => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizQuestions.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
//   }, 1000);
// }
// function showResult() {
//   quizScreen.classList.remove("active");
//   resultScreen.classList.add("active");

//   finalScoreSpan.textContent = score;
//   const percentage = (score / quizQuestions.length) * 100;
//   if (percentage === 100) {
//     resultMessage.textContent = "Perfect! You're a genius!";
//   } else if (percentage >= 80) {
//     resultMessage.textContent = "Great job! You know your stuff!";
//   } else if (percentage >= 60) {
//     resultMessage.textContent = "Good effort! Keep learning!";
//   } else if (percentage >= 40) {
//     resultMessage.textContent = "Not bad! Try again to improve!";
//   } else {
//     resultMessage.textContent = "Keep studying! You'll get better!";
//   }
// }
// function restartQuiz() {
//   console.log(`Quiz Re-Started`);
//   resultScreen.classList.remove("active")
//   startQuiz()
// }



// DOM Elements


// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Quiz Questions (same as your original array)
const quizQuestions = [
  // Your existing 10 questions...
  {
    question: "Which planet is known as the 'Morning Star'?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Venus", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  },
  {
    question: "What is the largest species of shark?",
    answers: [
      { text: "Great White Shark", correct: false },
      { text: "Whale Shark", correct: true },
      { text: "Tiger Shark", correct: false },
      { text: "Hammerhead Shark", correct: false }
    ]
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: [
      { text: "New Zealand", correct: false },
      { text: "Australia", correct: true },
      { text: "South Africa", correct: false },
      { text: "Argentina", correct: false }
    ]
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Montreal", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'K'?",
    answers: [
      { text: "Potassium", correct: true },
      { text: "Krypton", correct: false },
      { text: "Kryptonite", correct: false },
      { text: "Calcium", correct: false }
    ]
  },
  {
    question: "How many bones are in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "200", correct: false },
      { text: "212", correct: false },
      { text: "198", correct: false }
    ]
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false }
    ]
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      { text: "Sahara Desert", correct: false },
      { text: "Gobi Desert", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Arabian Desert", correct: false }
    ]
  },
  {
    question: "Which country invented tea?",
    answers: [
      { text: "India", correct: false },
      { text: "Japan", correct: false },
      { text: "China", correct: true },
      { text: "England", correct: false }
    ]
  },
  {
    question: "What is the tallest mountain in Africa?",
    answers: [
      { text: "Mount Kenya", correct: false },
      { text: "Mount Kilimanjaro", correct: true },
      { text: "Mount Stanley", correct: false },
      { text: "Mount Meru", correct: false }
    ]
  },
  {
    question: "Which blood type is the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: false },
      { text: "O", correct: true }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which country has the most time zones?",
    answers: [
      { text: "Russia", correct: false },
      { text: "USA", correct: false },
      { text: "France", correct: true },
      { text: "China", correct: false }
    ]
  },
  {
    question: "What is the capital of Iceland?",
    answers: [
      { text: "Oslo", correct: false },
      { text: "Stockholm", correct: false },
      { text: "Reykjavik", correct: true },
      { text: "Helsinki", correct: false }
    ]
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "What is the largest land animal?",
    answers: [
      { text: "Polar Bear", correct: false },
      { text: "Elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false }
    ]
  },
  {
    question: "Which country is the largest by area?",
    answers: [
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "Canada", correct: false },
      { text: "Russia", correct: true }
    ]
  },
  {
    question: "What is the capital of Egypt?",
    answers: [
      { text: "Alexandria", correct: false },
      { text: "Cairo", correct: true },
      { text: "Luxor", correct: false },
      { text: "Giza", correct: false }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false }
    ]
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: false },
      { text: "Nile River", correct: true },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false }
    ]
  },
  {
    question: "Which country is shaped like a boot?",
    answers: [
      { text: "Greece", correct: false },
      { text: "Italy", correct: true },
      { text: "Spain", correct: false },
      { text: "Portugal", correct: false }
    ]
  },
  {
    question: "What is the capital of Brazil?",
    answers: [
      { text: "Rio de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Brasília", correct: true },
      { text: "Salvador", correct: false }
    ]
  },
  {
    question: "Which animal can live the longest without water?",
    answers: [
      { text: "Camel", correct: false },
      { text: "Kangaroo Rat", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "What is the largest bird in the world?",
    answers: [
      { text: "Emu", correct: false },
      { text: "Albatross", correct: false },
      { text: "Ostrich", correct: true },
      { text: "Condor", correct: false }
    ]
  },
  {
    question: "Which country has the most islands?",
    answers: [
      { text: "Philippines", correct: false },
      { text: "Indonesia", correct: false },
      { text: "Sweden", correct: true },
      { text: "Canada", correct: false }
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false }
    ]
  },
  {
    question: "What is the capital of South Korea?",
    answers: [
      { text: "Busan", correct: false },
      { text: "Incheon", correct: false },
      { text: "Seoul", correct: true },
      { text: "Daegu", correct: false }
    ]
  },
  {
    question: "Which language has the most words?",
    answers: [
      { text: "English", correct: true },
      { text: "Mandarin", correct: false },
      { text: "Spanish", correct: false },
      { text: "Arabic", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Gazelle", correct: false },
      { text: "Pronghorn Antelope", correct: false }
    ]
  },
  {
    question: "Which country has the most pyramids?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Mexico", correct: false },
      { text: "Sudan", correct: true },
      { text: "Peru", correct: false }
    ]
  }
];
// Quiz variables
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
let currentQuestions = []; // This will store our 5 random questions

// Initialize with total possible questions (for display purposes)
totalQuestionsSpan.textContent = 5;
maxScoreSpan.textContent = 5;

// Event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  console.log("Quiz Started");
  
  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
  
  // Select 5 random questions
  currentQuestions = [...quizQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  
  // Update UI
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  // Update progress indicators
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / 5) * 100;
  progressBar.style.width = progressPercent + "%";
  
  // Display question
  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";
  
  // Create answer buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;
  
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  
  // Highlight answers
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });
  
  // Update score if correct
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  
  // Move to next question or show results
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 5) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  
  finalScoreSpan.textContent = score;
  const percentage = (score / 5) * 100;
  
  // Set result message based on percentage
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  console.log("Quiz Re-Started");
  resultScreen.classList.remove("active");
  startQuiz();
}