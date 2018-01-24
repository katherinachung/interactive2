$(document).ready(function(){
	  $("#button-20").click(function(){
	    $(this).hide();
	  });
	});

	$(document).ready(function(){
	  $("#button-21").click(function(){
	  $("#content-21").toggle();
	  });
	});


	$(document).ready(function(){
	  $("#button-22").click(function(){
	    $("#button-22").fadeTo("slow",0.15);
	    $("#button-23").fadeTo("slow",0.4);
	    $("#button-24").fadeTo("slow",0.7);
	  });
});

$(document).ready(function(){
  $(".flip").click(function(){
    $("#button-25").slideUp("slow");
  });
});

$(document).ready(function(){
  $("#button-26").click(function(){
    $("#button-26").animate({left:'250px'});
  });
});

$(document).ready(function(){
  $("#button-27").click(function(){
  $("#button-27").animate({left:'600px'});
  });
});

$(document).ready(function()
  {
  $("#button-28").click(function(){
    $("#button-28")
      .slideUp(2000)
      .slideDown(2000);
  });
});

$(document).ready(function(){
  $("#button-29").click(function(){
    var div=$("#button-29");
    div.animate({height:'300px',opacity:'0.4'},"slow");
    div.animate({width:'300px',opacity:'0.8'},"slow");
    div.animate({height:'100px',opacity:'0.4'},"slow");
    div.animate({width:'100px',opacity:'0.8'},"slow");
  });
});

$(document).ready(function(){
  $("#button-30").click(function(){
    var div=$("#button-30");
    div.animate({left:'100px'},"slow");
    div.animate({fontSize:'4em'},"slow");
  });
});

$(document).ready(function(){
  $("#button-31").click(function(){
  $("#content-31").fadeTo(1000,0.4);
  });
});

$(document).ready(function(){
  $("#button-32").click(function(){
    $("#button-34").fadeOut();
    $("#button-33").fadeOut("slow");
    $("#button-32").fadeOut(3000);
	});
});

$(document).ready(function(){
  $("#button-45").click(function(){
  $("#content-45").animate({letterSpacing:"10px"});
  });
});

$(document).ready(function(){
  $("#button-46").click(function(){
  $("#content-46").animate({lineHeight:"3em"});
  });
  $("#button-46").click(function(){
  $("#content-46").animate({lineHeight:"1em"});
  });
	});

	$(document).ready(function(){
	  $("#button-47").click(function(){
	  $("#button-47").animate({width:"50%"});
	  });
		$("#button-47").click(function(){
		$("#button-47").animate({width:"100%"});
		});
	});
	$(document).ready(function(){
  $("#button-49").click(function(){
  $("p").animate({borderTopWidth:"10px"});
  });
  $("#button-49").click(function(){
  $("p").animate({borderTopWidth:"1px"});
  });
});


$(document).ready(function(){
$("#button-50").click(function(){
$("#button-50").animate({Top});
});

});
