

What = function(){
};

var what;

What.prototype.GetWhat = function(displayResult, input){
  $.get("https://api.wolframalpha.com/v2/query?input=" + input + "%3F&format=plaintext&output=JSON&appid=EERKW7-GV9G767XUJ").then(function(response){
    what = JSON.parse(response);
    displayResult(what.queryresult.pods[1].subpods[0].plaintext);
    console.log(what.queryresult.pods[1].subpods[0].plaintext);

  })
  .fail(function(error) {
    $('#output').text("try again");
  });
};

exports.whatModule = What;
