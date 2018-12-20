window.onload = function () {
  wow = new WOW(
    {
      mobile: false
    }
  );
  wow.init();

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);

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
};