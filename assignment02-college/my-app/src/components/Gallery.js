import React from 'react'
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import './Gallery.css';

function Gallery() {
    return (
        <div className="total">
            <div className="total-container">
                <div className="image-container">
                    <img src={image1} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image2} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image3} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image4} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image5} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image6} alt="name" className="image"/>
                </div>
                <div className="image-container">
                    <img src={image7} alt="name" className="image"/>
                </div>
                </div>
        </div>
    )
}

export default Gallery
