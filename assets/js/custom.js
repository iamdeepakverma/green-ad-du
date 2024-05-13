  /*--------------------- Copyright (c) 2024 -----------------------
[Master Javascript]
Project: Project Name
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function ($) {
      var $this = $(window);
  

      // Fixed Header
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('.all_div_green').addClass('fixed');
        }
        else {
            $('.all_div_green').removeClass('fixed');
        }
      });

      // Menu toggle
      $('.menu_open').on('click',function () {
        $('.green_menu_nav ul').toggleClass('clicked');
      });
      
    });
  })();
  