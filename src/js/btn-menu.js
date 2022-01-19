// $('.burger').addClass('unToggled');
// $('.burger').click(function () {
//   $(this).toggleClass('toggled');
//   $(this).toggleClass('unToggled');
//   // also open menu here...
// });

const RefBtnMenu = document.querySelector('.js-btn-menu');
console.log(RefBtnMenu);

RefBtnMenu.classList.add('unToggled');

RefBtnMenu.addEventListener('click', () => {
  RefBtnMenu.classList.toggle('toggled');
  RefBtnMenu.classList.toggle('unToggled');
});
