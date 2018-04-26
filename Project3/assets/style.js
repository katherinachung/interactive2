$(window).scroll(function(){
  var top = $(window).scrollTop(),
      scale = top / 900;
  $('.picture').css({
      'transform':'scale('+scale+','+scale+')','-webkit-transform':'scale('+scale+','+scale+')'
  });
});
