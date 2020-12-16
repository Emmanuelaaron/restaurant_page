/* eslint-disable import/no-cycle */

import header from '../components/header';
import footer from '../components/footer';
import appends from '../functions/append';

const featuredProducts = () => {
  const elem = document.getElementById('content');
  elem.innerHTML = '';

  const products = document.createElement('section');

  const content = document.createElement('section');
  content.classList.add(
    'row',
    'text-center',
    'mx-auto',
    'mt-4',
  );
  const featureHeading = document.createElement('h2');
  featureHeading.innerHTML = 'FEATURED PRODUCTS';
  featureHeading.classList.add(
    'col-12',
    'menu-heading',
  );

  const chicken = document.createElement('div');
  chicken.classList.add(
    'col-3',
  );

  const checkenText = document.createElement('p');
  checkenText.innerHTML = 'CLEAR CHICKEN & MUSHROOM';

  const chickenImage = document.createElement('img');
  chickenImage.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/productImages/1558013904.jpg');
  chickenImage.setAttribute('class', 'w-100 images');
  chicken.appendChild(chickenImage);
  chicken.appendChild(checkenText);

  const lentilSoup = document.createElement('div');
  lentilSoup.classList.add(
    'col-3',
  );

  const lentilSoupText = document.createElement('p');
  lentilSoupText.innerHTML = 'LENTIL SOUP (SATURDAY ONLY)';

  const lentilSoupImage = document.createElement('img');
  lentilSoupImage.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/productImages/1558013213.jpg');
  lentilSoupImage.setAttribute('class', 'w-100 images');
  lentilSoup.appendChild(lentilSoupImage);
  lentilSoup.appendChild(lentilSoupText);

  const tomatoSoup = document.createElement('div');
  tomatoSoup.classList.add(
    'col-3',
  );

  const tomatoSoupText = document.createElement('p');
  tomatoSoupText.innerHTML = 'CREAM OF TOMATO SOUP';

  const tomatoSoupImage = document.createElement('img');
  tomatoSoupImage.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/productImages/1558012827.jpg');
  tomatoSoupImage.setAttribute('class', 'w-100 images');
  tomatoSoup.appendChild(tomatoSoupImage);
  tomatoSoup.appendChild(tomatoSoupText);

  const squashSoup = document.createElement('div');
  squashSoup.classList.add(
    'col-3',
  );

  const squashSoupText = document.createElement('p');
  squashSoupText.innerHTML = 'BUTTERNUT SQUASH SOUP (SUNDAY ONLY)';

  const squashSoupImage = document.createElement('img');
  squashSoupImage.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/productImages/1558012566.jpg');
  squashSoupImage.setAttribute('class', 'w-100 images');
  squashSoup.appendChild(squashSoupImage);
  squashSoup.appendChild(squashSoupText);

  const vegSoup = document.createElement('div');
  vegSoup.classList.add(
    'col-3',
  );

  const vegSoupText = document.createElement('p');
  vegSoupText.innerHTML = 'CLEAR CHICKEN & VEG.SOUP';
  const vegSoupImage = document.createElement('img');
  vegSoupImage.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/productImages/1558012136.jpg');
  vegSoupImage.setAttribute('class', 'w-100 images');
  vegSoup.appendChild(vegSoupImage);
  vegSoup.appendChild(vegSoupText);

  appends(
    content,
    [
      featureHeading,
      chicken,
      lentilSoup,
      tomatoSoup,
      squashSoup,
      vegSoup,
    ],
  );

  appends(
    products,
    [
      header(),
      content,
      footer(),
    ],
  );

  elem.appendChild(products);

  return elem;
};

export default featuredProducts;