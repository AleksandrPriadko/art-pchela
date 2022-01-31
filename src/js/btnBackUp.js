const btn = document.querySelector('[data-back-up="btn-back-up"]');
console.log(btn);
let intViewportHeight = window.innerHeight;

window.addEventListener('scroll', showBtn);
btn.addEventListener('click', scrollToUp);

function showBtn() {
  let scrollY = window.pageYOffset;
  if (scrollY > intViewportHeight) {
    return btn.classList.add('btn-back-active');
  } else if (scrollY < intViewportHeight) {
    return btn.classList.remove('btn-back-active');
  }
  return;
}
//showBtn();
function scrollToUp() {
  return window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
