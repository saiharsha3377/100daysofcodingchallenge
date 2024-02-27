document.addEventListener('DOMContentLoaded', function() {
    const quizData = [
      {
        question: 'What is the capital of France?',
        answers: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        question: 'What is 2 + 2?',
        answers: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      // Add more questions below
      {
        question: 'What is the capital of Japan?',
        answers: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
        correctAnswer: 'Tokyo'
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
      },
      {
        question: 'What is the chemical symbol for water?',
        answers: ['H2O', 'CO2', 'O2', 'H2SO4'],
        correctAnswer: 'H2O'
      },
      // Add more questions as needed
    ];
  
    const questionElement = document.getElementById('question');
    const answerListElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-btn');
  
    let currentQuestionIndex = 0;
  
    function showQuestion(questionData) {
      questionElement.textContent = questionData.question;
      answerListElement.innerHTML = '';
  
      questionData.answers.forEach(answer => {
        const answerItem = document.createElement('li');
        const answerButton = document.createElement('button');
        answerButton.classList.add('btn');
        answerButton.textContent = answer;
        answerButton.setAttribute('data-answer', answer);
        answerItem.classList.add('option');
        answerItem.appendChild(answerButton);
        answerListElement.appendChild(answerItem);
      });
    }
  
    function checkAnswer(selectedAnswer) {
      const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
      if (selectedAnswer === correctAnswer) {
        alert('Correct!');
        loadNextQuestion();
      } else {
        alert('Incorrect. The correct answer is: ' + correctAnswer);
      }
    }
  
    function loadNextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
      } else {
        alert('You have completed the quiz!');
        // Optionally, reset the quiz or perform another action
      }
    }
  
    // Event delegation for dynamically created elements
    answerListElement.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        checkAnswer(event.target.getAttribute('data-answer'));
      }
    });
  
    // Show next button after last option is clicked
    answerListElement.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        nextButton.style.display = 'block';
      }
    });
  
    nextButton.addEventListener('click', function() {
      nextButton.style.display = 'none';
    });
  
    // Start quiz
    showQuestion(quizData[currentQuestionIndex]);
  });
  