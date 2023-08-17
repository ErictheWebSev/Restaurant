const links = document.querySelectorAll('.links');
const menuBar = document.querySelector('.menu-bar');
const menu = document.getElementById('nav');
const btnUp = document.querySelector('.btn-up');

menuBar.addEventListener('click', () => {
  menu.classList.toggle('display');
});

const removeActive = () => {
  links.forEach(link => {
    link.classList.remove('active');
  });
}

links.forEach(link => {
  link.addEventListener('click', () => {
    removeActive()
    link.classList.add('active');
    menu.classList.remove('display');
  });
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
  btnUp.style.display = 'block';
} else {
  btnUp.style.display = 'none';
}
});

