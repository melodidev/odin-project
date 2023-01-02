import { todoBoxes, setTodoBoxes, getUniqueId } from './data';

// delete todo
export function deleteTodo(id, boxId) {
	setTodoBoxes(todoBoxes.map((todoBox) => {
		todoBox.items = todoBox.items.filter((todo) => todo.id != id);
		return todoBox;
	}));
}

// add todo
export function addTodo(data, boxId) {
	let todo = {
		id: getUniqueId(),
		title: data.get("title"),
		description: data.get("description"),
		dueDate: data.get("dueDate"),
		priority: data.get("priority"),
		done: false,
	};

	let todoBox = todoBoxes.find(todoBox => todoBox.id == boxId);
	todoBox.items.push(todo);

	return todo;
}

// done todo
export function changeDone(id, boxId) {
	let todoBox = todoBoxes.find(todoBox => todoBox.id == boxId);
	let todo = todoBox.items.find(todo => todo.id == id);

	if (todo.done) {
		todo.done = false;
	} else {
		todo.done = true;
	}
}

// delete todo box
export function deleteTodoBox(boxId) {
	setTodoBoxes(todoBoxes.filter((todoBox) => todoBox.id != boxId));
}

// add todo box
export function addTodoBox(data) {
	let todoBox = {
		title: data.get("todoBoxTitle"),
		items: [],
		id: getUniqueId(),
	};

	todoBoxes.push(todoBox);

	return todoBox;
}