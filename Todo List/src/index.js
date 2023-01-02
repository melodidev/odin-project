import './style.css';

import { setMasonry, displayTodoBoxes } from './dom';
import { todoBoxes } from './data';

displayTodoBoxes(todoBoxes);
setMasonry();