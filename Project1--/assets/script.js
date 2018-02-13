var circles = []; // Array to hold our circle objects
var colors = ['pink', 'purple', 'green','yellow','blue']; // Possible colors for circle obs. Correspond to CSS

// Call our circle creating function when the document is ready
$(document).ready(function() {
  createCircles();
});

// Create the circles
function createCircles() {
  var numCircles = Math.floor((Math.random() * 20) + 6); // Decide a random # of circles to create
  // For each circle...
  for (i = 0; i < numCircles; i++) {
    var colorClass = colors[Math.floor((Math.random() * 5))]; // Pick a color randomly
    var dimension = Math.floor((Math.random() * 100) + 70); // Pick a random radius

    var circ = $('<div></div>'); // Make the div to represent our circle
    circ.addClass('circle').addClass(colorClass).width(dimension).height(dimension); // Add style
    circ.on('mouseenter', function() { moveRandomly(this); }); // Add mouseenter event
    moveRandomly(circ); // Call move randomly to scatter the circles on the page
    circles.push(circ); // Add the circle to our array
  }

  $('body').append(circles); // Append all the circles to the body at once. Reduces DOM manipulation
}

// Place given circle at a somewhat random spot on the page
function moveRandomly(obj) {
  var circle = $(obj);
  circle.css('top', Math.floor((Math.random() * 500) + 70)); // Random top distance
  circle.css('left', Math.floor((Math.random() * 1000) + 30)); // Random left distance
  circle.css('z-index', Math.floor((Math.random() * 10))); // Random z-index for good measure
}

$(document).ready(function(){
    $('circle').click(function(){
        $(this).fadeOut();

    });
});
