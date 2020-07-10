allCards = Array.from(document.querySelectorAll(".card"))
modalBtn = document.getElementById("modal-btn")
modal = document.querySelector("#modal")
closeBtn = document.querySelector("#close-btn")
body = document.querySelector("body")
cards = document.querySelectorAll(".card") 
modalContent = document.querySelector("#modal")
newGame = document.querySelector("#newGameButton")
modalQuestionSelection = Array.from(document.querySelectorAll("P"))

const questionsList = [
  // $10 Questions
  {
  question: 'What does HTML stand for?',
  options: [ 'HyperText Texture Mixed Language', 'HyperLoop Transition Material Language', 'HyperText Markup Language', 'None of these'],
  correctAnswer: 'HyperText Markup Language',
  value: 10  
  },
  {
    question: 'What does CSS stand for?',
    options: [ 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
    value: 10  
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: [ '<script>', '<js>', '<scripting>', '<javascript>'],
    correctAnswer: '<script>',
    value: 10  
  },
  {
    question: 'Sass uses what symbol to make something a variable?',
    options: [ '$', '@', '*', '%'],
    correctAnswer: '$',
    value: 10  
  },
  {
    question: 'Which class provides a responsive fixed width container?',
    options: [ '.container', '.container-fixed', '.container-fluid', 'None of these'],
    correctAnswer: '.container-fluid',
    value: 10
  },
  // $50 Questions
  {
  question: 'Who is making the Web standards?',
  options: [ 'Google', 'Mozilla', 'The World Wide Consortium', 'Microsoft'],
  correctAnswer: 'The World Wide Consortium',
  value: 50
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    options: [ 'In the <body> section', 'At the end of the document', 'In the <head> section', 'None of these'],
    correctAnswer: 'In the <head> section',
    value: 50
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: [ '<script href="xxxx.js">', '<script name"xxxx.js">', '<script src="xxxx.js">', 'None of these'],
    correctAnswer: '<script src="xxxx.js">',
    value: 50
  },
  {
    question: 'CSS supports many different formats that can all represent the same color: its name, its hex code, and ...?',
    options: [ 'color selector variable nodes', 'color nodes', 'variables', 'functional notation'],
    correctAnswer: 'functional notation',
    value: 50
  },
  // $100 Questions
  {
  question: 'Choose the correct HTML element for the largest heading:',
  options: [ '<h1>', '<h6>', '<head>', '<heading>'],
  correctAnswer: '<h1>',
  value: 100
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: [ '<script>', '<style>', '<css>', 'None of these'],
    correctAnswer: '<style>',
    value: 100
  },
  {
    question: 'How do you create a function in JavaScript?',
    options: [ 'function:myFunction()', 'function myFunction()', 'function = myFunction()', 'None of these'],
    correctAnswer: 'function myFunction()',
    value: 100
  },
  {
    question: '...can be used almost anywhere in a Sass stylesheet to embed the result of a SassScript expression into a chunk of CSS.',
    options: [ 'Objects', 'Interpolation', 'JavaScript function classes', 'HTML'],
    correctAnswer: 'Interpolation',
    value: 100
  },
  {
    question: 'The Bootstrap grid system is based on how many columns?',
    options: [ '6', '9', '12', '15'],
    correctAnswer: '12',
    value: 100
  },
  // $500 Questions
  {
  question: 'What is the correct HTML element for inserting a line break?',
  options: [ '<break>', '<br>', '<InsertBreak>', '<lb>'],
  correctAnswer: '<br>',
  value: 500
  },
  {
    question: 'Which is the correct CSS syntax?',
    options: [ '{body;color:black;}', 'body {color: black;}', 'body:color=black', '{body:color=black;}'],
    correctAnswer: 'body {color: black;}',
    value: 500
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    options: [ '//This is a comment', '<!--This is a comment-->', '`This is a comment', 'None of these'],
    correctAnswer: '//This is a comment',
    value: 500
  },
  {
    question: 'Universal statements that can be used anywhere in a Sass stylesheet does includes...',
    options: [ 'Variable declarations, like $var: value.', 'Flow control at-rules, like @if and @each.', 'The @error, @warn, and @debug rules.', 'All of these'],
    correctAnswer: 'All of these',
    value: 500
  },
  {
    question: 'Which class is used to create a big box for calling extra attention?',
    options: [ '.jumbotron', '.container', '.bigbox', '.highlight'],
    correctAnswer: '.jumbotron',
    value: 500
  },
  // $1000 Questions
  {
  question: 'What is the correct HTML for adding a background color?',
  options: [ '<body bg="yellow>', '<background>yellow</background>', '<body style="background-color:yellow;">', '<bg style>"yellow"</bg>'],
  correctAnswer: '<body style="background-color:yellow;">',
  value: 1000
  },
  {
  question: 'Which property is used to change the background color?',
  options: [ 'color', 'background-color', 'bgcolor', 'None of these'],
  correctAnswer: 'background-color',
  value: 1000
  },
  {
  question: 'How do you call a function named "myFunction"?',
  options: [ 'call function myFunction()', 'call myFunction()', 'myFunction()', 'None of these'],
  correctAnswer: 'myFunction()',
  value: 1000
  },
  {
  question: 'Mixins...',
  options: [ 'define styles that can be re-used throughout your stylesheet', 'link JavaScript to Sass variables', 'are a special color-mode function in Sass', 'None of these'],
  correctAnswer: 'define styles that can be re-used throughout your stylesheet',
  value: 1000 
  },
  {
    question: 'Which button class is used to create a large button?',
    options: [ '.btn-xl', '.btn-large', '.btn-l', '.btn-lg'],
    correctAnswer: '.btn-lg',
    value: 1000
  },
  {
    question: 'Bootstrap is a ... framework.',
    options: [ 'JavaScript', 'CSS', 'HTML', 'None of these'],
    correctAnswer: 'CSS',
    value: 1000
  }
];

body.addEventListener("click", (event) => {
  targetCardIndex = allCards.indexOf(event.target)
  targetedCard = questionsList[targetCardIndex]
  targetedQuestion = modalQuestionSelection.indexOf(event.target)

  if (event.target === allCards[targetCardIndex]){
    modalQuestionFunction(event)
  }

  if (event.target == closeBtn) { 
    closeModal(event)
  }

  // Reloads the page when the button is clicked on to start a new game
  if (event.target === newGame) {
    window.location.reload();
  }
})

// Event listener for the modal (after modalQuestionFunction populates it)
modal.addEventListener("click", function(event) {
  // If the innerText of the click event target === to the questionsList correct answer at the index of the clicked card -- Correct Answer
  if (event.target.innerText === questionsList[targetCardIndex].correctAnswer) {
    scoreDisplay = document.querySelector("#ScoreDisplay")
    score = score + questionsList[targetCardIndex].value
    scoreDisplay.innerText = `SCORE: $${score}`
    alert("Correct!")
    modal.style.display = "none"
  }
  // If the selected answer is not equal to the correct answer, alert trigger alert and close the modal.
  if (event.target.innerText !== questionsList[targetCardIndex].correctAnswer) {
    alert("Wrong Answer!")
    modal.style.display = "none"
  }
})

// Sets the starting score value to 0  
score = 0

// Creates the questions for when the modal is displayed based on what card was clicked.
modalQuestionFunction = (event) => {
  allCards = Array.from(document.querySelectorAll(".card"))
  targetCardIndex = allCards.indexOf(event.target) // gives index of selected card
  modalOptions = document.querySelectorAll(["#A", "#B", "#C", "#D"])
  fieldset = document.querySelector("#fieldSet")
  modalQuestionSelector = document.querySelector("#question")
  modalQuestions = targetedCard.options
  modalQuestionSelector.innerText = targetedCard.question
  modalOptions[0].innerText = modalQuestions[0]
  modalOptions[1].innerText = modalQuestions[1]
  modalOptions[2].innerText = modalQuestions[2]
  modalOptions[3].innerText = modalQuestions[3]
  modal.style.display = "block"

  // Calls the questionSelection function after the modal contents are populated
  event.target.classList.add("selected")
  event.target.style.pointerEvents = "none"
}

// Close button on the modal to force the modal to close by setting the dislpay back to "none".
closeModal = () => {
  modal.style.display = "none"
}

correctAnswerFunc = (questionsList) => {
  questionArray = []
  for (let i = 0; i < questionsList.length; i++) {
    questionArray.push(questionsList[i].correctAnswer)
  }
  return questionArray
  }