import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const listImg = document.querySelector('.block-portfolio__list-one');
const modalImg = document.querySelector('.modal-slider');
const closeBtn = document.querySelector('.btn-close');

const img = document.createElement('img');

listImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', () => {
  // setTimeout(() => {
  //   document.body.classList.remove('show-modal-slider');
  //   //closeBtn.style.transform = 'rotate(90deg)';
  // }, 350);
  document.body.classList.remove('show-modal-slider');
});

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log(imgArray.imgUrl.indexOf(target.src));
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgUrl = target.src;
  console.log(largeImgUrl);
  return currentImage(largeImgUrl);
}

function currentImage(urlImg) {
  document.body.classList.add('show-modal-slider');
  imgArray.map(images => {
    img.setAttribute('src', urlImg);
    img.classList.add('img-slider');
    modalImg.appendChild(img);
  });
}
//modalImg.appendChild(closeBtn);
//modalSlider.append(modalImg);
