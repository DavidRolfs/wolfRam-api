//var What = require('./../js/scripts.js').whatModule;


$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    var input = $("#userInput").val();

    // $.get("http://api.wolframalpha.com/v1/simple?appid=EERKW7-GV9G767XUJ&i=what+is+the+capital+of+oregon%3F")
    //   .then(function(){
        $(".output").html("<img src='" + "http://api.wolframalpha.com/v1/simple?appid=EERKW7-GV9G767XUJ&i=what+is+the+capital+of+oregon%3F" + "'/>");
      // });

  });


});


// '<img src=' + html + '/>'
