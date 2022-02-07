import imgArray from '../../portfolio.json';
const modalSlider = document.querySelector('.backdrop-slider');
const listImg = document.querySelector('.block-portfolio__list-one');
const modalImg = document.querySelector('.modal-slider');
const closeBtn = document.querySelector('.btn-close');

const img = document.createElement('img');

listImg.addEventListener('click', handleImgClick);
closeBtn.addEventListener('click', () => {
  document.body.classList.remove('show-modal-slider');
});

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log(target);
  if (target.nodeName !== 'IMG') {
    return;
  }
  return currentImage();
}

function currentImage() {
  document.body.classList.add('show-modal-slider');
}
//modalImg.appendChild(closeBtn);
//modalSlider.append(modalImg);
