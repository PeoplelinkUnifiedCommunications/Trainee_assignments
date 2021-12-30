const initial={list:[],gen_slots:0,editData:[{
  ownerName:"",
  regNum:"",
  vehicleColor:"",
  slotNum:"",
}],searchInput:'',isEdit:false}
function reducer(state=initial,action){
    const {type,payload}=action;
      switch(type){
          case "ADD":
            return {
              ...state,
              list:[...state.list,payload]
            }
          case "EDIT":
            return {
              ...state,
              editData:(state.list).filter(post => post.id === payload),
              isEdit:true
            }
          case "UPDATE":
            return {
                ...state,
                list:(state.list).filter(post => post.id === payload.id?Object.assign(post,payload):post),
                isEdit:false
            }
          case "SEARCH":
            return {
                ...state,
                searchInput:payload
              }
          case "DEL":
            return {
              ...state,
              list:(state.list).filter(each=>each.id!==payload),
              isEdit:false
            }
          case "GENERATE":
            return {
              ...state,
              gen_slots:payload
            }
          default:
            return state;
    }
  }
  export default reducer