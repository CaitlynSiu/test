/*Add your JavaScript here*/
var danceScore = 0;
var perfScore = 0;

var questionCount = 0;

var result = document.getElementById("result");
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", DanceTheNightAway);
q1a2.addEventListener("click", PerfectWorld);
q2a1.addEventListener("click", DanceTheNightAway);
q2a2.addEventListener("click", PerfectWorld);
q3a1.addEventListener("click", DanceTheNightAway);
q3a2.addEventListener("click", PerfectWorld)


function DanceTheNightAway(){
  danceScore += 1;
  questionCount += 1;
  console.log("questionCount = " +questionCount + " danceScore = " + danceScore);
  if (questionCount ==3) {
  console.log("The quiz is done");
    updateResult();
}
}



function PerfectWorld(){
  perfScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " perfScore = " + perfScore);
  if (questionCount ==3) {
  console.log("The quiz is done");
    updateResult();
    
}
}

function updateResult(){
  if(perfScore >= 2){
    result.innerHTML = "Perfect World matches you!";
    consle.log("Perfect World Matches you! "); 
  
  } else if (danceScore >= 2 ){
    result.innerHTML = "Dance The Night Away matches you!";
    console.log("Dance The Night Away Matches you!");
    }
}

