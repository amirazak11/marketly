let homeOffest = $("#profile").offset().top;
$(window).scroll(function(){
  let windowScroll = $(window).scrollTop();
if(windowScroll > homeOffest )
{
  $("#nav-bar").css("background-color","black");
} else{
  $("#nav-bar").css("background-color",'transparent');

}
  }); 



  $(".header-content img").animate(
    {height: "250px",width: "250px;"},1500,function(){
      $("#slogn").fadeIn(1000, function () {
        $( document ).ready(function() {
          var typed = new Typed('.element', {
            strings: ['First ^1000 sentence.', 'We Serve To Shift !'],
            typeSpeed: 100
      
          });
      });
      })
  });

   let cards = [
    { icon: "Icon (3).png", 
    label: "Branding ",
    label2:"دعاية", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,   { icon: "Icon (3).png", 
    label: "Marketing  ",
    label2:"تسويق", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " content creation ",
    label2:"كتابة محتوي", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " web designing ",
    label2:"تصميم مواقع", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    }  ,  { icon: "Icon (3).png", 
    label: " SEO  ",
    label2:"تحسين محركات البحث", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " Media production  ",
    label2:"", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " Printing  ",
    label2:"", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " Graphic design  ",
    label2:"تصميم جرافيك", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    }
  ]
  let cartona = ``;
  for (let i = 0; i < cards.length; i++) {
    cartona += `   
      <div class="col-lg-3  col-sm-12 p-2">
      <div class="card ">
  <div class="w-100 ">
  <h3>${cards[i].label}</h3>
  
  <button class="btn more" onclick="window.location.href='feedback.html';">Order Now</button>
  </div>
  </div>
  </div>
      ` }
let engcardsContainer = document.getElementById("engcards-container");
engcardsContainer.innerHTML =cartona;
let ulServices=document.getElementById("ul-services");

let sercartona = ``;
for (let i = 0; i < cards.length; i++) {
  sercartona += `  
  <li>${cards[i].label}</li>

`}
ulServices.innerHTML=sercartona;


