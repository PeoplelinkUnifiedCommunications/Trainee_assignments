import React from 'react'

const CartContext = React.createContext({
    dataList: [],
    onSubmitForm: () => {},
})

export default CartContext