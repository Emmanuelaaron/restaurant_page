/* eslint-disable import/no-cycle */

import appends from '../functions/append';
import restaurantMenu from './menu';
import featuredproducts from './featuredproducts';

const HomePage = () => {
  const mainPage = document.createElement('section');
  mainPage.classList.add(
    'd-flex',
    'justify-content-end',
    'home-section',
  );

  const content = document.createElement('div');
  content.classList.add(
    'bg-da',
    'w-25',
  );

  const header = document.createElement('h1');
  header.classList.add(
    'logo', 'text-center',
  );

  const menu = document.createElement('p');
  menu.addEventListener('click', () => {
    restaurantMenu();
  });
  menu.classList.add(
    'border-top',
    'text-center', 'pt-5',
    'pb-4', 'home-font-size',
    'mt-5',
  );

  header.innerHTML = 'ER';

  const name = document.createElement('p');
  name.classList.add('text-center');

  const featuredProducts = document.createElement('p');
  featuredProducts.classList.add(
    'border-top',
    'pt-5', 'pb-4',
    'text-center',
    'home-font-size',
  );
  featuredProducts.addEventListener(
    'click', () => {
      featuredproducts();
    },
  );
  featuredProducts.innerHTML = 'Featured Products';

  name.innerHTML = 'Emma\'s Restaurant';
  menu.innerHTML = 'MENU';

  appends(
    content,
    [
      header,
      name,
      menu,
      featuredProducts,
    ],
  );

  mainPage.appendChild(content);
  return mainPage;
};

export default HomePage;
