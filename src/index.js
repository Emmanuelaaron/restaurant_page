import 'bootstrap';
import './scss/index.scss';
import HomePage from '../src/pages/home';

const elem = document.getElementById('content');
elem.appendChild(HomePage());

// elem.innerHTML="";

// elem.removeChild(elem.lastElementChild)
