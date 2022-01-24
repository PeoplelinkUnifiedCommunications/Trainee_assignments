// import {useState , useEffect} from 'react'
// import {login} from '../../Api'

import CreateProductItem from '../../components/CreateProductItem'
import ProductsList from '../../components/ProductsList'
import CartList from '../../components/CartList'
import './index.css'

const Content = props=>{
   
   
   
    const renderCreateProductComponent = ()=>{
        return(
            <div>
                <CreateProductItem/>
            </div>
        )
        
    }

    const renderProductListView = ()=>{
        return(
            <div>
                <ProductsList/>
            </div>
        )
        
    }

    const renderCartView = ()=>{
        return(
            <div>
                <CartList/>
            </div>
        )
        
    }
    

    const renderDefaultComponent=()=>{
        return(
            <div className="default-container">
                 <h1>Hi, Welcome to E-commerce Application</h1>
                 <p>Please Select from the left navigation bar to create a product or to view the products and add to cart</p>
            </div>
           
        )
       
    }

    const renderContent = () =>{
        switch (props.componentName) {
            case "create-product":
                return renderCreateProductComponent()
            case "product-list":
                return renderProductListView()
            case "cart":
                return renderCartView()
            default:
                return renderDefaultComponent()
        }
    }
    return(
        <div className="data-view-container">
            <div className="data-view-content">
                {renderContent()}
            </div> 
        </div>  
    )    
}

export default Content