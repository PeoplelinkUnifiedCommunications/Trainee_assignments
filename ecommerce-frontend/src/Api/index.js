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

export const getProductsList = async ()=>{
	const data = await api.get('/getProductsList/')
	return data
}

export const addProductToCart = async (value)=>{
	const data = await api.post('/addProductToCart/',value)
	return data
}


export const getCartList = async ()=>{
	const data = await api.get('/getCartProductsList/')
	return data
}