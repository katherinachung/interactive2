


$(document).ready(function(){
var nouns = ["a", "ghost", "donkey", "b", "apple", "pumpkin", "buttocks", "ckae", "broing", "yes", "no", "lamp", "jump", "I", "break", "sleep", "ask", "boat", "rabbit"];
var word;
var adjective = ["s", "mad", "moment", "loud", "bullon", "treasure", "dumb","chuck", "nerdy", "bread", "crash", "dotor", "brain", "atomc", "rust", "cry", "food", "laugh", "witness", "drunk"]
function random(list) {
  word = Math.floor((Math.random() * list.length) + 0);
  word = list[word];
  console.log(word);
}
$("#button").click(function(){
random(adjective);
  var x = document.getElementById("button1").innerHTML=word;
  random(nouns);
  var x = document.getElementById("button2").innerHTML=word;
  random(nouns);
  var x = document.getElementById("button3").innerHTML=word;
  var x = document.getElementById("button4").innerHTML="";
})

})
