const RefBtnMenu = document.querySelector('.js-btn-menu');

RefBtnMenu.classList.add('unToggled');

RefBtnMenu.addEventListener('click', () => {
  RefBtnMenu.classList.toggle('toggled');
  RefBtnMenu.classList.toggle('unToggled');
});
