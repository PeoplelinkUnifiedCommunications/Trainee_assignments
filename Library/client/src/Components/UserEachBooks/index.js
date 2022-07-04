import Button from '@material-ui/core/Button';

function UserEachBooks(props) {
    const { details, request } = props
    const { author, bookId, imageLink, title, _id } = details

   const requestBook=()=>{
      request(_id)
   }


    return (
        <div key={_id} className="flexRow mrgnVMD goastBg pdngSM">
            <div className="mrgnRLG flexAuto bookImageDiv">
                <img src={imageLink} alt="bookImage" />
            </div>
            <div className="mrgnRLG flexMinWidthCol">
                <p className='ellipsisTxt'>{`Title    : ${title}`}</p>
                <p>{`Book Id  : ${bookId}`}</p>
                <p>{`Author   : ${author}`}</p>
                <div>
                    <Button onClick={requestBook} variant="contained" color="primary">
                        Request Book
                    </Button>
                </div>
            </div>

        </div>
    )

}
export default UserEachBooks