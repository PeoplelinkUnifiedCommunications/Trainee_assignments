import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import  Table  from "../Table";
import { Grid } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import Graph from '../Graph';
import format from "date-fns/format";
import { addMonths, addWeeks, addYears } from "date-fns";
import parseISO from "date-fns/parseISO";
import HookApiCalls from "../HookApiCalls"
import "./index.css"

const Body = () => {
  const {ApiData,loader}= HookApiCalls("http://localhost:8000/ViewsAndSells")
  const [dateRange, setDateRange] = useState("Last 1 Month");
  const [data, setdata] = useState([]);
  const [fromToDates, setFromToDates] = useState({
    to: format(new Date(), "yyyy-MM-dd"),
    from: format(addMonths(new Date(), -1), "yyyy-MM-dd"),
  });
  
  const fromDate = format(parseISO(fromToDates.from), "dd MM yyyy");

  const onChangeDate = (e) => {
    if (e.target.value === "Last 1 Week") {
      setFromToDates({
        to: format(new Date(), "yyyy-MM-dd"),
        from: format(addWeeks(new Date(), -1), "yyyy-MM-dd"),
      });
    } else if (e.target.value === "Last 1 Month") {
      setFromToDates({
        to: format(new Date(), "yyyy-MM-dd"),
        from: format(addMonths(new Date(), -1), "yyyy-MM-dd"),
      });
    } else if (e.target.value === "Last 3 Month") {
      setFromToDates({
        to: format(new Date(), "yyyy-MM-dd"),
        from: format(addMonths(new Date(), -3), "yyyy-MM-dd"),
      });
    } else if (e.target.value === "Last 6 Month") {
      setFromToDates({
        to: format(new Date(), "yyyy-MM-dd"),
        from: format(addMonths(new Date(), -6), "yyyy-MM-dd"),
      });
    } else {
      setFromToDates({
        to: format(new Date(), "yyyy-MM-dd"),
        from: format(addYears(new Date(), -1), "yyyy-MM-dd"),
      });
    }
    setDateRange(e.target.value);
  };

  const onChangeFrom = (e) => {
    setFromToDates((prev) => ({ ...prev, from: e.target.value }));
    
  };
  const onChangeTo = (e) => {
    setFromToDates((prev) => ({ ...prev, to: e.target.value }));

  };

  const getViews = (Data) => {
    const totalViews = Data.reduce((prev, curr) => prev + curr.views, 0);
    return totalViews;
  };

  const getSales = (Data) => {
    const totalSales = Data.reduce((prev, curr) => prev + curr.sales, 0);
    return totalSales;
  };

  const getUsers = (Data) => {
    const totalUsers = Data.reduce((prev, curr) => prev + curr.users, 0);
    return totalUsers;
  };

  const getProducts = (Data) => {
    const totalProducts = Data.reduce((prev, curr) => prev + curr.products, 0);
    return totalProducts;
  };

  const filterData = () => {
    const filterdData = ApiData.filter(
      (each) =>
        parseISO(each.date) > parseISO(fromToDates.from) &&
        parseISO(each.date) < parseISO(fromToDates.to)
    );
    setdata(filterdData);
  };
  

  const navigation = useNavigate()

  const NavigateTOPath = (path) => {
    navigation(`${path}`)
  }

  useEffect(()=>{
    filterData()
  },[ApiData,fromToDates,dateRange])

  if (loader) return (
    <div className='dashboardCntnr'>
       <center>
       <CircularProgress style={{position:'absolute', top:'50%', left:'50%', color:'inherit'}}/>
       </center>
    </div>
  )
  
  return (
    <div className='dashboardCntnr'>
      <div className='dashboard'>
        <h2>Dashboard</h2>
        <div>
          <label>Select Date: 
          <select defaultValue={dateRange} onChange={onChangeDate}>
            <option value='Last 1 Week'>Last 1 Week</option>
            <option value='Last 1 Month'>Last 1 Month</option>
            <option value='Last 3 Month'>Last 3 Month</option>
            <option value='Last 6 Month'>Last 6 Month</option>
            <option value='Last 1 Year'>Last 1 Year</option>
          </select>
          </label>
          <label>From:
            <input
              type='date' value={fromToDates.from} onChange={onChangeFrom} className='dateField'/>
          </label>
          <label>To:
            <input type='date' value={fromToDates.to}  onChange={onChangeTo}/>
          </label>
        </div>
      </div>
      <Grid container spacing={2} sx={{ m: 0, width: "100%" }}>
				<Grid item xs={12} sm={6} md={6} lg={3}  >
          <div className='ActiveCard' onClick={() => NavigateTOPath("views")}>
          <div className='cardImgCntnr' >
            <div className='imageBG'>
              <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868947/view_izfmz3.png" alt="logo" className='image' />
            </div>
            <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868949/wchart_chr2ub.png" alt="graph" className='image' />
          </div>
          <p className='val'>Total Views</p>
          <p className='values'>{getViews(data)}</p>
          <hr />
          <p className='val'>Start from {fromDate}</p>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} >
        <div className="InActiveCard" onClick={() => NavigateTOPath("products")}>
          <div className='cardImgCntnr'>
            <div className='imageBG'>
              <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868914/shopping-bag_qjnx2n.png" alt="logo" className='image' />
            </div>
            <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868907/rchart_yrlh9v.png" alt="graph" className='image' />
          </div>
          <p className='val'>Total Products</p>
          <p className='values'>{getProducts(data)}</p>
          <hr />
          <p className='val'>+ Add New Product</p>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} >
        <div className="InActiveCard" onClick={() => NavigateTOPath("users")}>
          <div className='cardImgCntnr'>
            <div className='imageBG'>
              <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868820/group_e5rsok.png" alt="logo" className='image' />
            </div>
            <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868788/gchart_tebmgm.png" alt="graph" className='image' />
          </div>
          <p className='val'>Total Users</p>
          <p className='values'>{getUsers(data)}</p>
          <hr />
          <p className='val'>New User Noted every week</p>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} >
        <div className="InActiveCard" onClick={() => NavigateTOPath("sells")}>
          <div className='cardImgCntnr'>
            <div className='imageBG'>
              <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868925/shopping-cart_xqqly7.png" alt="logo" className='image' />
            </div>
            <img src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868788/gchart_tebmgm.png" alt="graph" className='image' />
          </div>
          <p className='val'>Total Sells</p>
          <p className='values'>{getSales(data)}</p>
          <hr />
          <p className='val'>Start from {fromDate}</p>
        </div>
        </Grid>
        </Grid>
      <Grid container spacing={2} sx={{ mt: 2, width: "100%"}}>
			<Grid item xs={12} sm={8}>
        <Table/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="graphCntnr">
          <div className='flexRow jcBetween'>
            <h4>Views & Sales</h4>
            <p>{dateRange}</p>
          </div>
          <Graph data={data} />
          </div>
        </Grid> 
        </Grid> 
    </div>
  );
};
export default Body;