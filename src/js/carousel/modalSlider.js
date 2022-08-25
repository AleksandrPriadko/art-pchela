import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const listImg = document.querySelector('.block-portfolio__list-one');

const listSlider = document.querySelector('.list-slider');

const closeBtn = document.querySelector('.btn-close');
const btnNextImg = document.querySelector('.js-btn-next-img');
const btnPrevImg = document.querySelector('.js-btn-prev-img');

const item = document.createElement('li');
item.classList.add('item-gallery');
const img = document.createElement('img');
img.classList.add('img-slider');

listImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', closeSlider);

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = target.src;
  const find = imgArray.find(url => url.smallImg === largeImgUrl);
  let indexImg = imgArray.indexOf(find);

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
