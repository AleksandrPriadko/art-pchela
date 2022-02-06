//import Swiper from 'swiper';
import img from '../../portfolio.json';
console.log(img);
const blockPortfolio = document.querySelector('.block-portfolio');

const listImgTop = document.createElement('ul');
listImgTop.classList.add('block-portfolio__list-one', 'slider');

const listImgBottom = document.createElement('ul');
listImgBottom.classList.add('block-portfolio__list-two');

// const sliderOne = document.querySelector('.block-portfolio__list-one');
// const sliderTwo = document.querySelector('.block-portfolio__list-two');

const prevBtn = document.querySelector('.btn-slider-prev');
const nextBtn = document.querySelector('.btn-slider-next');

// let size = document.querySelector('.block-portfolio__item'); //.clientWidth;

let indexEnd = img.length / 2;
let indexBegin = img.length / 2;
const arrayImgFirst = img.slice(0, indexEnd);
const arrayImgSecond = img.slice(indexBegin);

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

let direction = 1;
let width = 652;
// // buttons
nextBtn.addEventListener('click', onClickImgNext);
prevBtn.addEventListener('click', onClickImgPrev);

function onClickImgNext() {
  //listImgTop.style.transform = `translateX(${-574 - width * direction}px)`;
  // listImgBottom.style.transform = `translateX(${-240.5 - width * direction}px)`;
  direction++;

  if (direction > 1) {
    let deleteIndTop = arrayItemsImgTop.shift();
    let deleteIndBottom = arrayItemsImgBottom.shift();
    console.log(deleteIndTop);
    arrayItemsImgTop.push(deleteIndTop);
    arrayItemsImgBottom.push(deleteIndBottom);
    console.log('Добавил в конец списка: ', typeof arrayItemsImgTop);
    // for (const item of arrayItemsImgTop) {
    //   console.log(item);
    // }
    listImgTop.append(...arrayItemsImgTop);
    listImgBottom.append(...arrayItemsImgBottom);
  }

  // console.log(
  //   (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  // );
}
function onClickImgPrev() {
  direction--;
  // listImgTop.style.transform = `translateX(${-574 - width * direction}px)`;
  // listImgBottom.style.transform = `translateX(${-240.5 - width * direction}px)`;

  // console.log(
  //   (sliderTwo.style.transform = `translateX(${-240.5 - width * direction}px)`),
  // );

  let deleteIndTop = arrayItemsImgTop.pop();
  let deleteIndBottom = arrayItemsImgBottom.pop();
  console.log(deleteIndTop);
  arrayItemsImgTop.unshift(deleteIndTop);
  arrayItemsImgBottom.unshift(deleteIndBottom);

  // for (const item of arrayItemsImgTop) {
  //   console.log(item);
  // }
  listImgTop.append(...arrayItemsImgTop);
  listImgBottom.append(...arrayItemsImgBottom);
}

// // Берём ширину видимой части слайда
// let viewport = 753;
// // Берём кнопку переключения на следующий слайд
// let btnNext = document.querySelector('.btn-slider-next');
// // Берём внутренности слайда
// let slides = document.querySelectorAll('.slide');
// // Создаём массив с новыми слайдами
// let sliders = [];
// // Цикл по слайдам
// for (let i = 0; i < slides.length; ++i) {
//   // Добавляем изображение из слайда
//   sliders[i] = slides[i].querySelector('img');
//   // Удаляем слайд
//   slides[i].remove();
// }

// // Номер слайда
// let step = 0;
// // Позиция сайда
// let offset = 0;

// // Функция для отрисовки сайда
// function drow() {
//   // Создаём элемент слайда
//   let slide = document.createElement('li');
//   // Добавляем касс slide новому элементу
//   slide.classList.add('slide');
//   // Добавляем дочерний элемент контент слайда
//   slide.appendChild(sliders[step]);
//   // Даём позицию для слайда
//   slide.style.left = offset * viewport + 'px';
//   // Добавляем слайд в контейнер слайдеров
//   document.querySelector('.slider').appendChild(slide);
//   // Если следующий слайд равен числу слайдеров, то
//   if (step + 1 == slides.length) {
//     // Включаем первый слайд
//     step = 0;
//   } else {
//     // Иначе
//     // Увеличиваем номер слайда на один
//     step++;
//   }
//   // Назначаем позицию слайда
//   offset = 1;
// }

// drow();
// drow();

// // Создаём функцию для переключения
// function left() {
//   // Запрещаем событие кнопки вперёд на клик
//   btnNext.removeEventListener('click', left);
//   // Берём слайды
//   let slides2 = document.querySelectorAll('.slide');
//   // Позиция
//   let offset2 = 0;
//   // Цикл для перемещения слайда
//   for (let i = 0; i < slides2.length; i++) {
//     // Меняем позицию слайда
//     slides2[i].style.left = offset2 * viewport - viewport + 'px';
//     // Увеличиваем позицию
//     offset2++;
//   }
//   // Ставим таймер
//   setTimeout(function () {
//     // Удаляем прошлый слайд
//     slides2[0].remove();
//     // Рисуем следующий слайд
//     drow();
//     // Назначаем событие на кнопку вперёд
//     btnNext.addEventListener('click', left);
//   }, 500);
// }

// btnNext.addEventListener('click', left);
