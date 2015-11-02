(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

     var options = [ 
      {selector: '#projects', offset: 400, callback: 'Materialize.fadeInImage("#projects")' } 
     ]; 
     Materialize.scrollFire(options); 

    $('.tabs').tabs();
  }); // end of document ready
})(jQuery); // end of jQuery name space