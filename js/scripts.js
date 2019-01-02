window.onload = function () {
  wow = new WOW({
    mobile: false
  });
  wow.init();

  let navToggle = document.querySelector('.page-header__toggle');
  let navCloseItem = document.querySelector('.site-navigation__close');

  function toggleNav() {
    let navMain = document.querySelector('.page-header');
    navMain.classList.toggle('page-header--opened');
  }

  navToggle.addEventListener('click', toggleNav, false);
  navCloseItem.addEventListener('click', toggleNav, false);


  window.onscroll = function () {
    const navMain = document.querySelector('.page-header');
    const mq = window.matchMedia("(max-width: 679px)");
    if (mq.matches) {
      navMain.classList.remove('page-header--opened');
    } else {
      return;
    }
  };

  let lastScrollTop = 0;
  $(window).scroll(function () {
    const mq = window.matchMedia("(max-width: 679px)");
    const bodyWrapper = $('body > .wrapper');
    if (mq.matches) {
      let st = $(this).scrollTop();
      if (st > lastScrollTop && $(document).scrollTop() >= 100) {
        bodyWrapper.addClass('compact');
        console.log('down');
      } else if ($(document).scrollTop() >= 100) {
        bodyWrapper.removeClass('compact');
        console.log('up');
      }
      lastScrollTop = st;
    }
  });
};
