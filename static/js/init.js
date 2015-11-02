(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

     var options = [ 
      {selector: '#projects', offset: 400, callback: '$("#projects").css("visibility", "visible");Materialize.fadeInImage("#projects")' },
      {selector: '#exp-list', offset: 400, callback: '$("#exp-list").css("visibility","visible").hide().fadeIn("slow");Materialize.showStaggeredList("#exp-list")' } 
     ]; 
     Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space