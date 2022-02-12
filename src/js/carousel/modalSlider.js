import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const listImg = document.querySelector('.block-portfolio__list-one');
const listSlider = document.querySelector('.list-slider');
console.log(listSlider);
const closeBtn = document.querySelector('.btn-close');
const btnNextImg = document.querySelector('.js-btn-next-img');
const btnPrevImg = document.querySelector('.js-btn-prev-img');

listImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', () =>
  document.body.classList.remove('show-modal-slider'),
);

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  //console.log(imgArray.imgUrl.indexOf(target.src));
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = target.src;
  const find = imgArray.find(url => url.smallImg === largeImgUrl);
  let indexImg = imgArray.indexOf(find);
  console.log(indexImg);
  return currentImage(indexImg);
}

function currentImage(index) {
  document.body.classList.add('show-modal-slider');
  const itemsGalleryArr = imgArray.map(image => {
    const item = document.createElement('li');
    item.classList.add('item-gallery');
    const img = document.createElement('img');
    img.setAttribute('src', image.smallImg);
    img.classList.add('img-slider');
    console.log(img);
    console.log(item);
    item.append(img);
    return item;
  });
  console.log(itemsGalleryArr);
  return listSlider.append(...itemsGalleryArr);
}
//modalImg.appendChild(closeBtn);
//modalSlider.append(modalImg);
