export const addData = (data) => ({
  type: "Add_data",
  data,
});

export const deleteData = (id) => ({
  type: "del_data",
  id,
});

export const addSlots = (slots) => ({
  type: "Add_Slot",
  slots,
});

export const editData = (id) => ({
  type: "EDIT",
  id,
});

export const searchData = (value) => ({
  type: "SEARCH",
  value,
});

export const editAvailabelData = (eData) => ({
  type: "UPDATE",
  eData,
});
