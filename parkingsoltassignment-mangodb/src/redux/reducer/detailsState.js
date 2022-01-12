
const initialState ={
    updatedData:{},
}

const data = (state=initialState,action)=>{
    
    switch(action.type){
        case "UPDATE":
            state = {
                updatedData:{
                    id:action.payload.id,
                    ownerName:action.payload.ownerName,
                    regNumber:action.payload.regNumber,
                    color:action.payload.color,
                    slotNumber:action.payload.slotNumber
                }
            }
            return state
        default:
            return state

    }
}
export default data