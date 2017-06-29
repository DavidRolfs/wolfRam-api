What = function(){
};

var what;

What.prototype.GetWhat = function(displayResult, input, apiKey){
  $.get("https://api.wolframalpha.com/v2/query?input=" + input + "%3F&format=plaintext&output=JSON&appid=" + apiKey ).then(function(response){
    what = JSON.parse(response);
    displayResult(what.queryresult.pods[1].subpods[0].plaintext);
  })
  .fail(function(error) {
    $('#output').text("try again");
  });
};

exports.whatModule = What;
