import './styles.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function EachBookItem(props) {
    const { details, totalView, closeView , viewList} = props
    const { _id, title , bookId,imageLink, author, description ,publication} = details

    const addView=()=>{
        totalView(_id)
        console.log("viewList", viewList)
        
    }

    const removeView=()=>{
        closeView(_id)
        console.log("viewList", viewList)
    }
    const show = viewList.includes(_id)

    return (
        <div key={_id} className="flexRow mrgnVMD goastBg pdngSM listItem">
            <div className="mrgnRLG flexAuto bookImageDiv">
                <img src={imageLink} alt="bookImage"/>
            </div>
            <div className="mrgnRLG flexMinWidthCol">
                <div className="flexRow jcSpaceBtw">
                    <p className='ellipsisTxt'>{`Title    : ${title}`}</p>
                    {show ? <button className="noBorder inheritBg fontLG" onClick={removeView}>{<ExpandLessIcon/>}</button> : 
                    <button className="noBorder inheritBg fontLG" onClick={addView}>{<ExpandMoreIcon/>}</button>}
                </div>
                <p>{`Book Id  : ${bookId}`}</p>
                <p>{`Author   : ${author}`}</p>
                {show && <p className="descHalfWidth">{`Description  :${description}`}</p>}
                {show && <p className="descHalfWidth">{`Publication :${publication}`}</p>}
            </div>
            
        </div>
    )

}
export default EachBookItem