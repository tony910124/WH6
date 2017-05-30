$(document).ready(function(){
  $(".header_burger .burger_menu").click(function() {
    var $ul = $(".menu");
    if( $ul.hasClass("menu-click") ){
      $ul.removeClass("menu-click");
      $ul.slideUp();
      console.log(2222);
    }
    else{
      $ul.addClass("menu-click");
      $ul.slideDown();
      return false;
      console.log(2222);
    }
    console.log(2222);
  });
});
