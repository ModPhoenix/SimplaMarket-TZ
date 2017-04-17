$(document).ready(function($) {

    $( ".nav-item-lvl-1" ).hover(
  		function() {
        if ($(".navbar").width() >= 768) { 
    			$('.sub-menu-lvl-1', this).toggleClass('show fadein');
          if ( $(this).is(':has(.sub-menu-lvl-1)') ) {
            $('.link-lvl-1', this).toggleClass('active');
          }
        }
      });

    // navbar-mobile
    $( ".navbar-mobile" ).click(
      function() {
        if ($(".navbar").width() < 768) {
          $('.main-menu').toggleClass('mobile-show');
        }
      });

    $( ".js-mobile-btn" ).click(
      function() {
        if ($(".navbar").width() < 768) {
          $(this).prev(".link-lvl-1").toggleClass('mobile-active');
          $(this).next(".sub-menu-lvl-1").toggleClass('mobile-show');
        }
      });

});