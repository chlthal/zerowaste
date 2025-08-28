$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".mobile_nav").toggleClass("active");
        $(".nav-overlay").toggleClass("active");
        $(".mobile_nav .submenu").slideUp();
    });
  
    $(".nav-overlay").click(function() {
        $(".mobile_nav").removeClass("active");
        $(this).removeClass("active");
        $(".mobile_nav .submenu").slideUp();
    });
  
    $(".mobile_nav .menu_item").click(function(e) {
        e.preventDefault();
        let submenu = $(this).next(".submenu");
        $(".mobile_nav .submenu").not(submenu).slideUp();
        submenu.slideToggle();
    });
  });