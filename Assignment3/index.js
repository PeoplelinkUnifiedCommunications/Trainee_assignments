import React, {useState} from 'react';


import './index.css'


function ExpandingCards() {
    const [lastImg, setImg] = useState("active")
    const[lastName, setName] = useState("after")

    const [click, onclick] = useState(true)
    const [click1, onclick1] = useState(false)
    const [click2, onclick2] = useState(false)
    const [click3, onclick3] = useState(false)
    const [click4, onclick4] = useState(false)

    const expandCard = () =>{
        onclick(!click)
        setImg("inactive")
        setName("before")
    }
    
    const expandCard1 = () =>{
        onclick1(!click1)
    }
    
    const expandCard2 = () =>{
        onclick2(!click2)
    }
    
    const expandCard3 = () =>{
        onclick3(!click3)
    }
    
    const expandCard4 = () =>{
        onclick4(!click4)
    }

  return(
      <div className='exapand-app-container '>
          <div className={lastImg} onClick={expandCard} style={{backgroundImage: `url("https://www.desktopbackground.org/download/1280x1024/2011/01/28/149250_top-photography-nature-hd-background-images-for-pinterest_1920x1080_h.jpg")`}}>
              <h3 className={lastName}>Leaf Image</h3>
          </div>
          <div className={click1 ? `active` : `inactive`} onClick={expandCard1} style={{backgroundImage: `url("https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/10/Karthika-Gupta-Compelling-Nature-Photos-6.jpg?fit=1500%2C1000&ssl=1")`}}>
              <h3 className={click1 ? `after` : `before`}>Butterfly Image</h3>
          </div>
          <div className={click2 ? `active` : `inactive`} onClick={expandCard2}  style={{backgroundImage: `url("https://i.pinimg.com/originals/b5/64/14/b564148381bff0942c53f91cc22392fb.jpg")`}}>
              <h3 className={click2 ? `after` : `before`}>Flower</h3>
          </div>
          <div className={click3 ? `active` : `inactive`} onClick={expandCard3}  style={{backgroundImage: `url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80")`}}>
              <h3 className={click3 ? `after` : `before`} >Beach Image</h3>
          </div>
          <div className={click4 ? `active` : `inactive`} onClick={expandCard4}  style={{backgroundImage: `url("https://img.freepik.com/free-photo/eurasian-wolf-white-winter-habitat-beautiful-winter-forest_475641-702.jpg?size=626&ext=jpg&ga=GA1.2.1546423456.1640304000")`}}>
              <h3 className={click4 ? `after` : `before`} >Wolf Image</h3>
          </div>
      </div>
  )
}

export default ExpandingCards;
