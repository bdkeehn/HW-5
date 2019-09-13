console.log("Is this working?");

var number = 101;
var intervalId;
var incorrect=0;
var correct=0;
// var unanswered;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#time").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time's Up!");
    }
}
function stop() {
    clearInterval(intervalId);
}
run();

console.log("correct: " + correct)
$("#correct").html(correct);
$("#incorrect").html(incorrect)
var questions=[
    {
    question: "What color is the grass",
    choices: ["green","blue","red"],
    answer:"green",
    name:"q1"
  },
  {
    question: "What is Dave's last name",
    choices: ["Meneses","Morris","Jerk"],
    answer:"Meneses",
    name:"q2"
  },
  {
    question: "What is color is the sky?",
    choices: ["Blue","Green","Yellow"],
    answer:"Blue",
    name:"q3"
  },
]

function renderQuestions(){
    for(var i = 0; i < questions.length; i++){
        console.log(i)
        // creating an element with jquery
        var newDiv = $("<p>");

        // setting the text of first question
        newDiv.text(questions[i].question);

        
        //render the choices
        for (var j =0; j < questions[i].choices.length; j++){
            newDiv.append("<input type='radio' name='" + questions[i].name + "' value='" + questions[i].choices[j] +"'>" + questions[i].choices[j] )
    
        }

        $("#questions").append(newDiv)
        // questions[i].choices.forEach(function(item){
        //     var newP = $("<input>");
        //     newP.attr("type","radio");
        //     newP.attr("value", item);
        //     newP.text(item)
        //     $("#questions").append(newP);
        // })
    }

}
renderQuestions();













//on click event for done button to check answers.
$("#done").on("click", function(){
    

console.log("It works")
})
// I'm still looking for ways to connect the questions to the done button. 