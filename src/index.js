
import './styles.css';
import menuEl from './menu.json';
import MenuTmp from './templates/gallery.hbs';

const refs = {
    menu: document.querySelector('.js-menu'),
}; 

const menuMarkUp = MenuTmp([...menuEl]);
refs.menu.insertAdjacentHTML('beforeend', menuMarkUp);