import portfolio from '../portfolio.json';

console.log(portfolio);

const blockPortfolio = document.querySelector('.block-portfolio');
console.log(blockPortfolio);

portfolio.map(({ id, imgUrl, alt }) => {
  const markup = `<ul class="block-portfolio__list-one"><li class="block-portfolio__item">
              <picture>
                <img
                  src="${imgUrl}"
                  alt="${alt}"
                  class="block-portfolio__link"
                />
              </picture>
            </li></ul>`;
  blockPortfolio.insertAdjacentHTML('beforeend', markup);
});
