import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const listImg = document.querySelector('.block-portfolio__list-one');
const listSlider = document.querySelector('.list-slider');

const closeBtn = document.querySelector('.btn-close');
const btnNextImg = document.querySelector('.js-btn-next-img');
const btnPrevImg = document.querySelector('.js-btn-prev-img');

const newArr = imgArray;
 const itemsGalleryArr = newArr.map(image => {
    const item = document.createElement('li');
    item.classList.add('item-gallery');
    const img = document.createElement('img');
    img.setAttribute('src', image.smallImg);
    img.classList.add('img-slider');
    item.append(img);
    return item;
 });

 itemsGalleryArr.map(item=> console.log(item))
  
listImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', () =>
  document.body.classList.remove('show-modal-slider'),
);

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = target.src;
  console.log(largeImgUrl)
  const find = newArr.find(url => 
    url.smallImg === largeImgUrl
  );
  console.log(find)
  let indexImg = newArr.indexOf(find);
  console.log(indexImg)
  //addItemsGalleryInSlide(indexImg)
  currentImage(indexImg);
  return document.body.classList.add('show-modal-slider');
}

function currentImage(indexImg) {
  console.log(indexImg)
 
  const delArr = itemsGalleryArr.splice(indexImg, 1);
  itemsGalleryArr.unshift(delArr[0])
  
  return listSlider.append(...itemsGalleryArr);
}
//modalImg.appendChild(closeBtn);
//modalSlider.append(modalImg);
// function addItemsGalleryInSlide(indexImg) {
  
//   const delArr = itemsGalleryArr.splice(indexImg, 1);
//   itemsGalleryArr.unshift(delArr[0])
//  listSlider.append(...itemsGalleryArr);
// }
