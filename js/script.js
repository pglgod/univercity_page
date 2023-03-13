
 alert("this webpage is made only for practice purpose...dont teke it seriously... and  this page is not sutaible for short screen devices, for better experience open this page on laptop or desktop || ")

// loader
 
function show_loader() {
  setInterval(
    function () {
      document.getElementById("loader").style.display = "none";
    },
    2000
  )
}

// burger
var burger = document.getElementById('burger');
var burgerLable  = document.getElementById('burger_lable')
var hamburgerMenu = document.getElementById('hamburger-manu');
var screen_size = window.matchMedia("(max-width: 900px;)")

function showHamburgerMenu(){
  hamburgerMenu.style.top = "70px";

}
function hideHamburgerMenu() {
  hamburgerMenu.style.top = "-100%"

}






// dropdown
  var down_symbol = document.getElementById('down_pointing')
  var dropdown_1 = document.getElementById('dropdown_1')
  function show_dropdown() {
    down_symbol.innerHTML = '&#9650;'
    dropdown_1.style.display = "unset"
  }
  function hide_dropdown() {
    down_symbol.innerHTML = '&#x25BC;'
    dropdown_1.style.display = 'none'
  }

// open map
var win
function open_map() {
   win = window.open("https://goo.gl/maps/BxkGDj1LNn6XL8wi8")
}



// Swiper
// var swiper = new Swiper(".mySwiper", {
//  slidesPerView: 1,
//  grabCursor: true,
//  loop: true,
//  pagination: {
//    el: ".swiper-pagination",
    // clickable: true,
  // },
  // navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  // },
// });





