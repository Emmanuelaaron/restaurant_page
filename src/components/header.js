import appends from '../functions/append';
import launch from '../index';

const header = () => {
  const header = document.createElement('nav');
  header.classList.add(
    'bg-light', 'shadow',
    'd-flex', 'border-bottom',
    'row', 'header',
    'justify-content-between',
    'pl-4', 'pr-4',
  );

  const divRight = document.createElement('div');
  divRight.innerHTML = 'Emma\'s Restaurant';
  divRight.classList.add(
    'p-3', 'nav-right',
    'col-4',
  );

  const divLeft = document.createElement('div');

  divLeft.classList.add(
    'd-flex', 'align-items-center',
    'col-5',
    'justify-content-between',
  );

  const home = document.createElement('div');
  home.innerHTML = 'HOME';
  home.classList.add(
    'click',
  );
  home.addEventListener(
    'click', () => {
      launch();
    },
  );

  const menu = document.createElement('div');
  menu.classList.add(
    'click',
  );
  menu.innerHTML = 'MENU';

  const featuredProducts = document.createElement('div');
  featuredProducts.classList.add(
    'click',
  );
  featuredProducts.innerHTML = 'Featured Products';

  appends(
    divLeft,
    [
      home,
      menu,
      featuredProducts,
    ],
  );

  header.appendChild(divRight);
  header.appendChild(divLeft);
  return header;
};

export default header;