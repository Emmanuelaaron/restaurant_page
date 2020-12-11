/* eslint-disable import/no-cycle */
import 'bootstrap';
import './scss/index.scss';
import HomePage from './pages/home';
import footer from './components/footer';

const launch = () => {
  const elem = document.getElementById('content');
  elem.innerHTML = '';
  elem.appendChild(HomePage());
  elem.appendChild(footer());
};

launch();

export default launch;
