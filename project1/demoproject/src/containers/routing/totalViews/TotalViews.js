import React from "react";
import { useNavigate } from "react-router-dom";
import FetchApi from "../../customHook/fetchApi";
import CircularProgress from '@mui/material/CircularProgress';


const TotalViews = () => {
  const { ApiData,loader } = FetchApi("http://localhost:5000/viewsData");
  

  const navigation = useNavigate();

  const NavigateToSingle = (id) => {
    navigation(`/views/${id}`);
  };

  if(loader) return(
    <div className='dashBoardCntnr'>
     <CircularProgress  style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}/>
    </div>)

  return (
    <div className="dashBoardCntnr">
      <div className="flexcol">
        <div className="flexRow jcBetween">
          <h1>ID</h1>
          <h1>Product Name</h1>
          <h1>Views</h1>
        </div>
        {ApiData &&
          ApiData.map((each) => {
            const NavigateToItem = () => {
              NavigateToSingle(each.id);
            };
            return (
              <div onClick={NavigateToItem}>
                <div className="flexRow jcBetween brdrBottomSM">
                  <h1>{each.id}</h1>
                  <h1>{each.product}</h1>
                  <h1>{each.views}</h1>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default TotalViews;
