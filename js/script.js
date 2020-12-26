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
//* wow animation
const classAnim = 'wow animate__animated animate__fadeIn animate__slower';
document.querySelectorAll('').forEach((col) => {
  col.className = classAnim;
});
