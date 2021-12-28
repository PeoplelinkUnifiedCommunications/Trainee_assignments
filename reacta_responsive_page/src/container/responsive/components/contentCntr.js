import React from 'react'
import '../../../stylesheets/contentCntr.css'
const ContentCntr = () => {
    return (
        <>
            <div className='ContentCntr mainCntnr pdngSM '>
                {/* <div className='rowFlex article'>
                <h1 className=''>Article</h1>
                </div>
              */}
               <div className='rowFlex cntrIMG resColRow '>
                    {/* <h1 className='article'>Article</h1> */}
                   <div className='card pdngSM'>
                   <img src='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_960_720.jpg' alt=''  className='images'/>
                   </div>
                   <div className='card pdngSM'>
                   <img src='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_960_720.jpg' alt=''  className='images'/>
                   </div>
                   <div className='card pdngSM'>
                   <img src='https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_960_720.jpg' alt=''  className='images'/>
                   </div>
                </div>
            </div>
                
        </>
    )
}

export default ContentCntr;
