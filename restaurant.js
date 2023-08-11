const links = document.querySelectorAll('.links');
const menuBar = document.querySelector('.menu-bar');
const menu = document.getElementById('nav');

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