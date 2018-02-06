


$(document).ready(function(){
var nouns = ["piggy", "ghost", "donkey", "ass", "shit", "pumpkin", "buttocks", "penis", "peewee", "dingle", "bulge", "lump", "butt", "dildo", "knob", "bum", "turd", "prick", "rod", "chode", "wiener", "jizz", "panty", "dong", "vacuum", "general", "gremlin", "pixie", "spasm", "fiend", "fungus", "tunnel", "cannon", "corporal", "raider", "demon", "buccaneer", "tyrant", "juggler", "magician", "fiddle", "stripper"];
var word;
var adjective = ["shitty", "mad cow diseased", "moist", "lousy", "bulbous", "trashy", "dumbass","chuncky", "nerdy", "bearded", "crusty", "dotarded", "brainless", "atomic", "rusty", "cringey", "foolish", "lumpy", "witless", "drunk"]
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
