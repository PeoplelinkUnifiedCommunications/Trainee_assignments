const initialState ={
    searchValue:"",
    slots:0,
    updatedData:{},
    dataList:[]
}

const data = (state=initialState,action)=>{
    
    switch(action.type){
        case "SET_SLOT":
            state = {
                searchValue:state.searchValue,
                slots:action.payload,
                updatedData:state.updatedData,
                dataList:state.dataList
            }
          return state
          case "ADD_DATA":
            state = {
                searchValue:state.searchValue,
                slots:state.slots,
                updatedData:state.updatedData,
                dataList:[...state.dataList,action.payload]
            }
              return state
        case "SEARCH":
            state = {
                searchValue:action.payload,
                slots:state.slots,
                updatedData:state.updatedData,
                dataList:state.dataList
            }
            return state
        case "DELETE":
            state = {
                searchValue:state.searchValue,
                slots:state.slots,
                updatedData:[],
                dataList:state.dataList.filter(each=>each.id!==action.payload)
            }
            return state
        case "UPDATE":
            state = {
                searchValue:state.searchValue,
                slots:state.slots,
                updatedData:{
                    id:action.payload.id,
                    ownerName:action.payload.ownerName,
                    regNumber:action.payload.regNumber,
                    color:action.payload.color,
                    slotNumber:action.payload.slotNumber
                },
                dataList:state.dataList
            }
            return state
        case "UPDATE_DATA":
            console.log(action.payload)
            state = {
                searchValue:state.searchValue,
                slots:state.slots,
                updatedData:[],
                dataList:state.dataList.filter((each)=>
                each.id === action.payload.id ? Object.assign(each,action.payload):each)
            }
            console.log(state.dataList)
            return state
        default:
            return state

    }
}
export default data