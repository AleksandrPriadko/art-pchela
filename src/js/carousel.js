const sliderOne = document.querySelector('.block-portfolio__list-one');
const sliderTwo = document.querySelector('.block-portfolio__list-two');
console.log('Slider: ', sliderOne);

const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

let size = document.querySelector('.block-portfolio__item'); //.clientWidth;
console.dir(size);
let direction = 0;
let width = 652;
// buttons
nextBtn.addEventListener('click', onClickImgNext);
prevBtn.addEventListener('click', onClickImgPrev);

sliderOne.slick({
  infinite: true,
  slidesToScroll: 1,
});

function onClickImgNext() {
  //console.log((direction += 1));
  direction += 1;
  sliderOne.style.transform = `translateX(${-574 - width * direction}px)`;
  //sliderTwo.style.transform = `translateX(${401.5 - width * direction}px)`;
  console.log(
    (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  );
}
function onClickImgPrev() {
  //console.log((direction -= 1));
  direction -= 1;
  sliderOne.style.transform = `translateX(${-574 - width * direction}px)`;
  //sliderTwo.style.transform = `translateX(${401.5 - width * direction}px)`;
  console.log(
    (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  );
}
// nextBtn.onclick = function () {
//   slider.style.transform = 'translateX(' + -size + 'px)';
//   direction = 1;
// };

// prevBtn.onclick = function () {
//   direction = -1;
//   slider.style.transform = 'translateX(' + size + 'px)';
// };

// after transition event
// slider.addEventListener('transitionend', function () {
//   let slides = document.querySelectorAll('.block-portfolio__item');

//   if (direction < 0) {
//     for (let i = 0; i > direction; i--) {
//       slider.prepend(slides[slides.length + i - 1]);
//     }
//   } else if (direction > 0) {
//     for (let i = 0; i < direction; i++) {
//       slider.append(slides[i]);
//     }
//   }

//   // re-init transition
//   slider.style.transition = 'none';
//   slider.style.transform = 'translate(0)';
//   setTimeout(() => {
//     slider.style.transition = 'transform 0.5s ease-in-out';
//   }, 0);
// });
