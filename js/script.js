var totalTime = 75;
var start = document.querySelector("#startQuiz");
var count = 0;
var totalPoints = 0;
var scoreH1 = document.querySelector("#score");
var lastQ = false;
var submitBtn = document.querySelector("#submit");
var highscore = totalPoints + totalTime;
var highscoreBtn = document.querySelector("#highscores");
var scoresDiv = document.querySelector("#scoresDiv");

highscoreBtn.addEventListener("click", function() {
	document.getElementById("highscoreDisp").innerHTML = "";
	var values = [],
	keys = Object.keys(localStorage),
	i = keys.length;
	// while (i--) {
	values.push(localStorage.getItem(keys[i]));
	// }
	// var hsList = JSON.parse(localStorage.getItem("Highscore")).highscoreArr || [];
	if (scoresDiv.style.display === "none") {
		scoresDiv.style.display = "flex";
		// hsList.map(a => {
			var ele = document.createElement("ul");
			var node = document.createTextNode(values);
			ele.appendChild(node);
			document.getElementById("highscoreDisp").appendChild(ele);
		// });
	} else {
		scoresDiv.style.display = "none";
	}
	console.log("Hello");
});
submitBtn.addEventListener('click', function() {
	if (localStorage.getItem('Highscore') === null) {
		localStorage.setItem(
			'Highscore',
			JSON.stringify({ highscore: 0, highscoreArr: [] })
		);
	}
	var input = document.querySelector('#initials').value;
	var score = totalPoints + totalTime;
	highscore = JSON.parse(localStorage.getItem('Highscore')).highscore;
	var allscores = JSON.parse(localStorage.getItem('Highscore')).highscoreArr;
	if (score > highscore) {
		//set totalPoints to highscore, append to DOM
		highscore = score;
	}
	allscores.push(input + score);
	localStorage.setItem(
		'Highscore',
		JSON.stringify({ highscore, highscoreArr: allscores })
	);
	startAgain();
});

function allScores() {
	var values = [],
	keys = Object.keys(localStorage),
	i = keys.length;
	// while (i--) {
	values.push(localStorage.getItem(keys[i]));
	// }

	if (scoresDiv.style.display === "none") {
		scoresDiv.style.display = "flex";
		// hsList.map(a => {
			var ele = document.createElement("ul");
			var node = document.createTextNode(values);
			ele.appendChild(node);
			document.getElementById("highscoreDisp").appendChild(ele);
		// });
	} else {
		scoresDiv.style.display = "none";
	}
	// return values;
};

submitBtn.addEventListener("click", function() {
	var input = document.querySelector("#initials").value;
	var score = totalPoints + totalTime;
	localStorage.setItem(JSON.stringify(input), JSON.stringify(score));

	// var hsList = JSON.parse(localStorage.getItem("Highscore")).highscoreArr || [];
	allScores();
	// hsList.map(a => {
	// 	var ele = document.createElement("h3");
	// 	var node = document.createTextNode(a);
	// 	ele.appendChild(node);
	// 	document.getElementById("highscoreDisp").appendChild(ele);
	// });
	console.log("highscore", highscore);
	console.log("list", allscores);
	if (score > highscore) {
		highscore = score;
		localStorage.setItem("Highscore", JSON.stringify(highscore));
	}
	allscores.push(input + score);
	console.log(input);

	startAgain();
});

var startOverScreen = document.querySelector("#startOver");
var restartBtn = document.querySelector("#restart");

function startAgain() {
	endQuiz.style.display = "none";
	startOverScreen.style.display = "flex";
}

restartBtn.addEventListener("click", function() {
	totalTime = 75;
	count = 0;
	totalPoints = 0;
	lastQ = false;
	startDiv.style.display = "block";
	quizDiv.style.display = "none";
	endQuiz.style.display = "none";
	startOverScreen.style.display = "none";
});

endGame = () => {
	lastQ = true;
	quizDiv.style.display = "none";
	endQuiz.style.display = "block";
	var score = totalPoints + totalTime;
	scoreH1.textContent = score;
};

answeredRight = () => {
	alert("YOU GOT IT RIGHT!");
	totalPoints += 10;
	highscore += 10;
	console.log(highscore);
	count++;
	if (count === questions.length) {
		endGame();
	} else {
		generateQuestions();
	}
};

answeredWrong = () => {
	alert("YOU GOT IT WRONG!");
	totalPoints -= 5;
	count++;
	totalTime -= 10;
	if (count === questions.length) {
		endGame();
	} else {
		generateQuestions();
	}
};

///end questions
generateQuestions = () => {
	document.getElementById("quizQ").innerHTML = questions[count].title;
	document.getElementById("choiceBtns").innerHTML = "";

	questions[count].choices.map((choice, i) => {
		var btn = document.createElement("button");
		var textnode = document.createTextNode(choice);
		btn.appendChild(textnode);
		document.getElementById("choiceBtns").appendChild(btn);
		btn.setAttribute("data", choice);
		btn.setAttribute("id", `btn${i}`);
		btn.setAttribute("answer", questions[count].answer);

		document.querySelector(`#btn${i}`).addEventListener("click", function(e) {
			console.log(e.target.getAttribute("data"));
			if (e.target.getAttribute("data") === e.target.getAttribute("answer")) {
				answeredRight();
			} else {
				answeredWrong();
			}
		});
	});
};
var timerSpan = document.querySelector("#timer");
var startDiv = document.querySelector("#startDiv");
var quizDiv = document.querySelector("#quizDiv");
var endQuiz = document.querySelector("#endQuiz");

start.addEventListener("click", function() {
	console.log(totalTime);
	startDiv.style.display = "none";
	quizDiv.style.display = "block";
	generateQuestions();

	var interval = setInterval(function() {
		totalTime--;
		timerSpan.innerHTML = totalTime;
		console.log("tick .. " + totalTime);
		if (totalTime === 0 || lastQ) {
			clearInterval(interval);
			console.log("Time's out");
			// alert("Time's out!");
			endGame();
		}
	}, 1000);
});
// document.getElementById("highscoreDisp").empty();
// scoresDiv.empty();
// hsList.empty();
// highscore = JSON.parse(localStorage.getItem("Highscore")).highscore || 0;
// var allscores = JSON.parse(localStorage.getItem("Highscore")).highscoreArr || [];
// localStorage.setItem("Highscore", JSON.stringify({ highscore: highscore, highscoreArr: allscores }));
//remove quiz-start content
//   var quizStart = document.getElementById("quiz-start");
//   console.log(quizStart);
//   quizStart.textContent = "";
//
// present question
// var quiz = document.getElementById("quiz");
// console.log(quiz);
// var choose = document.getElementById("chBtn");
// console.log(choose);
// var answerLine = document.getElementById("answer");
// console.log(answerLine);

//   - present button choices
// function printBtn() {
// 	for (var i = 0; i < choicesButtons.length; i++) {
// 		var btn = document.createElement("button");
// 		var text = document.createTextNode(choicesButtons[i]);
// 		btn.appendChild(text);
// 		choose.appendChild(btn); //clear from loop look at the bookmark activity
// 	}
// }

//   - present questions (for loop through questions.js array)
// for (var i = 0; i < questions.length; i++) {
// 	var question = questions[i].title;
// 	var choicesButtons = questions[i].choices;
// 	var answer = questions[i].answer;
// 	console.log(question);
// 	console.log(choicesButtons);
// 	console.log(answer);

// 	quiz.innerHTML = question;
// 	printBtn();

// 	choicesButtons.addEventListener("click", function() {
// 		var choicesButtons = [];
// 		var userChoise = choose.querySelectorAll(".choicesBtns");
// 		var userAnswer = "";
// 		var ansCorrect = 0;
// 		if (userChoise === answer) {
// 			document.getElementById("answer").textContent = "Correct!";
// 			// answerLine.innerHTML = answer;
// 		} else {
// 			return (document.getElementById("answer").textContent =
// 				"Wrong! It is... " + answer);
// 		}
// 		console.log(document.getElementById("answer"));
// 	});

// 	questions[i].appendChild("style", "text-decoration:underline; color:red;");
// 	// show question + [answers] as buttons
// 	// if answer===true{
// 	//   textContent("Correct!") to div;
// 	//   highscore= highscore+10;
// 	// }
// 	// else {
// 	//   textContent ("Wrong!") to div;
// 	//   highscore= highscore-5;
// 	//   timer= timer-10sec;
// 	// }
// }

//             - All Done - present highscore = highscore+timer
//                 -input "Enter initials" -> localStorage
//                 show Highscore page with a list of local storage initial+highscore
//                 button: back
//                 button: clear highscore
