export let todos = [
	{
		title: 'Clean espresso machine',
		description: 'It stinks (」°ロ°)」',
		dueDate: '23th September',
		priority: false,
		done: false,
	},
	{
		title: 'Do exercise',
		description: 'You lazy potato.',
		dueDate: '23th September',
		priority: false,
		done: false,
	},
	{
		title: 'Do laundry',
		description: 'Do laundry before your bro comes home, do not forget to apart colorful clothes from black clothes!!',
		dueDate: '25th September',
		priority: false,
		done: false,
	},
	{
		title: 'Cook dinner',
		description: 'Spaghetti with meatballs.',
		dueDate: '23th September',
		priority: false,
		done: true,
	},
	{
		title: 'Call mom',
		description: 'Cause it\'s her birthday today!',
		dueDate: '23th September',
		priority: true,
		done: false,
	},
];

let count = 1;
export function getUniqueId() {
	return count++;
}

todos = todos.map(todo => {
	todo.id = getUniqueId();
	return todo;
});

export const setTodos = (newTodos) => {
	todos = newTodos;
}
