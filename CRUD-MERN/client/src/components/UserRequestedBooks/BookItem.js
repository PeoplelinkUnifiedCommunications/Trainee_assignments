import Button from '@material-ui/core/Button';

function BookItem(props){
    const {details, deleteBook} = props
    const {_id, author, publication, title, year} = details

    const deleteRequest=()=>{
        deleteBook(_id)
    }

    return(
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
                    <div className="flexAuto">
                        <Button onClick={deleteRequest} variant="contained" color="primary">
                            Delete Request
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    )
    
}
export default BookItem