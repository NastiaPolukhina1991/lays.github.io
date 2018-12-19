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
    navMain.classList.toggle('page-header--opened')
  }

  navToggle.addEventListener('click', toggleNav, false);
  navCloseItem.addEventListener('click', toggleNav, false);
};