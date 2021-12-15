import React from 'react'

const context = React.createContext({
    dataList: [],
    onSubmitForm: () => {},
})

export default context