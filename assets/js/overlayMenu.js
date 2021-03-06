const menuToggle = document.querySelector('.navMenu-toggle');

menuToggle.addEventListener('click', (e) => {
  const menu = document.querySelector('.navMenu');
  const header = document.querySelector('header');
  e.stopPropagation();
  e.preventDefault();
  header.classList.toggle('vh-100');
  menu.classList.toggle('navMenu-isOpen');
  document.body.classList.toggle('position-fixed');
  document.documentElement.classList.toggle('position-fixed');
});
