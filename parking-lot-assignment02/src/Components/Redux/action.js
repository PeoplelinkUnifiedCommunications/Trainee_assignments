export const addData = data => ({
	type: "Add_data",
	data,
});

export const deleteData = id => ({
	type: "del_data",
	id,
});
