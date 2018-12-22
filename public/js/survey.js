$(document).ready(function() {
  console.log("survey js is loading")
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $("#member-name").text(data.name);
  });

  $("#submitButton").on("click", function(){
   
    var userPhoto = $("#formImage").val();
    var statement = $("#formQuote").val();

    var userAnswers = [];
    userAnswers.push($("#Q1").val());
    userAnswers.push($("#Q2").val());
    userAnswers.push($("#Q3").val());
    userAnswers.push($("#Q4").val());
    userAnswers.push($("#Q5").val());
    userAnswers.push($("#Q6").val());
    userAnswers.push($("#Q7").val());
    userAnswers.push($("#Q8").val());
    userAnswers.push($("#Q9").val());
    userAnswers.push($("#Q10").val());

    var userData = {
      photo: userPhoto,
      greeting: statement,
      results: userAnswers
    }
    
    console.log("answers array " + JSON.stringify(userData));
  });
});
