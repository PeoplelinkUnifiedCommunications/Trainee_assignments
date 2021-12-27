
const initailState = []

const reducers = (state=initailState, action) =>{
    const {type, payload} = action 
    switch (type){
        case "ADD":
            return [...state, payload]
        case "DELETING":
            return state.filter((each)=>each.id !== payload)
        default:
            return state
    }
}

export default reducers