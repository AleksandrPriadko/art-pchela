//import Swiper from 'swiper';
import img from '../../portfolio.json';

const blockPortfolio = document.querySelector('.block-portfolio');
const listImgTop = document.createElement('ul');
const listImgBottom = document.createElement('ul');
const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

listImgTop.classList.add('block-portfolio__list-one', 'js-active');
listImgBottom.classList.add('block-portfolio__list-two', 'js-active');

let halfArray = img.length / 2;
const arrayImgFirst = img.slice(0, halfArray);
const arrayImgSecond = img.slice(halfArray);

const arrayItemsImgTop = arrayImgFirst.map(({ smallImg, alt }) => {
  return createImgCardTop(smallImg, alt);
});

const arrayItemsImgBottom = arrayImgSecond.map(({ smallImg, alt }) => {
  return createImgCardBottom(smallImg, alt);
});

listImgTop.append(...arrayItemsImgTop);
listImgBottom.append(...arrayItemsImgBottom);
blockPortfolio.prepend(listImgTop, listImgBottom);

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
function createImgCardBottom(imgUrl, alt) {
  const item = document.createElement('li');
  item.classList.add('block-portfolio__item', 'js-item-slide-bottom');

  const images = document.createElement('img');
  images.classList.add('block-portfolio__link');
  images.setAttribute('src', imgUrl);
  images.setAttribute('alt', alt);
  item.appendChild(images);

  return item;
}

let direction = true;
let widthImg = arrayItemsImgTop[0].offsetWidth;
let offsetsTop = 0;
let offsetsBottom = 0;
let step = widthImg + (widthImg < 637 ? 10 : 15);
let innerWidth = window.innerWidth;

if (widthImg === 637) {
  offsetsTop = 1226;
  offsetsBottom = 892.5;
} else if (widthImg === 438) {
  offsetsTop = 843;
  offsetsBottom = 616.5;
}
// // buttons
if (innerWidth >= 768) {
  nextBtn.addEventListener('click', onClickImgNext);
  prevBtn.addEventListener('click', onClickImgPrev);
  listImgTop.addEventListener('transitionend', onMoveTransitionSlider);
}

function onClickImgNext() {
  direction = true;
  return onMoveList(direction, step, offsetsTop, offsetsBottom);
}

function onClickImgPrev() {
  direction = false;
  return onMoveList(direction, step, offsetsTop, offsetsBottom);
}
function onMoveTransitionSlider() {
  onSliderMove(direction);

  listImgTop.style.transition = 'none';
  listImgTop.style.transform = `translate(-${offsetsTop}px)`;
  listImgBottom.style.transition = 'none';
  listImgBottom.style.transform = `translate(-${offsetsBottom}px)`;
  setTimeout(() => {
    listImgTop.style.transition = 'transform 0.5s ease-in-out';
    listImgBottom.style.transition = 'transform 0.5s ease-in-out';
  }, 0);
}
function onMoveList(dir, step, Top, Bottom) {
  listImgTop.style.transform = `translateX(${
    dir ? -Top - step : -Top + step
  }px)`;
  listImgBottom.style.transform = `translateX(${
    dir ? -Bottom - step : -Bottom + step
  }px)`;
  return;
}

function onSliderMove(dir) {
  let deleteIndTop = dir ? arrayItemsImgTop.shift() : arrayItemsImgTop.pop();
  let deleteIndBottom = dir
    ? arrayItemsImgBottom.shift()
    : arrayItemsImgBottom.pop();
  dir
    ? arrayItemsImgTop.push(deleteIndTop)
    : arrayItemsImgTop.unshift(deleteIndTop);
  dir
    ? arrayItemsImgBottom.push(deleteIndBottom)
    : arrayItemsImgBottom.unshift(deleteIndBottom);

  listImgTop.append(...arrayItemsImgTop);
  listImgBottom.append(...arrayItemsImgBottom);
}

