import React from 'react'
import "./style.css"
const BorrowedBooks = () => {
    const BookList = [
        {
            id: "1",
            notebook: "/images/pic3.webp",
            bookName: "Book Cover",
            role: "History"
        },
        {
            id: "2",
            notebook: "/images/pic4.webp",
            bookName: "Book Cover",
            role: "Telugu"
        },
        {
            id: "3",
            notebook: "/images/pic5.webp",
            bookName: "Book Cover",
            role: "Economics"
        },
        {
            id: "4",
            notebook: "/images/pic3.webp",
            bookName: "Book Cover",
            role: "History"
        },
        {
            notebook: "/images/pic4.webp",
            bookName: "Book Cover",
            role: "Telugu"
        },
        {
            notebook: "/images/pic5.webp",
            bookName: "Book Cover",
            role: "Economics"
        },

    ]

    return (
        <div className="flexCol respdngSM">
            <div className='flexRow pdngSM'>
                <h2>Borrowed Books</h2>
            </div>
            <div className='flexWrap inlineBlock'>
                <ul>
                    {BookList.map((item) =>
                        <li className='flexInline inlineBlock6 pdngSM'>
                            <div className='flexCol whiteBg brdrRadiusXSM pdngSM'>
                                <div className='bookCntr alignCntr justifyCntr'>
                                    <img src={item.notebook} />
                                </div>
                                <div className='flexRow pdngVSM txtColorBlack boldTxt'>
                                    {item.bookName}
                                </div>
                                <div className='flexRow'>
                                    {item.role}
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default BorrowedBooks;