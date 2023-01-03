import './style.css';

import { setMasonry, displayTodoBoxes } from './dom';
import { todoBoxes } from './data';

displayTodoBoxes(todoBoxes);
setMasonry();

// masonry has problems, maybe change it to grid or col
// Add localstorage