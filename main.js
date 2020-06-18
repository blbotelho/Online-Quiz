
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "David") {
		correct++;
}
	if (question2 == "Cactus-Sleep") {
		correct++;
}
	if (question3 == "Shark") {
		correct++;
	}

	var pictures = ["Congratulations!.gif", "Alright....gif", "Terrible.gif"];
	var messages = ["EXCELLENT WORK!!!", "You exude medioctrity.", "You fool!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
    console.log(pictures[score])
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	function myFunction() {
        document.getElementById("reset").innerHTML = "The form was reset";
      }