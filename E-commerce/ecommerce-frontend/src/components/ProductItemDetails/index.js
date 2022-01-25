import {useState,useEffect,} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import { addProductToCart, getProductItem, updateFavorites } from '../../Api'
import NavBar from '../../components/Navbar'
import LeftNavigationBar from "../LeftNavigationBar"
import { AiOutlineHeart,AiFillHeart,AiOutlineClose  } from "react-icons/ai";

import './index.css'


const ProductItemDetails=(props)=>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [data,setData] = useState({})
    

    
    const getProductItemDetails = async ()=>{
        const response =await  getProductItem(id)
        setData(response.data)
    }

    useEffect(()=>{
         const fetch = getProductItemDetails()
         return fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
    

        const [count,setCount] = useState(1)
        const [msg,setMsg] = useState("")

        useEffect(()=>{
             if(data.quantity-count===0){
                setMsg("out of stock")
            }else if (data.quantity-count<=5 && data.quantity-count>=0){
                setMsg(`Hurry ${data.quantity-count} only left`)
            }
        },[count,data.quantity])
        
        const decreaseCount=()=>{
            if (count > 1){
                setCount(count-1)
            }
        }

        const increaseCount=()=>{
            if (count < data.quantity){
                setCount(prev =>prev+1)
            }else{
                setCount(count)
            }
        }

        const onClickAddToCart= ()=>{
            const {_id,product_name,
                product_image_url,
                retail_price,
                quantity,
                favorites,
                description} = data
            const value = {_id,product_name,
                product_image_url,
                retail_price,
                selected_quantity:count,
                quantity,
                favorites,
                description
            }
            addProductToCart(value)
            alert("product added to cart")
        }

        const updateFavorite=async ()=>{
            const value={
                favorites:!data.favorites
            }
            await updateFavorites(data._id,value)
            if(!data.favorites){
                alert("product added to favorites")
            }else{
                alert("product removed from favorites")
            }
        }

    return(
        
    <div className="home-container">
            <NavBar/>
            <div className="home-content">
                <LeftNavigationBar/>
                <div className="product-item-details">
                    <img src={data.product_image_url} alt="product" className="thumbnail-details" />
                    <div className="product-item-content-details">
                    <div className="fav-icon-container">
                    <button className="button-icon" onClick={updateFavorite}>
                    {!data.favorites&& <AiOutlineHeart size="28px"/>} 
                    {data.favorites &&<AiFillHeart color="red" size="28px"/>}
                    </button>
                        
                        <button className="button-icon" onClick={()=>navigate("/productsList")}><AiOutlineClose size="28px"/></button>
                    </div>
                    <div>
                    <h1 className="title-details">{data.product_name}</h1>
                        <p className="price-details">Rs {data.retail_price  * count}/-</p>
                        <div className="quantity-container-details">
                            <button type="button" onClick={decreaseCount}>-</button>
                            <p className="count">{count}</p>
                            <button type="button" onClick={increaseCount}>+</button>
                        </div>
                        {msg===""?<p className="available">Stock Available</p>:<p className="message">{msg}</p>}
                        <p className="description-details"><span className="description-heading">Description:</span> {data.description}</p>
                        <ul>
                            <li>64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps.</li>
                            <li>6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi</li>
                            <li>Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system.</li>
                            <li>Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM.</li>
                            <li>Chipset: Qualcomm Snapdragon 750G 5G mobile platform with an octa-core processor, Kryo 570 CPU (20% improvement from predecessor), and an Adreno 619 GPU (10% improved graphics performance from predecessor).</li>
                            <li>Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go.</li>
                        </ul>
                    </div>
                        <button type="button" className="add-to-cart" onClick={onClickAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>   
        )
}

export default ProductItemDetails