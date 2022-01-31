import React from 'react'

import {Link} from 'react-router-dom'

import './index.css'

function CourseItem(props) {
    const {courseDetails} = props
    const {name, id, imageUrl, subCourses} = courseDetails

    return (
        <div>
            <li key={props.courseDetails.id} className='programme-container'>
                <div>
                        <img src={imageUrl}
                         className='course-image' alt={`${name}`}/>
                    </div>
                    <div>
                        <h1 className='course-heading'>{name}</h1>
                    </div>
                    <div className='academic-lists'>
                        <ul>
                            {subCourses.map(course=>(
                                <li key={course} className='course-item'>
                                    <Link to={`/academics/${id}/${course}`} className='course-programme'>
                                        {course}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
        </div>
    )
}

export default CourseItem
