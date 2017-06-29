

var What = require('./../js/scripts.js').whatModule;

var displayResult = function(data) {
  $('.output').append("<li>" + data + "</li>");
};


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    newWhat = new What();
    var userInput = $("#userInput").val();
    var input = userInput.replace(/\s/g, '+')
    console.log(input)

    newWhat.GetWhat(displayResult, input);

  });
});
