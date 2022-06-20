import {Link} from 'react-router-dom'
import './styles.css'

function LibraryHome(){
   return(
    <div className="flexRow fullHeight bg-gostwhite">
        <div className="flexAuto">
           <div className="flexCol mrgnHLG alignCntr navMinWidth whiteBg">
                <Link className='linkElement pdngVLG mrgnHLG' to="/">Home</Link>
                <Link className='linkElement pdngVLG mrgnHLG' to="/">Books</Link>
                <Link className='linkElement pdngVLG mrgnHLG' to="/">New Books</Link>
                <Link className='linkElement pdngVLG mrgnHLG' to="/">Returned Books</Link>
           </div>
        </div>
        <div className="flexMinWidthCol">
            <h1>Content</h1>
        </div>
    </div>
   )
}
export default LibraryHome