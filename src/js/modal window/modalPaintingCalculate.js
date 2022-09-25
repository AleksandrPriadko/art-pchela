const refBtnCalc = document.querySelector('.btnCalc-js');
const refBtnClose = document.querySelector('.btnClosePaintCalc-js');

refBtnCalc.addEventListener('click', () => {
  document.body.classList.add('show-modal');
});
refBtnClose.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});
