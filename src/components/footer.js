import appends from '../functions/append';

const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('row');
  const upFooter = document.createElement('div');
  upFooter.classList.add('col-12', 'd-flex', 'justify-content-between', 'upper_footer', 'pt-5');

  const footerLeft = document.createElement('div');
  footerLeft.classList.add('pl-5', 'ml-5');
  const location = document.createElement('h3');
  location.innerHTML = 'LOCATIONS';
  const kamp = document.createElement('p');
  kamp.innerHTML = 'Kampala Boulevard';
  const bombo = document.createElement('p');
  bombo.innerHTML = 'Bombo road';
  const oasis = document.createElement('p');
  oasis.innerHTML = 'Oasis mall';
  const nakawa = document.createElement('p');
  nakawa.innerHTML = 'Nakawa';
  const namirembe = document.createElement('p');
  namirembe.innerHTML = 'Namirembe';
  const lugogo = document.createElement('p');
  lugogo.innerHTML = 'Lugogo';

  const footerMiddle = document.createElement('div');
  const contact = document.createElement('h3');
  contact.innerHTML = 'CONTACT US';
  const email = document.createElement('p');
  email.innerHTML = 'emmaisa@info.com';
  const phone1 = document.createElement('p');
  phone1.innerHTML = '+256 70000000';
  const phone2 = document.createElement('p');
  phone2.innerHTML = '+25677000000';

  const footerRight = document.createElement('div');
  footerRight.classList.add('pr-5', 'mr-5');
  const menu = document.createElement('h3');
  menu.innerHTML = 'OUR MENU';
  const breakfast = document.createElement('p');
  breakfast.innerHTML = 'BREAK FAST';
  const drinks = document.createElement('p');
  drinks.innerHTML = 'DRINKS';
  const mains = document.createElement('p');
  mains.innerHTML = 'MAINS';
  const desserts = document.createElement('p');
  desserts.innerHTML = 'DESSERTS';

  appends(
    footerRight,
    [
      menu,
      breakfast,
      drinks,
      mains,
      desserts,
    ],
  );

  appends(
    footerMiddle,
    [
      contact,
      email,
      phone1,
      phone2,
    ],
  );

  appends(
    footerLeft,
    [
      location,
      kamp,
      bombo,
      oasis,
      nakawa,
      namirembe,
      lugogo,
    ],
  );
  upFooter.appendChild(footerLeft);
  upFooter.appendChild(footerMiddle);
  upFooter.appendChild(footerRight);
  footer.appendChild(upFooter);

  return footer;
};

export default footer;