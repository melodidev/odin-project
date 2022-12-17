import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

import { getHome } from './home';
import { getMenu } from './menu';
import { getContact } from './contact';

document.querySelector(".tab-1").addEventListener("click", () => {
  getHome();
});

document.querySelector(".tab-2").addEventListener("click", () => {
  getMenu();
});

document.querySelector(".tab-3").addEventListener("click", () => {
  getMenu();
});

document.querySelector(".tab-4").addEventListener("click", () => {
  getContact();
});