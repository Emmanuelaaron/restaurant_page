import appends from '../functions/append';
import restaurantMenu from './menu';

const HomePage = () => {
  const mainPage = document.createElement('section');
  mainPage.classList.add('d-flex', 'justify-content-end', 'home-section');
  const content = document.createElement('div');
  content.classList.add('bg-da', 'w-25');
  const header = document.createElement('h1');
  header.classList.add('logo', 'text-center');
  const menu = document.createElement('p');
  menu.addEventListener('click', () => {
    restaurantMenu();
  });
  menu.classList.add('border-top', 'text-center', 'pt-5', 'pb-4', 'home-font-size', 'mt-5');
  const aboutUs = document.createElement('p');
  aboutUs.classList.add('border-top', 'pt-5', 'pb-4', 'text-center', 'home-font-size');
  header.innerHTML = 'ER';
  const name = document.createElement('p');
  name.classList.add('text-center');
  const featuredProducts = document.createElement('p');
  featuredProducts.classList.add('border-top', 'pt-5', 'pb-4', 'text-center', 'home-font-size');
  featuredProducts.innerHTML = 'Featured Products';
  name.innerHTML = 'Emma\'s Restaurant';
  menu.innerHTML = 'MENU';
  aboutUs.innerHTML = 'About Us';

  appends(
    content,
    [
      header,
      name,
      menu,
      aboutUs,
      featuredProducts,
    ],
  );

  mainPage.appendChild(content);
  // mainPage.appendChild(footer())
  return mainPage;
};

export default HomePage;
