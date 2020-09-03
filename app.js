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
    </section>`
  );
  $('main').on('click', '.start-button', function () {
    console.log('Quiz Starting Now!');
    renderQuestion();
  });
}

//Question Section
function renderQuestion() {
  const quizQuestions = `<section class='questions'>
    <form>
      <h2>${questionsArray[currentQuestionNumber].questionText}</h2>
      <label>
        <input type='radio' name='answer'>${questionsArray[currentQuestionNumber].questionChoice[0]}
      </label>
      <label>
        <input type='radio' name='answer'>${questionsArray[currentQuestionNumber].questionChoice[1]}
      </label>
      <label> 
        <input type='radio' name='answer'>${questionsArray[currentQuestionNumber].questionChoice[2]}
      </label>
      <label>   
        <input type='radio' name='answer'>${questionsArray[currentQuestionNumber].questionChoice[3]}
      </label>
      <button class='turnIn' type='submit'>Turn in</button>
    </form>
  </section>`;
  $('main').html(quizQuestions);
}

function nextQuestion() {
  $('main').on('click', 'form', function (event) {
    event.preventDefault();
    if (currentQuestionNumber == questionsArray.length - 1) {
      displayFinalPage();
    } else {
      currentQuestionNumber++;
    }
    renderQuestion();
  });
}

function displayFinalPage() {
  console.log("this is the last page.");
  $('main').html(
    `<div>
      <div>
        <fieldset>
          <legend>You got: ${questionsArray.totalScore}/${questionsArray.length} right!</legend>
        </fieldset>
      </div>

      <div>
        <button type="button" id="restart">Want to Try Again?</button>
      </div>

    </div>`
  );
  let currentQuestionNumber = 0;
  let totalScore = 0;
}

// function checkAnswer() {
//   let userAnswer = $(what they turn in).val();
//   if (userAnswer[0] === questionsArray[0].questionAnswer[0]) {
//     correctAnswer();
//     totalScore++;
//     console.log(totalScore);
//   } else {
//     wrongAnswer();
//     console.log(totalScore);
//   }
// }

function correctAnswer() {
  $('main').html(
    `
      <h3>You're correct!</h3>
      <button type="button">Next</button>
    `
  );
}

function wrongAnswer() {
  $('main').html(
    `
      <h3>Nope! It's ${questionsArray[currentQuestionNumber].questionAnswer}.</h3>
      <button type="button">Next<//button>
    `
  );
}

function restartQuiz() {
  $('main').on('click', '#restart', function() {
    renderQuestion();
  });
}

$(
  startQuiz(),
  nextQuestion(),
  //displayFinalPage()
)



