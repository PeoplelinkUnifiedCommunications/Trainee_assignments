import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3004/",
});


export const login = async (value)=>{
	const data = await api.post("/login/",value)
	return data
}

export const addProduct = async (value)=>{
	const data = await api.post('/addProduct/',value)
	return data
}

export const getProductItem = async (id)=>{
	const data = await api.get(`/getProductItem/${id}`)
	return data
}

export const getProductsList = async ()=>{
	const data = await api.get('/getProductsList/')
	return data
}

export const addProductToCart = async (value)=>{
	const data = await api.post('/addProductToCart/',value)
	return  data
}


export const getCartList = async ()=>{
	const data = await api.get('/getCartProductsList/')
	const dataList = await data.data
	return dataList
}

export const deleteCartItem = async (id)=>{
	await api.delete(`/deleteCartItem/${id}`)
	const dataList  = getCartList()
	return dataList
}

export const updateCartQuantity = async (id,value)=>{
	await api.put(`updateCartQuantity/${id}`,value)
	const dataList  = getCartList()
	return dataList
}

export const updateFavorites=async (id,value)=>{
	const data  = await api.put(`updateFavorites/${id}`,value)
	console.log(data)
	return data	
}