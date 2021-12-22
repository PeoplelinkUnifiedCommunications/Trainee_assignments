export const addTask = newList => ({
	type: "ADD_TASK",
	newList,
});

export const delTask = id => ({
	type: "del",
	id,
});

export const greeting = name => ({
	type: "greeting",
	name,
});
