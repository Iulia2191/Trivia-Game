let questions = [
    "What planet is known as the 'Red Planet'?",
    "Who painted the Mona Lisa?",
    "Which country is known as the 'Land of the Rising Sun'?",
    "What is the capital of France?",
    "Who wrote 'Romeo and Juliet'?"
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  let choicesArray = [
    ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
    ['China', 'Japan', 'India', 'Australia'],
    ['Berlin', 'Madrid', 'Paris', 'Rome'],
    ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'F. Scott Fitzgerald']
  ];
  
  let correctAnswers = ['Mars', 'Leonardo da Vinci', 'Japan', 'Paris', 'William Shakespeare'];
  
  const questionElement = document.getElementById('question');
  const choicesContainer = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  
  function setupQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      const button = document.getElementById(`choice${i + 1}`);
      button.textContent = choicesArray[currentQuestionIndex][i];
      button.onclick = function() {
        checkAnswer(this);
      };
    }
  }
  
  function checkAnswer(button) {
    const selectedAnswer = button.value;
    if (selectedAnswer === correctAnswers[currentQuestionIndex]) {
      score += 1;
    }
    currentQuestionIndex += 1;
    displayQuestion();
  }
  
  function enableAnswerButtons() {
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.disabled = false;
    }
    resultElement.textContent = `Current Score: ${score} out of ${currentQuestionIndex}`;
  }
  
  // Function to retry the question
  function retry() {
    enableAnswerButtons(); // Enable all answer buttons
    displayQuestion(); // Display the question and choices
  }
  
  function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
      questionElement.innerHTML = questions[currentQuestionIndex];
      for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
        const btn = document.getElementById(`choice${i + 1}`);
        btn.innerHTML = choicesArray[currentQuestionIndex][i];
        btn.value = choicesArray[currentQuestionIndex][i];
      }
      enableAnswerButtons();
    } else {
      const scoreElement = document.getElementById('result');
      scoreElement.innerHTML = `Final Score: ${score} out of ${questions.length}`;
      questionElement.innerHTML = ''; // Remove the question
      choicesContainer.innerHTML = ''; // Remove all buttons
    }
  }
  
  displayQuestion();
  setupQuestion();
  