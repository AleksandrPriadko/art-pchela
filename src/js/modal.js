const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const backDrop = document.querySelector('.js-backdrop');
const RefBtnMenu = document.querySelector('.js-btn-menu');
const anchors = document.querySelectorAll('.nav__Link[href*="#"]');
const anchorsMenu = document.querySelectorAll('.navLink[href*="#"]');
const closeModalLink = document.querySelectorAll('a[data-menu="close-modal"]');

openModalBtn.addEventListener('click', closeModal);

backDrop.addEventListener('click', closeBackdrop);

closeModalLink.forEach(link => {
  return link.addEventListener('click', onModalScrollToElm);
});

ScrollToElm();

function closeModal() {
  document.body.classList.toggle('show-modal');
}

function closeBackdrop(e) {
  if (e.target === e.currentTarget) {
    RefBtnMenu.classList.replace('toggled', 'unToggled');
    document.body.classList.remove('show-modal');
  }
}

function onModalScrollToElm(event) {
  anchors.forEach(elm => {
    elm.addEventListener('click', () => {
      event.preventDefault();
      const id = elm.getAttribute('href');
      document
        .querySelector('' + id)
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });
  RefBtnMenu.classList.replace('toggled', 'unToggled');
  closeModal();
}

function ScrollToElm() {
  return anchorsMenu.forEach(elm => {
    elm.addEventListener('click', event => {
      event.preventDefault();
      const id = elm.getAttribute('href');
      document
        .querySelector('' + id)
        .scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });
}
