import React from "react"

const DataContext= React.createContext({
    list:[],
    addList:()=>{}
})

export default DataContext