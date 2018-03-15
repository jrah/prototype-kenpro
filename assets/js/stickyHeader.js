function scrollFix() {
  const header = document.querySelector('#header-trigger');
  if (header.scrollTop > 0) {
    header.classList.remove('z-5 bg-primary');
    header.classList.remove('z-5');
  } else {
    header.classList.add('bg-primary');
    header.classList.add('z-5');
  }
}


window.addEventListener('scroll', scrollFix);
