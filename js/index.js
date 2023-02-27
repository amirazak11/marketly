let homeOffest = $("#services").offset().top;
$(window).scroll(function(){
  let windowScroll = $(window).scrollTop();
if(windowScroll > homeOffest )
{
  $("#nav-bar").css("background-color","#345d43");
} else{
  $("#nav-bar").css("background-color",'transparent');

}
  }); 
  $(".header-content img").animate({height: "200px",width: "200px"},1500,function(){
    $(".header-content p").fadeIn(1700);;
  });
  $('#t').t({
    beep:true
  })
