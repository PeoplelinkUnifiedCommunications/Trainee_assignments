import Popup from 'reactjs-popup'
import PopupPage from "../PopupPage"
import "./index.css"

const ProductCard=(props)=>{
    const {dataList}=props
    const {id,manufacturer_name,name,ef,logo,logo1,banner_logo,base_price,Federal_tax,Utility_incentives,Equipment_cost,your_annual_saving_is}=dataList
    return(
        <div classame="card-container">
            <div className="card-header-container">
              <div style={{marginRight:"40px"}} >
                  <h4 style={{marginBottom:"0px"}}>{manufacturer_name}</h4>
                  <h5 style={{marginTop:"0px"}}>{name}</h5>
              </div>
              <div className="images">
                  <p>{ef}</p>
                  <img src={logo} alt="imp" />
                  <img src={logo1} alt="logo" />
              </div>
            </div>
            <div className="card-bottom-container">
                <div className="image-container">
                <img className="banner" src={banner_logo} alt="banner" />
                <ul className="unorder">
                    <li>Leak detection with auto water shut-of</li>
                    <li>Control from your smart phone</li>
                    <li>Multiple operating modes</li>
                    <li>10 year manufacturer warranty</li>
                </ul>
                </div>
                <hr/>
                <div>
                    <h4>Base Price {base_price}</h4>
                    <p>(Installation not included)</p>
                    <div className="price-order">
                    <p>Federal Tax Credit</p>
                    <img src={logo} alt="imp" />
                    <p>{Federal_tax}</p>
                    </div>
                    <div className="price-order">
                    <p>Utility Incentives</p>
                    <img src={logo} alt="imp" />
                    <p>{Utility_incentives}</p>
                    </div>
                    <div className="price-order">
                    <h4>Equipment Cost</h4>
                    <img src={logo} alt="imp" />
                    <p>{Equipment_cost}</p>
                    </div>
                    <p className='saving'>
					Your Est. Annual Saving is <span>{your_annual_saving_is}</span>{" "}
					<img src={logo} alt='info' />
				    </p>
                    <div className='buttonDiv'>
					<button type='button' className='quote'>
						Get Insatll Quote
					</button>
				    </div>
                </div>
                <Popup modal trigger={
                <div className="buttonDiv">
                    <button >View More Details</button>
                </div>
            } >
                {close => (
                    <div className="close" style={{display:"flex"}}>
                        <PopupPage value={dataList}  />
                        <button  onClick={() => close()}>x</button><br />
                    </div>
                )}
            </Popup>
            </div>
        </div>
    )
}
export default ProductCard;