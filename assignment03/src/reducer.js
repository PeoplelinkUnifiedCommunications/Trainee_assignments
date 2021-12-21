let initial=[]
function reducer(state=initial,action){
  const {type,newList}=action;
    switch(type){
        case "ADD":
          return [...state,newList]
        default:
          return state;
  }
}
export default reducer