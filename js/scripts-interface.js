var What = require('./../js/scripts.js').whatModule;
var apiKey = require('./../.env').apiKey;
var displayResult = function(data) {
  $('.output').text(data);
};
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    newWhat = new What();
    var userInput = $("#userInput").val();
    var input = userInput.replace(/\s/g, '+');
    console.log(input);
    newWhat.GetWhat(displayResult, input, apiKey);
  });
});
