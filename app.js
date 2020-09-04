let currentQuestionNumber = 0;
let totalNumberOfQuestion = questionsArray.length;
let totalScore = 0;

function startQuiz() {
  $('main').html(
    //Start Section
    `<section class='start-section'>
      <h2>Most people can't get these common figure of speech right, can you?</h2>
      <h3>People say some weird things y'all!</h3>
      <button class='start-button' type='button'>
        <span>We Shall See!</span>
      </button>
      <img src="image/brainTongueStickingOut.png" alt="brain Sticking Out Tongue" class="image">
    </section>`
  );
}

function startQuizHandler() {
  $('main').off().on('click', '.start-button', function () {
    console.log('Quiz Starting Now!');
    renderQuestion();
  });
}

//Question Section
function renderQuestion() {
  let quizQuestions = getQuizMarkup();
  $('main').html(quizQuestions);
}

function getQuizMarkup() {
  let choice1 = questionsArray[currentQuestionNumber].questionChoice[0];
  let choice2 = questionsArray[currentQuestionNumber].questionChoice[1];
  let choice3 = questionsArray[currentQuestionNumber].questionChoice[2];
  let choice4 = questionsArray[currentQuestionNumber].questionChoice[3];
  const quizQuestions = `<section class='questions'>
    ${updateQuestionAndScore()}
    <form>
      <h2>${questionsArray[currentQuestionNumber].questionText}</h2>
      <div class="formDiv">
      <label>
        <input type='radio' name='answer' value='${choice1}'/>${choice1}
      </label>
      <label>
        <input type='radio' name='answer' value='${choice2}'/>${choice2}
      </label>
      <label> 
        <input type='radio' name='answer' value='${choice3}'/>${choice3}
      </label>
      <label>   
        <input type='radio' name='answer' value='${choice4}'/>${choice4}
      </label>
      </div>
      <button class='turnIn' type='submit'>Turn in</button>
    </form>
  </section>`;
  return quizQuestions;
}

function submitQuestion() {
  $('main').on('submit', 'form', function (event) {
    event.preventDefault();
    checkAnswer();
  });
}

function displayFinalPage() {
  $('main').html(
    `<div>
      <div>
        <h2 id="finalPageH2">You got: ${totalScore}/${questionsArray.length} right!</h2>
        <img src="image/brain-exercising.png" alt="exercising brain" class="image">
      </div>
      <div>
        <button type="button" id="restart" >Want to Try Again?</button>
      </div>
    </div>`
  );
}

function checkAnswer() {
  console.log('checkAnswer');
  let userAnswer = $('input[type="radio"]:checked').val();
  if (!userAnswer) {
    alert("No Skipping ahead! Please Choose an Option!");
    return;
  };
  if (userAnswer === questionsArray[currentQuestionNumber].questionAnswer) {
    correctAnswer();
    totalScore++;
  } else {
    wrongAnswer();
  }
}

function correctAnswer() {
  console.log('correctAnswer');
  $('main').html(
    `
      <h3>You're correct!</h3>
      <button type="button" class="nextQuestion">Next</button>
    `
  );
}

function wrongAnswer() {
  console.log('wrongAnswer');
  $('main').html(
    `
      <h3>Nope! It's ${questionsArray[currentQuestionNumber].questionAnswer}.</h3>
      <button type="button" class="nextQuestion">Next</button>
    `
  );
}

function updateQuestionAndScore() {
  return `
    <ul>
      <li>You're on Question: ${currentQuestionNumber + 1}/${questionsArray.length}.</li>
      <li>You got ${totalScore}/${questionsArray.length} right.</li>
    </ul>
    `;
}

function nextQuestion() {
  $('main').on('click', '.nextQuestion', function () {
    console.log("next question");
    console.log(currentQuestionNumber);
    if (currentQuestionNumber === questionsArray.length - 1) {
      displayFinalPage();
    } else {
      currentQuestionNumber++;
      renderQuestion();
    }
  });
}

function restartQuiz() {
  $('main').on('click', '#restart', function () {
    console.log('restartQuiz');
    currentQuestionNumber = 0;
    totalScore = 0;
    startQuiz();
  });
}

$(
  startQuiz(),
  startQuizHandler(),
  submitQuestion(),
  restartQuiz(),
  nextQuestion()
)




