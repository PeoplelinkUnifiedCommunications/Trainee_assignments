import Button from '@material-ui/core/Button';

function EachRequestedBook(props) {
    const { details, deleteRequest } = props
    const { _id, title, bookId, imageLink, author, publication } = details

    const handleDelete = () => {
        deleteRequest(_id)
    }

    return (
        <div key={_id} className="flexRow mrgnVMD goastBg pdngSM listItem">
            <div className="mrgnRLG flexAuto bookImageDiv">
                <img src={imageLink} alt="bookImage" />
            </div>
            <div className="mrgnRLG flexMinWidthCol">
                <div className="flexRow jcSpaceBtw">
                    <p className='ellipsisTxt'>{`Title    : ${title}`}</p>
                </div>
                <p>{`Book Id  : ${bookId}`}</p>
                <p>{`Author   : ${author}`}</p>
                <p>{`Publication  : ${publication}`}</p>
                <div>
                    <Button onClick={handleDelete} variant="contained" color="secondary">
                        Cancle Request
                    </Button>
                </div>
            </div>

        </div>
    )

}
export default EachRequestedBook