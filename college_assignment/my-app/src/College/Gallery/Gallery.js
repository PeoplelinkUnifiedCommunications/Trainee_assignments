import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <div className='gallery_container'>
            <div className='top_img'>  
                <img src="https://www.collegesignal.com/images/colleges/cz_5943794e6cce8171610/cover/ace_cover-m6239-original.png"/>
            </div>
            <div className='pics'>
                <img className='images' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6O1wC7nOgiq2CTvS4icK_Np-yHJ--1iw7w&usqp=CAU"/>
                <img className='images' src="https://i.ytimg.com/vi/GOpGahytvr8/maxresdefault.jpg"/>
                <img className='images' src="https://www.aceec.ac.in/wp-content/uploads/2021/08/CSE-Microsoft.jpg"/>
            </div>
            <div className='pics'>
                <img className='images' src="https://docme.sgp1.digitaloceanspaces.com/acetvm/2019/11/WhatsApp-Image-2019-11-28-at-11.15.54-AM.jpeg"/>
                <img className='images' src="https://docme.sgp1.cdn.digitaloceanspaces.com/acetvm/2016/04/Binder1_Page_39.jpg" />
                <img className='images' src="https://3.imimg.com/data3/PU/RJ/MY-10256254/aeronautical-engineering-250x250.jpg"/>
            </div> 

        </div>
    )
}

export default Gallery;