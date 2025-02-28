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

$(window).scroll(function () {
  const wScroll = $(this).scrollTop();

  // PARALLAX ABOUT
  if (wScroll > $('.about-section').offset().top - 280) {
    $('.about-me', function () {
      setTimeout(function () {
        $('.about-me').addClass('about-me-show');
      }, 120);
    });

    $('.skills-title', function () {
      setTimeout(function () {
        $('.skills-title').addClass('skills-title-show');
      }, 120);
    });

    // First
    $(".skills-icon-first a").each(function (index) {
      setTimeout(() => {
        $(this).addClass("skills-icon-first-show");
      }, index * 200);
    });

    // Hitung total durasi First
    const firstDuration = $(".skills-icon-first a").length * 200 + 200;

    // Second (menunggu First selesai)
    setTimeout(() => {
      $(".skills-icon-second a").each(function (index) {
        setTimeout(() => {
          $(this).addClass("skills-icon-second-show");
        }, index * 200);
      });
    }, firstDuration);

    // Hitung total durasi Second
    const secondDuration = firstDuration + $(".skills-icon-second a").length * 200 + 200;

    // Third (menunggu Second selesai)
    setTimeout(() => {
      $(".skills-icon-third a").each(function (index) {
        setTimeout(() => {
          $(this).addClass("skills-icon-third-show");
        }, index * 200);
      });
    }, secondDuration);

    // Hitung total durasi Third
    const thirdDuration = secondDuration + $(".skills-icon-third a").length * 200 + 200;

    // Fourth (menunggu Third selesai)
    setTimeout(() => {
      $(".skills-icon-fourth a").each(function (index) {
        setTimeout(() => {
          $(this).addClass("skills-icon-fourth-show");
        }, index * 200);
      });
    }, thirdDuration);
  }

  // PARALLAX CERTIFICATES
  if (wScroll > $(".certificates-section").offset().top - 360) {
    setTimeout(() => $(".certificates-title").addClass("certificates-title-show"), 120);

    // Hitung total waktu animasi untuk setiap .cover-certificate
    $(".cover-certificate").each(function (index) {
      setTimeout(() => {
        $(this).addClass("certificates-image-show");
      }, index * 400); // Setiap elemen muncul dengan jeda 400ms
    });
  }

  // PARALLAX PROJECT
  if (wScroll > $(".project-section").offset().top - 480) {
    setTimeout(() => $(".project-title").addClass("project-title-show"), 120);

    // Hitung total waktu animasi untuk setiap .cover-certificate
    $(".cover-project").each(function (index) {
      setTimeout(() => {
        $(this).addClass("project-image-show");
      }, index * 400); // Setiap elemen muncul dengan jeda 400ms
    });
  }

  // PARALLAX BLOG
  if (wScroll > $(".blog-section").offset().top - 560) {
    setTimeout(() => $(".blog-title").addClass("blog-title-show"), 120);

    // Hitung total waktu animasi untuk setiap .cover-certificate
    $(".cover-blog").each(function (index) {
      setTimeout(() => {
        $(this).addClass("blog-image-show");
      }, index * 400); // Setiap elemen muncul dengan jeda 400ms
    });
  }

  // PARALLAX CONTACT
  if (wScroll > $(".contact-section").offset().top - 560) {
    setTimeout(() => $(".contact-title").addClass("contact-title-show"), 120);

    // Hitung total waktu animasi untuk setiap .cover-certificate
    $(".cover-contact").each(function (index) {
      setTimeout(() => {
        $(this).addClass("contact-image-show");
      }, index * 400); // Setiap elemen muncul dengan jeda 400ms
    });
  }
});
