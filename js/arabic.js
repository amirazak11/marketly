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
    {height: "200px",width: "284px;"},1500,function(){
    $( document ).ready(function() {
      var typed = new Typed('.element', {
        strings: ['First ^1000 sentence.', 'marketly....to shift'],
        typeSpeed: 100
  
      });
  });
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
    label2:"الإنتاج الإعلامي", 
    text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    text2: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    link: "#",
    link2: "#",
    } ,  { icon: "Icon (3).png", 
    label: " Printing  ",
    label2:"طباعة", 
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
      <div class="col-lg-4  col-sm-12 p-2">
      <div class="card ">
  <div class="w-100 ">
  <h3>${cards[i].label2}</h3>
  <p>${cards[i].text2}</p>
  <button class="btn more"> المزيد...</button>
  </div>
  </div>
  </div>
      ` }
let arbcardsContainer = document.getElementById("arbcards-container");
arbcardsContainer.innerHTML =cartona;

let ulServices=document.getElementById("ul-services");

let sercartona = ``;
for (let i = 0; i < cards.length; i++) {
  sercartona += `  
  <li>${cards[i].label2}</li>

`}

ulServices.innerHTML=sercartona;
