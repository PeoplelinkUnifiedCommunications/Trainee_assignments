import Button from '@material-ui/core/Button';

function BookItem(props) {
    const { details, issueBook } = props
    const { _id, author, publication, title, year, issuedTo } = details

    const handleClick=()=>{
        issueBook(_id)
    }

    return (
        <li className="flexRow goastBg borderRadius mrgnVLG" key={details._id}>
            <div className="flexMinWidthCol pdngHLG mrgnVLG">
                <div className="flexRow">
                    <div className="flexMinWidthCol">
                        <p>Book Name: {title}</p>
                    </div>
                    <div className="flexAuto">
                        <p>Author : {author}</p>
                    </div>
                </div>
                <div className="flexRow">
                    <div className="flexMinWidthCol">
                        <p>Year: {year}</p>
                    </div>
                    <div className="flexAuto">
                        <p>Published by: {publication}</p>
                    </div>
                </div>
                <div className="flexRow jcCntr">
                    <div className="flexMinWidthCol">
                        <p>Requested By: {issuedTo}</p>
                    </div>
                    <div className="flexAuto">
                        <Button onClick={handleClick} variant="contained" color="primary">
                            Issue Book
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    )

}
export default BookItem