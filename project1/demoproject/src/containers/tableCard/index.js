import FetchApi from '../customHook/fetchApi'
import CircularProgress from '@mui/material/CircularProgress';

import "./index.css";

const Table = () => {
    const {ApiData, loader} = FetchApi('http://localhost:5000/table')
    console.log(ApiData)


    if(loader) return(
      <div className='tableCntnr flexRow jcCntr alignCntr'>
       <CircularProgress/>
      </div>)
    
  return (
    
    <div className="tableCntnr">
      <table className="tableRowGap">
        <tbody>
          <tr className="trow" >
            <th className="number column">No</th>
            <th className="pName column" >Product Name</th>
            <th className="status column">Status</th>
            <th className="sold column">Sold</th>
            <th className="view column">View</th>
          </tr>
          {ApiData && ApiData.map((each) => (
            <tr key={each.id}>
              <td className="mrgnBtm row">{each.id}</td>
              <td className='row'>
              <div className='flexRow jcCntr alignCntr'>
                   <img src={each.photo} className='imgSize' alt="tablelogo" />
                   <p>{each.photoinfo}</p>
              </div>
              </td>
              <td className='row'>{each.status}</td>
              <td className='row'>{each.sold}</td>
              <td className='row'>{each.view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
