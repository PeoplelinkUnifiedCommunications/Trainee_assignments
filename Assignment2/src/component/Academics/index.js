import React from 'react'

import CourseItem from '../CourseItem'

import './index.css'

const ListOfCourses = {
    programmes: [
        {
            name: "Under Graduate",
            id:'ug',
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrzk1I01Bu4Tk0kjl01dzNoLSOMkhhe2hdw&usqp=CAU",
            subCourses: ['B.Sc.', 'B.Com']
        },
        {
            name: "Post Graduate",
            id: 'pg',
            imageUrl: "https://i.insider.com/59a03c7d79bbfd1d008b4a6d?width=1000&format=jpeg&auto=webp",
            subCourses: ['MBA', 'MCA']
        }, 
        
    ]
}

function Academics(){

         return (
        <div className='academicsContainer'>
            <h1 className='heading'>Academics</h1>
            <div className='appContainer'>
                <ul className='ul-container'>
                    {ListOfCourses.programmes.map(eachCourse => (
                        <CourseItem courseDetails={eachCourse} key={eachCourse.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
   
}

export default Academics
