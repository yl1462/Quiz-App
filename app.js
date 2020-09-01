//questions array for global variable
const questionsArray = [
  //question 0
  {
    questionText: 'A bird in the hand is worth two in the ____.',
    questionChoice: ['Tree', 'Nest', 'Bush', 'Cage'],
    questionAnswer: 'Bush',
  },
  //question 1
  {
    questionText: 'That is/isn’t really my cup of ____.',
    questionChoice: ['Coffee', 'Tea', 'Joe', 'Soup'],
    questionAnswer: 'Tea'
  },
  //question 2
  {
    questionText: 'I’m so excited, I’ll be there with ____ on!',
    questionChoice: ['Bells', 'Goats', 'Shoes', 'Hats'],
    questionAnswer: 'Bells',
  },
  // //question 3
  // {
  //   questionText: 'Looks like the ____ is out of the bag now!',
  //   questionChoice: ['Secret', 'Mystery', 'Snake', 'Cat'],
  //   questionAnswer: 'Cat',
  // },
  // //question 4
  // {
  //   questionText: 'I’m ____ over ____ in love!',
  //   questionChoice: ['Face, Foot', 'Head, Heels', 'Head, Bottom', 'Head, Feet'],
  //   questionAnswer: 'Head, Heels',
  // },
  // //question 5
  // {
  //   questionText: 'I’m as ____ as a clam',
  //   questionChoice: ['Calm', 'Sheltered', 'Happy', 'Collected'],
  //   questionAnswer: 'Happy',
  // },
  // //question 6
  // {
  //   questionText: 'Pardon my ____',
  //   questionChoice: ['French', 'Outburst', 'English', 'Forks'],
  //   questionAnswer: 'French',
  // },
  // //question 7
  // {
  //   questionText: 'I work hard to bring home the ____!',
  //   questionChoice: ['Bread', 'Bacon', 'Cash', 'Milk'],
  //   questionAnswer: 'Bacon',
  // },
  // //question 8
  // {
  //   questionText: 'Are we going to talk about the ____ in the room?',
  //   questionChoice: ['Unicorn', 'Dragon', 'Elephant', 'Mouse'],
  //   questionAnswer: 'Elephant',
  // },
  // //question 9
  // {
  //   questionText: 'Tonight we are going to paint the town ____!',
  //   questionChoice: ['Bright', 'Silver', 'Gold', 'Red'],
  //   questionAnswer: 'Red',
  // },
  // //question 10
  // {
  //   questionText: 'You’re the bee’s ____!',
  //   questionChoice: ['Knees', 'Sting', 'Honey', 'Wing'],
  //   questionAnswer: 'Knees',
  // },

];

let currentQuestionNumber = 0;
let totalNumberOfQuestion = questionsArray.length;
let totalScore = 0

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
  $('main').on('click', '.start-button',function () {
    console.log('Quiz Starting Now!');
    renderQuestion()
  });
}

//Question Section
function renderQuestion(){
  const quizQuestions=`<section class='questions'>
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
  </section>` 
  $('main').html(quizQuestions)
}

function nextQuestion(){
   $('main').on('submit', 'form', function(event) {
      event.preventDefault();
      if (currentQuestionNumber === questionsArray.length - 1) {
        $('form').append(`<h1>Final Page</h1>`);
        //displayFinalPage();
      } else {
        currentQuestionNumber++;
      }
      renderQuestion();
   })   
}

function displayFinalPage(){
  console.log("this is the last page.");
  
  
}

// function checkAnswer(){
//   let userAnswer = $(what they turn in).val();
//   if (userAnswer[0] === questionsArray[0].questionAnswer[0]) {
//     totalScore++;
//     console.log(totalScore)
//   } else {
//     console.log(totalScore)
//   }
// }

// function questionsDisplay(){

// }

// function restartQuiz(){

// }

$(
  startQuiz(), 
  nextQuestion(), 
  //displayFinalPage()
)



/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/
