import 'bootstrap';
import './scss/index.scss';
import HomePage from './pages/home';
import footer from './components/footer';

const elem = document.getElementById('content');
elem.appendChild(HomePage());
elem.appendChild(footer());
// elem.innerHTML="";

// elem.removeChild(elem.lastElementChild)
