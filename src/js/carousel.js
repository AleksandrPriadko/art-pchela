import img from '../portfolio.json';
console.log(img);
const blockPortfolio = document.querySelector('.block-portfolio');

const listImgTop = document.createElement('ul');
listImgTop.classList.add('block-portfolio__list-one');

const listImgBottom = document.createElement('ul');
listImgBottom.classList.add('block-portfolio__list-two');

const sliderOne = document.querySelector('.block-portfolio__list-one');
const sliderTwo = document.querySelector('.block-portfolio__list-two');

const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

let size = document.querySelector('.block-portfolio__item'); //.clientWidth;

let indexEnd = img.length / 2;
let indexBegin = img.length / 2;
const arrayImgFirst = img.slice(0, indexEnd);
const arrayImgSecond = img.slice(indexBegin);

const arrayItemsImgTop = arrayImgFirst.map(({ imgUrl, alt }) => {
  return createImgCardTop({ imgUrl, alt });
});
const arrayItemsImgBottom = arrayImgSecond.map(({ imgUrl, alt }) => {
  return createImgCardBottom({ imgUrl, alt });
});
console.log(arrayItemsImgTop);
listImgTop.append(...arrayItemsImgTop);
listImgBottom.append(...arrayItemsImgBottom);
blockPortfolio.prepend(listImgTop, listImgBottom);

function createImgCardTop({ imgUrl, alt }) {
  const item = document.createElement('li');
  item.classList.add('block-portfolio__item', 'js-item-slide-top');

  const images = document.createElement('img');
  images.classList.add('block-portfolio__link');
  images.setAttribute('src', imgUrl);
  images.setAttribute('alt', alt);
  item.appendChild(images);

  return item;
}
function createImgCardBottom({ imgUrl, alt }) {
  const item = document.createElement('li');
  item.classList.add('block-portfolio__item', 'js-item-slide-bottom');

  const images = document.createElement('img');
  images.classList.add('block-portfolio__link');
  images.setAttribute('src', imgUrl);
  images.setAttribute('alt', alt);
  item.appendChild(images);

  return item;
}

let direction = 1;
let width = 652;
// // buttons
nextBtn.addEventListener('click', onClickImgNext);
prevBtn.addEventListener('click', onClickImgPrev);

function onClickImgNext() {
  direction += 1;
  // listImgTop.style.transform = `translateX(${-574 - width * direction}px)`;
  // listImgBottom.style.transform = `translateX(${-240.5 - width * direction}px)`;
  // console.log(
  //   (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  // );

  let slides = document.querySelectorAll('.js-item-slide-bottom');

  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      listImgBottom.prepend(slides[slides.length + i - 1]);
    }
  } else if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      listImgBottom.append(slides[i]);
    }
  }
  let slidesTop = document.querySelectorAll('.js-item-slide-top');
  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      listImgTop.prepend(slidesTop[slidesTop.length + i - 1]);
    }
  } else if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      listImgTop.append(slidesTop[i]);
    }
  }
}
function onClickImgPrev() {
  direction -= 1;
  // listImgTop.style.transform = `translateX(${-574 - width * direction}px)`;
  // listImgBottom.style.transform = `translateX(${-240.5 - width * direction}px)`;
  // console.log(
  //   (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  // );

  let slides = document.querySelectorAll('.js-item-slide-top');
  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      listImgTop.prepend(slides[slides.length + i - 1]);
    }
  } else if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      listImgTop.append(slides[i]);
    }
  }
}

// // after transition event
// listImgTop.addEventListener('transitionend', infinitySliderTop);
// listImgBottom.addEventListener('transitionend', infinitySliderBottom);
function infinitySliderTop() {
  let slides = document.querySelectorAll('.js-item-slide-top');
  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      listImgTop.prepend(slides[slides.length + i - 1]);
    }
  } else if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      listImgTop.append(slides[i]);
    }
  }

  // re-init transition
  //listImgTop.style.transition = 'none';
  //listImgTop.style.transform = 'translateX(-574px)';
  // setTimeout(() => {
  //   listImgTop.style.transition = 'transform 0.5s ease-in-out';
  // }, 0);
}
function infinitySliderBottom() {
  let slides = document.querySelectorAll('.js-item-slide-bottom');

  if (direction < 0) {
    for (let i = 0; i > direction; i--) {
      listImgBottom.prepend(slides[slides.length + i - 1]);
    }
  } else if (direction > 0) {
    for (let i = 0; i < direction; i++) {
      listImgBottom.append(slides[i]);
    }
  }

  // re-init transition
  //listImgBottom.style.transition = 'none';
  //listImgBottom.style.transform = 'translateX(-240.5px)';
  // setTimeout(() => {
  //   listImgBottom.style.transition = 'transform 0.5s ease-in-out';
  // }, 0);
}
