import { todos, setTodos, getUniqueId } from './data';

// delete todo
export function deleteTodo(id) {
	setTodos(todos.filter((todo) => todo.id != id));
}

// add todo
export function addTodo(data) {
	let todo = {
		id: getUniqueId(),
		title: data.get("title"),
		description: data.get("description"),
		dueDate: data.get("dueDate"),
		priority: data.get("priority"),
		done: false,
	};
	setTodos([...todos, todo]);
	return todo;
}
