import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useState } from 'react';
import './index.css'

function Carousel() {

    const [activeTab, setActiveSlide] = useState(1)

    const slidePrevious = () => {
        if (activeTab === 1) {
            setActiveSlide(1)
        } else {
            setActiveSlide(activeTab - 1)
        }
    }

    

    const slideNext=()=>{
        if (activeTab === 3) {
            setActiveSlide(3)
        } else {
            setActiveSlide(activeTab + 1)
        }
    }

    return (
        <div className='carousal-bg'>
            <div>
                <button onClick={slidePrevious} type="button"><ArrowBackIosIcon /></button>
            </div>
            <div className={activeTab === 1 ? "active" : "Inactive"}>
                <h1>hai</h1>
            </div>
            <div className={activeTab === 2 ? "active" : "Inactive"}>
                <h1>hai2</h1>
            </div>
            <div className={activeTab === 3 ? "active" : "Inactive"}>
                <h1>hai3</h1>
            </div>
            <div >
                <button onClick={slideNext} type="button"><ArrowForwardIosIcon /></button>
            </div>
        </div>

    )
}
export default Carousel


