import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const topListImg = document.querySelector('.block-portfolio__list-one');
const bottomListImg = document.querySelector('.block-portfolio__list-two');
const listSlider = document.querySelector('.list-slider');
const closeBtn = document.querySelector('.btn-close');
const btnNextImg = document.querySelector('.js-btn-next-img');
const btnPrevImg = document.querySelector('.js-btn-prev-img');

let indexImg;
const item = document.createElement('li');
item.classList.add('item-gallery');
const img = document.createElement('img');
img.classList.add('img-slider');

topListImg.addEventListener('click', handleImgClick);
bottomListImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', closeSlider);

btnNextImg.addEventListener('click', event => {
  changePicture(event, 'right');
});
btnPrevImg.addEventListener('click', event => {
  changePicture(event, 'left');
});

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = target.src;
  const find = imgArray.find(url => url.smallImg === largeImgUrl);
  indexImg = imgArray.indexOf(find);

  img.setAttribute('src', imgArray[indexImg].smallImg);
  item.append(img);
  listSlider.append(item);

  return document.body.classList.add('show-modal-slider');
}

function closeSlider() {
  item.remove();
  document.body.classList.remove('show-modal-slider');

  return;
}

function changePicture(event, dir) {
  event.preventDefault();

  if (dir === 'left') {
    if (indexImg > 0) {
      indexImg--;
    } else {
      indexImg = imgArray.length - 1;
    }
  } else if (dir === 'right') {
    if (indexImg < imgArray.length - 1) {
      indexImg++;
    } else {
      indexImg = 0;
    }
  }
  img.setAttribute('src', imgArray[indexImg].smallImg);
  item.replaceWith(img);
  return;
}
