// HAMBURGER
// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

const currentYear = new Date().getFullYear();
document.getElementById('Copyright').innerHTML = `&copy; Copyright ${currentYear}`;

// Darkmode toggle
$('#lightMode').on('click', function(){
  $(this).find('i').toggleClass('bi-moon-stars-fill bi-cloud-sun-fill');
  $('body').toggleClass('dark');
  if ($('body').hasClass('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
    $('#lightMode').find('i').addClass('bi-cloud-sun-fill').removeClass('bi-moon-stars-fill');
  }
});

$(document).ready(function(){
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
  }

  if(localStorage.theme === 'dark'){
    $('#lightMode').find('i').addClass('bi-moon-stars-fill');
    $('body').addClass('dark');
  } else if(localStorage.theme === 'light') {
    $('#lightMode').find('i').addClass('bi-cloud-sun-fill');
    $('body').removeClass('dark');
  }
});
