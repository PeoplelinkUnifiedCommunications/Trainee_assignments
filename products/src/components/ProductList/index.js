import { useNavigate } from "react-router-dom";
const ProductList=(props)=>{
    const {List}=props
    const navigation=useNavigate()
    const {id,title,price,category}=List
    const NavigateToSingle=()=>{
        navigation(`/products/${id}`)
    }
    return(
        <li className="list-item" onClick={NavigateToSingle}>
            <p className='item'>{id}</p>
            <p className='title'>{title}</p>
            <p className='price'>{price}</p>
            <p className='category'>{category}</p>
        </li>
    )
}
export default ProductList