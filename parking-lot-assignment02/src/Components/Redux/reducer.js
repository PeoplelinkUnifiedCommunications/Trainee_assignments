const intialState = {
  userVehicalData: [],
  slots: 0,
  editSlot: [],
  isEdit: false,
  searchValue: "",
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "Add_data":
      return {
        ...state,
        userVehicalData: [...state.userVehicalData, action.data],
      };
    case "del_data":
      return {
        ...state,
        userVehicalData: [
          ...state.userVehicalData.filter((each) => each.id !== action.id),
        ],
      };
    case "Add_Slot":
      return {
        ...state,
        slots: state.slots + action.slots,
      };
    case "EDIT":
      return {
        ...state,
        editSlot: [
          ...state.userVehicalData.filter((each) => each.id === action.id),
        ],
        isEdit: true,
      };
    case "SEARCH":
      return {
        ...state,
        searchValue: action.value,
      };
    case "UPDATE":
      const dataUpdate = state.userVehicalData.filter((each) =>
        each.id === action.eData.id ? Object.assign(each, action.eData) : each
      );
      return {
        ...state,
        userVehicalData: dataUpdate,
        isEdit: false,
      };
    default:
      return state;
  }
};

export default reducer;
