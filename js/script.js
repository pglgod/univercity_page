

alert("this webpage is only for practice purpose...dont teke seriously... And last this page isn't complete for short screen devices for better experience open this page on laptop or desktop ")





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
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





