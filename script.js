document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const questionNumber = document.getElementById("question-number");
  
  const questions = [
    {
      question:
        " Which one of the following also known as Conditional Expression:",
      choices: [
        "Alternative to if-else",
        "Switch statement",
        "If-then-else statement",
        "immediate if",
      ],
      answer: "immediate if",
    },
    {
      question: "What is a database?",
      choices: [
        "Organized collection of information that cannot be accessed, updated, and managed",
        "Collection of data or information without organizing",
        "Organized collection of data or information that can be accessed, updated, and managed",
        "Organized collection of data that cannot be updated",
      ],
      answer:
        "Organized collection of data or information that can be accessed, updated, and managed",
    },
    {
      question:
        "Which one of the following is the correct way for calling the JavaScript code?",
      choices: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
      answer: "Function/Method",
    },
    {
      question: "What is an RDBMS?",
      choices: [
        " Database that stores data elements that are not linked",
        "Database that accesses data elements that are not linked",
        "Database that stores and allows access to data elements that are linked",
        "None of the mentioned",
      ],
      answer:
        "Database that stores and allows access to data elements that are linked",
    },
    {
      question: "What is a relation in RDBMS?",
      choices: ["Key", "Table", "Row", "Data Types"],
      answer: "Table",
    },
    {
      question: "Which of the following systems use RDMS?",
      choices: ["Oracle", "Microsoft SQLServer", "IBM", "All of the mentioned"],
      answer: "All of the mentioned",
    },
    {
      question: " ________ deletes a data item from a database.",
      choices: [
        "nsert(RDBMS)",
        "Drop(RDBMS)",
        "Delete(RDBMS)",
        "None of the mentioned",
      ],
      answer: " Delete(RDBMS)",
    },
    {
      question:
        "Which of the following cannot be used to modify the data in a database?",
      choices: ["delete", "update", "drop", "insert"],
      answer: "drop",
    },
    {
      question: "What is a data structure?",
      choices: [
        " A programming language",
        " A collection of algorithms",
        "A way to store and organize data",
        " A type of computer hardware",
      ],
      answer: "A way to store and organize data",
    },
    {
      question: "Which data structure is used for implementing recursion?",
      choices: ["Stack", "Queue", "List", "Array"],
      answer: "Stack",
    },
    {
      question:
        " Which data structure is based on the Last In First Out (LIFO) principle?",
      choices: ["Tree", "Linked List", "Stack", " Queue"],
      answer: "Stack",
    },
    {
      question: "Which of the following is not the type of queue?",
      choices: [
        "Priority queue",
        "Circular queue",
        " Single ended queue",
        "Ordinary queue",
      ],
      answer: "Single ended queue",
    },
    {
      question: "Which of the following tag is used to embed css in html page?",
      choices: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
      answer: "<style>",
    },
    {
      question:
        "Which of the following CSS selectors are used to specify a group of elements?",
      choices: ["tag", "id", "class", "both class and tag"],
      answer: "class",
    },
    {
      question:
        "Which of the following CSS framework is used to create a responsive design?",
      choices: ["django", "rails", " larawell", "bootstrap"],
      answer: "bootstrap",
    },
    {
      question:
        "Which of the following CSS property is used to make the text bold?",
      choices: [
        "text-decoration: bold",
        "font-weight: bold",
        "font-style: bold",
        "text-align: bold",
      ],
      answer: "font-weight: bold",
    },
    {
      question: "Who is the father of HTML?",
      choices: [
        "Rasmus Lerdorf",
        "Tim Berners-Lee",
        "Brendan Eich",
        "Sergey Brin",
      ],
      answer: "Tim Berners-Lee",
    },
    {
      question:
        "Which of the following tag is used for inserting the largest heading in HTML?",
      choices: ["head", "<h1>", "<h6>", "heading"],
      answer: "<h1>",
    },
    {
      question: "How do we write comments in HTML?",
      choices: ["</…….>", "<!……>", " </……/>", "<…….!>"],
      answer: "<!……>",
    },
    {
      question: "Which HTML tag is used to insert an image?",
      choices: [
        " <img url=”htmllogo.jpg” />",
        "<img alt=”htmllogo.jpg” />",
        "<img src=”htmllogo.jpg” />",
        "<img link=”htmllogo.jpg” />",
      ],
      answer: "<img src=”htmllogo.jpg” />",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    // Display question number
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // Clear previous choices
  
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
  function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
 
  
});
