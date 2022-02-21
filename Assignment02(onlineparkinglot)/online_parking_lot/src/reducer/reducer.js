const initialState = {
    slots:0,
    list:[],
    search:'',
    update:[]
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case "DATA":
            if (state.update.length!==1){
                return {
                    slots:state.slots,
                    list : [...state.list,action.payload],
                    search:state.search,
                    update:[]
                }
            }else{
                const deleteItem = state.list.filter(each => each.id === action.payload.id ? Object.assign(each, action.payload) : each);
                return {
                    slots:state.slots,
                    list : deleteItem,
                    search:state.search,
                    update:[]
                }
            }
            
        case "GENERATESLOT":
            return {
                slots:state.slots+action.payload,
                list : state.list,
                search:state.search,
                update:state.update

            }
        case "DELETE":
            return {
                slots:state.slots,
                list : (state.list).filter(each => each.id !== action.payload),
                search:state.search,
                update:state.update[0].id === action.payload?[]:state.update

            }
        case "SEARCH":
            return {
                slots:state.slots,
                list:state.list,
                search:action.payload,
                update:state.update

            }
        case "UPDATE":
            return{
                slots:state.slots,
                list:state.list,
                search:state.search,
                update:[action.payload]
            }

        default:
            return state
    }
}

export default reducer;