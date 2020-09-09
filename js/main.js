window.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    function addShadow() {
        if (window.scrollY>= 100) {
           nav.classList.add('shadow-bg')
        }
        else { nav.classList.remove('shadow-bg')

        }
    }
  window.addEventListener('scroll', addShadow)  
});
//kod do zwijania  menu po kliknięciu napisany w Jquerry
$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }
});
// Slick karuzela animal 
$('.animal-carusel').slick({
  //   setting-name: setting-value
 autoplay: true,
 autopllaySpeed: 3800,
 mobileFirst: true,
 centerMode: true,
 centerPadding: '60px',
 slideToShow: 1,
 slideToScroll: 1,
 responsive: [
     {
       breakpoint: 768,
       settings: {
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 992,
       settings: {
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 3,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 1600,
       settings: {
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 4,
         slidesToScroll: 1
       }
     }
   ]
   });
//Slick karuzela trip galery
   $('.carousel-trip').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });