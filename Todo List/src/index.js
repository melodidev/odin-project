import './style.css';

import { setMasonry, editTodoModal, displayTodos } from './dom';
import { todos } from './functions';

setMasonry();
displayTodos(todos);
editTodoModal();
