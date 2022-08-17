//import Swiper from 'swiper';
import img from '../../portfolio.json';

const blockPortfolio = document.querySelector('.block-portfolio');
const listImg = document.createElement('ul');
const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

listImg.classList.add('block-portfolio__list');

const arrayItemsImg = img.map(({ smallImg, alt }) => {
  return createImgCardTop(smallImg, alt);
});

listImg.append(...arrayItemsImg);
blockPortfolio.prepend(listImg);

function createImgCardTop(img, alt) {
  const item = document.createElement('li');
  item.classList.add('block-portfolio__item', 'js-item-slide-top');

  const images = document.createElement('img');
  images.classList.add('block-portfolio__link');
  images.setAttribute('src', img);
  images.setAttribute('alt', alt);
  item.appendChild(images);

  return item;
}

let direction = true;
let widthImg = arrayItemsImg[0].offsetWidth;
let offsets = 770;
let step = widthImg + 10;
let winWidth = window.innerWidth;

// // buttons
if (winWidth <= 767) {
  nextBtn.addEventListener('click', onClickImgNext);
  prevBtn.addEventListener('click', onClickImgPrev);
  listImg.addEventListener('transitionend', onMoveTransitionSlider);
}

function onClickImgNext() {
  direction = true;
  return onMoveList(direction, step, offsets);
}

function onClickImgPrev() {
  direction = false;
  return onMoveList(direction, step, offsets);
}
function onMoveTransitionSlider() {
  onSliderMove(direction);

  listImg.style.transition = 'none';
  listImg.style.transform = `translate(-${offsets}px)`;
  setTimeout(() => {
    listImg.style.transition = 'transform 0.5s ease-in-out';
  }, 0);
}
function onMoveList(dir, step, Top) {
  return (listImg.style.transform = `translateX(${
    dir ? -Top - step : -Top + step
  }px)`);
}

function onSliderMove(dir) {
  let deleteInd = dir ? arrayItemsImg.shift() : arrayItemsImg.pop();

  dir ? arrayItemsImg.push(deleteInd) : arrayItemsImg.unshift(deleteInd);

  listImg.append(...arrayItemsImg);
}
