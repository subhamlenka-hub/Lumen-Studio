/* =========================================
   Lumen Studio — jQuery & vanilla JS
   ========================================= */

$(function () {

  // ---- Navbar shrink on scroll ----
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 40) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // ---- Smooth scroll for anchor links ----
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 700);
      // close mobile nav if open
      var nav = $('.navbar-collapse');
      if (nav.hasClass('show')) nav.collapse('hide');
    }
  });

  // ---- Reveal on scroll (IntersectionObserver) ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // ---- Swiper testimonials ----
  new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1100: { slidesPerView: 3 }
    }
  });

  // ---- Fancybox ----
  Fancybox.bind('[data-fancybox]', {
    Toolbar: { display: { left: ['infobar'], middle: [], right: ['close'] } }
  });

  // ---- Contact form (demo only) ----
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    var $status = $('#formStatus');
    var name = $form.find('[name="name"]').val().trim();
    var email = $form.find('[name="email"]').val().trim();
    var message = $form.find('[name="message"]').val().trim();

    if (!name || !email || !message) {
      $status.removeClass('success').addClass('error').text('Please fill in name, email and message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $status.removeClass('success').addClass('error').text('Please enter a valid email address.');
      return;
    }

    $status.removeClass('error').addClass('success')
      .text('Thanks ' + name + '! Your message has been sent (demo).');
    $form[0].reset();
  });

  // ---- Year in footer ----
  $('#year').text(new Date().getFullYear());
});
