// navbar stay
$(document).ready(function() {
  var navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
      navbar.addClass("fixed-top");
    } else {
      navbar.removeClass("fixed-top");
    }
  });
});

// pindah halaman 
// button on to halaman baru
// button on to halaman baru
document.getElementById('btn-bt').addEventListener('click', function() {
  window.location.href = 'tiket.html';
});
