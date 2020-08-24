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
