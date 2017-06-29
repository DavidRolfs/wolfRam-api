

var What = require('./../js/scripts.js').whatModule;

var displayResult = function(data) {
  $('.output').append("<li>" + data + "</li>");
};


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    newWhat = new What();
    // var cityInput = $("#userInput").val();

    newWhat.GetWhat(displayResult);

  });
});
