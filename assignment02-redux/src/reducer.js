let initial=[]
function reducer(state=initial,action){
  const {type,payload}=action;
    switch(type){
        case "ADD":
          return [...state,payload]
        case "DELETE":
          return state.filter(each=>each.id!==payload)
        default:
          return state;
  }
}
export default reducer