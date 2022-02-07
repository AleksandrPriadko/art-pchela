//import Swiper from 'swiper';
import img from '../../portfolio.json';
const blockPortfolio = document.querySelector('.block-portfolio');

const listImgTop = document.createElement('ul');
listImgTop.classList.add('block-portfolio__list-one', 'js-active');

const listImgBottom = document.createElement('ul');
listImgBottom.classList.add('block-portfolio__list-two', 'js-active');

const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

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
let width = 652;
// // buttons
nextBtn.addEventListener('click', onClickImgNext);
prevBtn.addEventListener('click', onClickImgPrev);

listImgTop.addEventListener('transitionend', function () {
  onSliderMove(direction);

  listImgTop.style.transition = 'none';
  listImgTop.style.transform = 'translate(-1226px)';
  listImgBottom.style.transition = 'none';
  listImgBottom.style.transform = 'translate(-892.5px)';
  setTimeout(() => {
    listImgTop.style.transition = 'transform 0.5s ease-in-out';
    listImgBottom.style.transition = 'transform 0.5s ease-in-out';
  }, 0);
});

function onClickImgNext() {
  direction = true;
  return onMoveList();
}

function onClickImgPrev() {
  direction = false;
  return onMoveList();
}
function onMoveList() {
  listImgTop.style.transform = `translateX(${
    direction ? -1226 - width : -1226 + width
  }px)`;
  listImgBottom.style.transform = `translateX(${
    direction ? -892.5 - width : -892.5 + width
  }px)`;
}

function onSliderMove(direction) {
  let deleteIndTop = direction
    ? arrayItemsImgTop.shift()
    : arrayItemsImgTop.pop();
  let deleteIndBottom = direction
    ? arrayItemsImgBottom.shift()
    : arrayItemsImgBottom.pop();
  direction
    ? arrayItemsImgTop.push(deleteIndTop)
    : arrayItemsImgTop.unshift(deleteIndTop);
  direction
    ? arrayItemsImgBottom.push(deleteIndBottom)
    : arrayItemsImgBottom.unshift(deleteIndBottom);

  listImgTop.append(...arrayItemsImgTop);
  listImgBottom.append(...arrayItemsImgBottom);
}
