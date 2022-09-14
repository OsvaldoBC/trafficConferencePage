// mobile menu //
const openMenu = document.querySelector('.hamburguer');
const modalMenu = document.querySelector('.itemsMobileMenu');

openMenu.addEventListener('click', () => {
  modalMenu.style.display = 'block';
});

// Close de mobile menu when click on the ICON  X //

const closeMenu = document.querySelector('.close_menu');
closeMenu.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

//  Item of the Mobile menu //

const itemProgram = document.querySelector('.itemProgram');
const itemSpeaker = document.querySelector('.itemSpeaker');
const itemAbout = document.querySelector('.itemAbout');

itemProgram.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

itemSpeaker.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

itemAbout.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});
