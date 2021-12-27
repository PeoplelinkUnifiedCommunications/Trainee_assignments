const initailState = []

const reducer = (state=initailState, action) =>{
    const {type, payload} = action 
    switch (type){
        case "NAME":
            state = [action.payload.name]
            return state
        case "DELETING":
            state = initailState
            return state
        default:
            return state
    }
}

export default reducer