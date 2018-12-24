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
    

    var userData = {
      photo: userPhoto,
      greeting: statement,
      results: userAnswers
      // bestMatch: match
    }
    
    console.log("answers array " + JSON.stringify(userData));

    $.post("api/submit", userData ,(function(data){
    console.log("here is the data you are sending to the server " + userAnswers);
    // Show results using modal.  Allow user to save answers
    $("#match-name").text(data.name);
    $("#match-message").text(data.photo);

    // Show the modal with the best match
    $("#myModal").modal("toggle");
  })) 
      
  
  });

  
  function storeResults(userData) {
    $.post("/api/submit", {
     userData
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

});
