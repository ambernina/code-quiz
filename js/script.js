$(document).ready(function() {
  var startQuiz = document.querySelector("#highscores");
  var timerSpan = document.querySelector("#timer");

  var startButton = false;

  // var score = THIS WILL BE TIME LEFT ON TIMER WHEN LAST QUESTION HAS BEEN ANSWERED
  
  startQuiz.addEventListener("click", function() {
      startButton = true;
      timer();
    });
    
    function timer() {
        var counter = 75;
        var countdown = function() {
            if (startButton && counter == -1) {
                clearInterval(counter);
            } else if (startButton) {
                timerSpan.textContent = counter;
                counter--;
            }
        };
        setInterval(countdown, 1000);
        countdown();
    }
    

    
    
});

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
        choices: ["<head></head>", "<body></body>", "<title></title>", "<br>"],
        answer: "<body></body>"
    },
    {
        title: "What tag is used to define a hyperlink, or link to another page?",
        choices: ["<strong>", "<blockquote>", "<em>", "<a>"],
        answer: "<a>"
    },
    {
        title: "CSS stands for ____ Style Sheets.",
        choices: ["Curious", "Concept", "Cascading", "Concave"],
        answer: "Cascading"
    }
];
console.log(questions);



// TUTOR SCRIPTS

// localStorage.setItem("profile1", JSON.stringify(score));
// console.log(JSON.parse(localStorage.getItem("profile1")));

// $("#clear").on("click", function() {
//     localStorage.clear("profile1");
//     console.log(JSON.parse(localStorage.getItem("profile1")));
// });

// var score = { // SCORE WILL BE TIME LEFT ON TIMER
//     q1: false, // BUT THE QUIZ SHOULD TELL YOU WHETHER YOU SELECTED THE RIGHT QUESTIONS AS YOU GO THROUGH IT, MAYBE CHANGING BUTTON COLOR?
//     q2: true,
//     q3: false,
//     name: "amber",
//     score: 20
// };

// function counter() {
    //     var i = 0;
  //     var funcNameHere = function(){
  //         if (i == 100) clearInterval(this);
  //         else console.log( 'Currently at ' + (i++) );
  //     };
  //     // This block will be executed 100 times.
  //     setInterval(funcNameHere, 7000);
  //     funcNameHere();
  // } // End

  // function timer(){
  //     setInterval(addTime, 1000)
  // }

  // function addTime(){
  //     $("#timer").html(`<h1>YOU HAVE ${counter} SECONDS LEFT!</h1>`)
  //     counter -= 1
  //     console.log(counter)
  //     if(counter<=0){
  //         alert('YOU LOSE!')
  //     }
  // }

// OTHER SCRIPTS I DON'T WANT TO USE
    
// var quizContainer = document.getElementById("quiz");
// var resultsContainer = document.getElementById("results");
// var submitButton = document.getElementById("submit");

// // display quiz right away GET RID OF THIS

// var previousButton = document.getElementById("previous");
// var nextButton = document.getElementById("next");
// var slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// // on submit, show results
// submitButton.addEventListener("click", showResults);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);

// (function() {
//   var myQuestions = [
//     {
//       question: "Commonly used data types DO NOT include:",
//       answers: {
//         a: "Strings",
//         b: "booleans",
//         c: "alerts",
//         d: "numbers"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question:
//         "The condition in an if / else statement is enclosed within ____.",
//       answers: {
//         a: "quotes",
//         b: "braces {}",
//         c: "parentheses ()",
//         d: "brackets []"
//       },
//       correctAnswer: "c"
//     }
//     //   {
//     //     question: "Where is Waldo really?",
//     //     answers: {
//     //       a: "Antarctica",
//     //       b: "Exploring the Pacific Ocean",
//     //       c: "Sitting in a tree",
//     //       d: "Minding his own business, so stop asking"
//     //     },
//     //     correctAnswer: "d"
//     //   }
//   ];

//   function buildQuiz() {
//     // we'll need a place to store the HTML output
//     var output = [];

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // we'll want to store the list of answer choices
//       var answers = [];

//       // and for each available answer...
//       for (letter in currentQuestion.answers) {
//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <button type="button" class="btn btn-primary" id="[i]" name="question${questionNumber}" value="${letter}">
//              ${letter} :
//              ${currentQuestion.answers[letter]}
//             </button>
//              </label>`
//         );
//         console.log(currentQuestion);
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="slide">
//              <div class="question"> ${currentQuestion.question} </div>
//              <div class="answers"> ${answers.join("")} </div>
//            </div>`
//       );
//     });
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join("");
//   }

//   function showResults() {
//     // gather answer containers from our quiz
//     var answerContainers = quizContainer.querySelectorAll(".answers");

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//       // find selected answer
//       var answerContainer = answerContainers[questionNumber];
//       var selector = `input[name=question${questionNumber}]:checked`;
//       var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if (userAnswer === currentQuestion.correctAnswer) {
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = "lightgreen";
//       } else {
//         // if answer is wrong or blank
//         // color the answers red
//         answerContainers[questionNumber].style.color = "red";
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   function showSlide(n) {
//     slides[currentSlide].classList.remove("active-slide");
//     slides[n].classList.add("active-slide");
//     currentSlide = n;

//     if (currentSlide === 0) {
//       previousButton.style.display = "none";
//     } else {
//       previousButton.style.display = "inline-block";
//     }

//     if (currentSlide === slides.length - 1) {
//       nextButton.style.display = "none";
//       submitButton.style.display = "inline-block";
//     } else {
//       nextButton.style.display = "inline-block";
//       submitButton.style.display = "none";
//     }
//   }

//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }
// });
// buildQuiz();

// showSlide(0);

// showResults();

// // TIMER

// //set minutes
// var mins = 2;

// //calculate the seconds
// var secs = 60;

// //countdown function is evoked when page is loaded
// function countdown() {
//   setTimeout("Decrement()", 60);
// }

// //Decrement function decrement the value.
// function Decrement() {
//   if (document.getElementById) {
//     // minutes = document.getElementById("minutes");
//     seconds = document.getElementById("seconds");

//     //if less than a minute remaining
//     //Display only seconds value.
//     if (seconds < 59) {
//       seconds.value = secs;
//     }

//     //Display both minutes and seconds
//     //getminutes and getseconds is used to
//     //get minutes and seconds
//     else {
//       // minutes.value = getminutes();
//       seconds.value = getseconds();
//     }
//     //when less than a minute remaining
//     //colour of the minutes and seconds
//     //changes to red
//     if (mins < 1) {
//       minutes.style.color = "red";
//       seconds.style.color = "red";
//     }
//     //if seconds becomes zero,
//     //then page alert time up
//     if (mins < 0) {
//       alert("time up");
//       minutes.value = 0;
//       seconds.value = 0;
//     }
//     //if seconds > 0 then seconds is decremented
//     else {
//       secs--;
//       setTimeout("Decrement()", 1000);
//     }
//   }
// }

// // function getminutes() {
// //     //minutes is seconds divided by 60, rounded down
// //     mins = Math.floor(secs / 60);
// //     return mins;
// // }

// function getseconds() {
//   //take minutes remaining (as seconds) away
//   //from total seconds remaining
//   return secs - Math.round(mins * 60);
// }
