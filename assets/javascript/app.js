var questions = [
  // question 1
  {
    "q": "How big is the sun?",
    "c": ["432,288 miles", "553,211 miles", "732.983 miles"],
    "answer": 0
  },
  // question 2
  {
    "q": "How long would it take a space shuttle (going 5 miles per second) to travel a light year?",
    "c": ["37,200 years", "20,320 years", "60,730 years"],
    "answer": 0
  }

];

var correctAnswers = 0;
var incorrectAnswers = 0;
var count = 30;
var n = 0;

$(".stats").hide();
$(".right").hide();
$(".wrong").hide();
$(".restart").hide();

var counter = setInterval(timer, 1000);

choiceData();
shiftQuestion();
setHandler();

$(".restart").on("click", restart);

function setHandler() {
  $(".choices > div").on("click", function() {
    var answerValue = ($(this).attr("data-answerValue"));
    answerValue = parseInt(answerValue);

    if (answerValue == questions[n].answer) {
      $(".choices > div").off("click");
      $(".right").show();
      correctAnswers++;
      clearInterval(counter);
      setTimeout(nextQuestion, 1000);
    } else {
      $(".choices > div").off("click");
      $(".wrong").show();
      incorrectAnswers++;
      clearInterval(counter);
      setTimeout(nextQuestion, 1000);
    }
  });
}

function endGame() {
  $(".choices > div").off("click");
  clearInterval(counter);
  $(".endGame").text("Game Over");
  $(".correct").text("Right Answers: " + correctAnswers);
  $(".incorrect").text("Wrong Answers: " + incorrectAnswers);
  $(".stats").show();
  $(".restart").show();
}

function nextQuestion() {
  n++;
  $(".right").hide();
  $(".wrong").hide();
  if (questions.length === n) {
    endGame();
    return;
  }
  count = 30;
  counter = setInterval(timer, 1000);
  shiftQuestion();
  setHandler();
}

function timer() {
  count--;
  if (count <= -1) {
    alert("Time is up!");
    nextQuestion();
    return;
  }

  $("#countdown").text(count);
}

function choiceData() {
  $(".choice_a").attr("data-answerValue", 0);
  $(".choice_b").attr("data-answerValue", 1);
  $(".choice_c").attr("data-answerValue", 2);
}

function shiftQuestion() {
  $(".question").html("<h1>" + questions[n].q + "</h1>");
  $(".choice_a").html("<h1>" + questions[n].c[0] + "</h1>");
  $(".choice_b").html("<h1>" + questions[n].c[1] + "</h1>");
  $(".choice_c").html("<h1>" + questions[n].c[2] + "</h1>");
}

function restart() {
  console.log("restart called");
  correctAnswers = 0;
  incorrectAnswers = 0;
  n = 0;
  shiftQuestion();
  setHandler();
  count = 30;
  counter = setInterval(timer, 1000);
  $(".stats").hide();
  $(".right").hide();
  $(".wrong").hide();
  $(".restart").hide();
}
