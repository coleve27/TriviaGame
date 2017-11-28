alert("hey there sexy");

var correctAnswers = 0;
var incorrectAnswers = 0;

var count = 30;
var n = 0;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  count--;
  if (count <= -1) {
    clearInterval(counter);
    alert("Time is up!")
    return;
  }

  console.log(count);
  $("#countdown").text(count);

}


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

$(".question").html("<h1>" + questions[n].q + "</h1>");
$(".choice_a").html("<h1>" + questions[n].c[0] + "</h1>");
$(".choice_b").html("<h1>" + questions[n].c[1] + "</h1>");
$(".choice_c").html("<h1>" + questions[n].c[2] + "</h1>");

$(".choice_a").attr("data-answerValue", 0);
$(".choice_b").attr("data-answerValue", 1);
$(".choice_c").attr("data-answerValue", 2);

$(".choices > div").on("click", function() {

  var answerValue = ($(this).attr("data-answerValue"));
  answerValue = parseInt(answerValue);
  console.log(answerValue);

  if (answerValue == questions[0].answer) {
    clearInterval(counter);
    alert("correct guess!");
    correctAnswers++ ;
    n++ ;
  } else {
    clearInterval(counter);
    alert("incorrect guess!")
    incorrectAnswers++ ;
    n++ ;
  }
});
