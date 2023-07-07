const mobileHamburger = document.querySelector('.mobile-hamburger');
const responsiveMenu = document.querySelector('.hamburger-menu');
const navElement = document.querySelector('.nav');

const handleResponsveMenu = (e) => {
  const target = e.target

  if (target.closest('.mobile-hamburger') || target.closest('.hamburger-menu')) {
    mobileHamburger.classList.toggle('active');
    responsiveMenu.classList.toggle('active');
    navElement.classList.toggle('active');
    document.querySelector('body').classList.toggle('scroll-lock');
  }

}

mobileHamburger.addEventListener('click', handleResponsveMenu);
responsiveMenu.addEventListener('click', handleResponsveMenu);