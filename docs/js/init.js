	$(document).ready(function(){
	 $('.button-collapse').sideNav({
		  draggable: true // Choose whether you can drag to open on touch screens
		}
	  );
	  $('.materialboxed').materialbox();
	  $('.modal').modal();
	  $('.collapsible').collapsible();
	  $('.slider').slider({full_width: true});
    });
	jQuery(document).ready(function() {
	  $("#4272017").text(jQuery.timeago("2017-04-27"));
	  $("#4182017").text(jQuery.timeago("2017-04-18"));
	  $("#4132017").text(jQuery.timeago("2017-04-13"));
	});