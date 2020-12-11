import header from '../components/header';
import footer from '../components/footer';
import appends from '../functions/append';

const restaurantMenu = () => {
  const elem = document.getElementById('content');
  elem.innerHTML = '';

  const menu = document.createElement('section');
  menu.classList.add(
    // 'row',
  );

  const menuMainContent = document.createElement('section');
  menuMainContent.classList.add(
    // // 'container',
    // 'bg-info',
    'row',
    'text-center',
    'mx-auto',
    'mt-4',
  );

  const heading = document.createElement('h2');
  heading.innerHTML = 'Welcome to Emma\'s restaurant';
  heading.classList.add(
    'col-12',
    'menu-heading',
  );

  const littleContent = document.createElement('p');
  littleContent.innerHTML = "Welcome to Emma's delicious universe. Everything from our Big on Breakfast, Perfected Drinks, Decadent to your Generous Big Meals Right here at your fingertips. ORDER NOW. ";
  littleContent.classList.add(
    'little-content',
    'col-12',
  );

  const image1 = document.createElement('div');
  image1.classList.add(
    'col-6',
  );
  const imagetext1 = document.createElement('p');
  imagetext1.innerHTML = 'BIG ON BREAKFAST';
  imagetext1.classList.add(
    'mt-3',
  );
  const myImage1 = document.createElement('img');
  myImage1.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579274125.jpg');
  myImage1.setAttribute('class', 'images');
  image1.appendChild(myImage1);
  image1.appendChild(imagetext1);

  const image2 = document.createElement('div');
  image2.classList.add(
    'col-6',
  );
  const imagetext2 = document.createElement('p');
  imagetext2.innerHTML = 'GENEROUS BIG MEALS';
  imagetext2.classList.add(
    'mt-3',
  );
  const myImage2 = document.createElement('img');
  myImage2.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579273978.jpg');
  myImage2.setAttribute('class', 'images');
  image2.appendChild(myImage2);
  image2.appendChild(imagetext2);

  const image3 = document.createElement('div');
  image3.classList.add(
    'col-6',
  );
  const imagetext3 = document.createElement('p');
  imagetext3.innerHTML = 'PERFECTED DRINKS';
  imagetext3.classList.add(
    'mt-3',
  );
  const myImage3 = document.createElement('img');
  myImage3.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579273990.jpg');
  myImage3.setAttribute('class', 'images');
  image3.appendChild(myImage3);
  image3.appendChild(imagetext3);

  const image4 = document.createElement('div');
  image4.classList.add(
    'col-6',
  );
  const imagetext4 = document.createElement('p');
  imagetext4.innerHTML = 'DECADENT DESSERTS';
  imagetext4.classList.add(
    'mt-3',
  );
  const myImage4 = document.createElement('img');
  myImage4.setAttribute('src', 'https://restaurentapp.s3.eu-west-1.amazonaws.com/categoryImages/1579274066.jpg');
  myImage4.setAttribute('class', 'images');
  image4.appendChild(myImage4);
  image4.appendChild(imagetext4);

  appends(
    menuMainContent,
    [
      heading,
      littleContent,
      image1,
      image2,
      image3,
      image4,
    ],
  );

  appends(
    menu,
    [
      header(),
      menuMainContent,
      footer(),
    ],
  );

  elem.appendChild(menu);
  return elem;
};

export default restaurantMenu;