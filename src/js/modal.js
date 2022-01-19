const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector('button[data-menu="close-modal"]');
//const modalActive = document.querySelector('modal');

openModalBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-modal');
  //modalActive.classList.add('modal-active');
});
// closeModalBtn.addEventListener('click', () => {
//   document.body.classList.remove('show-modal');
//   //modalActive.classList.add('modal-active');
// });
