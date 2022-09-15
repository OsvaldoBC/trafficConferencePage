// mobile menu  //
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

const iProgram = document.querySelector('.itemProgram');
const iSpeaker = document.querySelector('.itemSpeaker');
const iAbout = document.querySelector('.itemAbout');

iProgram.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

iSpeaker.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

iAbout.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});
