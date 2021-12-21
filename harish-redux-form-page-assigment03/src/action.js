export const addTask = newList => ({
	type: "ADD_TASK",
	newList,
});

export const delTask = id => ({
	type: "del",
	id,
});
