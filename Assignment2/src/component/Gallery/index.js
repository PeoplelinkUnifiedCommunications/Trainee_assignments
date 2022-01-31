import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.css'

function Gallery() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
        <div className='AppContainer-gallery'>
            <h1 className="title">Gallery</h1>
            <div style={{ width: "900px", height:"350px", backgroundColor: "transparent", padding: "10px"}}> 
                <Slider {...settings}>
                <div>
                    <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/contentimages/08-03-2021-16151871101.jpg'
                    alt='link1' className="imageEdit"/>
                </div>
                <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/gallery/29-12-2018-1546077322horse%20riding%20photo%201.jpg'
                    alt='link2' className="imageEdit"/>
                </div>
                <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/gallery/29-12-2018-1546077657photo.jpg'
                    alt='link3' className="imageEdit"/>
                </div>
                <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/gallery/29-12-2018-1546077563IMG_20170401_093721.jpg'
                    alt='link4' className="imageEdit"/>
                </div>
                <div>
                <img src='https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/6590/2020/2/27/Library%20of%20PB%20Siddhartha%20College%20of%20Arts%20and%20Science%20Vijayawada_Library_1.jpg'
                    alt='link5' className="imageEdit"/>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/28_7peYmsCA/maxresdefault.jpg" 
                    alt='link6'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/contentimages/08-03-2021-16151871101%20copy.jpg'
                    alt='link7'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://images.static-collegedunia.com/public/college_data/images/campusimage/1479706936extra2.JPG'
                    alt='link8'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://pbsiddhartha.ac.in/pbs_@admin/admin/uploads/lib08.jpg'
                    alt='link9'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://i.ytimg.com/vi/_fkiwgaKuI4/maxresdefault.jpg'
                    alt='link10'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://images.static-collegedunia.com/public/college_data/images/campusimage/1479706901eve2.JPG'
                    alt='link11'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://pbsiddhartha.ac.in/pbs_@admin/img/d379b572060d744d792881fae6adadd4.jpg'
                    alt='link12'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='https://th.bing.com/th/id/OIP.bWbvkO6y_26IqT7MWW1JRwHaHw?pid=ImgDet&rs=1'
                    alt='link13'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/gallery/29-12-2018-1546078201SREE9321%20(1).jpg'
                    alt='link14'
                    className="imageEdit"/>
                </div>
                <div>
                    <img src='http://www.pbsiddhartha.ac.in/pbs_@admin/admin/contentimages/03-10-2018-1538540364pbsiddhartha.jpg'
                    alt='link15'
                    className="imageEdit"/>
                </div>
                </Slider>
                </div>
    
        </div>
    )
}

export default Gallery
