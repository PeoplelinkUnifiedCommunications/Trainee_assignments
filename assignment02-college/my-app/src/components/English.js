import React from 'react'
import './CivilEngineering.css'
import english from './english.jpg'

function English() {
    return (
        <div>
             <div className="data-container">
            <div>
            <h1 className="civil-header">English Language and Literature Degrees</h1>
            <div className="civil-image">
                <img src={english} alt="civil" className="civil"/>
            </div>
            <h2 className="para">About Department</h2>
            <div>
                <p className="paragraphs"s>A degree in English language and literature is designed to get you reading books, analyzing theories, critiquing prose and verse, and taking a more critical look at the signs and words surrounding us every day. The aim is to get students thinking creatively and analytically about the English language; this differs from other modern language degrees as it is intended for students already proficient in written and spoken English. An English degree can focus equally on the literature and language sides, while others specialize in one or the other; this will usually be clear from the course title.
</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default English
