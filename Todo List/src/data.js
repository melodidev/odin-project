export let todoBoxes = [
	{
		title: 'Daily',
		items: [
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
				priority: true,
				done: true,
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
		],
	},
	{
		title: 'Test',
		items: [
			{
				title: 'Test todo 1',
				description: 'It is a test.',
				dueDate: '2nd January',
				priority: false,
				done: false,
			},
			{
				title: 'Test todo 2',
				description: 'The cake was a lie.',
				dueDate: '2nd January',
				priority: true,
				done: false,
			},
		],
	},
];

let count = 1;
export function getUniqueId() {
	return count++;
}

// Give id to each Todo Box
todoBoxes = todoBoxes.map(todoBox => {
	todoBox.id = getUniqueId();
	return todoBox;
});

// Give id to each item of each Todo Box
todoBoxes.forEach(todoBox => {
	todoBox.items = todoBox.items.map(item => {
		item.id = getUniqueId();
		return item;
	});
});

export const setTodoBoxes = (newTodoBoxes) => {
	todoBoxes = newTodoBoxes;
}
