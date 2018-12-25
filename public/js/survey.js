$(document).ready(function () {
  console.log("survey js is loading")
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $("#member-name").text(data.name);
  });

  $("#submitButton").on("click", function () {

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

    $.post("api/submit", userData, (function (data) {
      console.log("here is the data you are getting back from the the server " + JSON.stringify(data));
      if (!data) {
        $(".modal-title").text("Oops! Something went wrong.");
        $("#match-name").text("This is a little embarrassing.  Please give it another try.");
        $("#match-photo").attr("src",)
      } else {
        // Show results using modal.  Allow user to save answers
        $("#match-name").text(data.name);
        $("#match-message").text(data.photo);
      }
      // Show the modal with the best match
      $("#myModal").modal("toggle");
    }))


  });

  $('#no-tryAgain').on('click', function(){
    console.log("The try again function fires");
  });
  $('#yes-save').on('click', function(){
    console.log("The save my stuff function fires");
  });
  function storeResults(userData) {
    $.post("/api/submit", {
      userData
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

});
