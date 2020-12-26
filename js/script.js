// scroll darken
$(window).scroll(function (e) {
  console.log(e);
  if (scrollY > 300) {
    $('#mainNav').addClass('isScrolled');
  } else {
    $('#mainNav').removeClass('isScrolled');
  }
});
innerWidth >= 576
  ? (document.querySelector('.show').style.background =
      'transparent !important')
  : false;

$('body').scrollspy({ target: '#mainNav' });
//* Smooth Scrolling
// $('#mainNav a').on('click', function (event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800,
//       function () {
//         window.location.hash = hash;
//       }
//     );
//   }
// });
