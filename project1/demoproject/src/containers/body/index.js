import React, { useState, useEffect } from "react";
// import axios from 'axios'
import "./index.css";
import Table from "../tableCard";
import Graph from "../grapgh";
import { useNavigate } from "react-router-dom";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { addMonths, addWeeks, addYears } from "date-fns";
import viewsAndSales from "../viewAndSales.json";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";


const Body = () => {
  const [dateRange, setDateRange] = useState("Last 1 Month");

  const [data, setdata] = useState([]);
  
  const [fromToDates, setFromToDates] = useState({
    to: format(new Date(), "yyyy-MM-dd"),
    from: format(addMonths(new Date(), -1), "yyyy-MM-dd"),
  });

  const fromDate = format(parseISO(fromToDates.from), "dd MMM yyyy");

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

  const getViews = (filterdData) => {
    const totalViews = filterdData.reduce((prev, curr) => prev + curr.views, 0);
    return totalViews;
  };

  const getProducts = (filterData) => {
    const totalProducts = filterData.reduce(
      (prev, curr) => prev + curr.products,
      0
    );
    return totalProducts;
  };
  const getUsers = (filterData) => {
    const totalUsers = filterData.reduce((prev, curr) => prev + curr.users, 0);
    return totalUsers;
  };

  const getSales = (filterdData) => {
    const totalSales = filterdData.reduce((prev, curr) => prev + curr.sales, 0);
    return totalSales;
  };

  const filterData = () => {
    const filterdData = viewsAndSales.filter(
      (each) =>
        parseISO(each.date) > parseISO(fromToDates.from) &&
        parseISO(each.date) < parseISO(fromToDates.to)
    );
    setdata(filterdData);
  };

  useEffect(() => {
    filterData();
  }, [fromToDates, dateRange]);

  const navigation = useNavigate();

  const NavigateTOPath = (path) => {
    navigation(`${path}`);
  };

  // const [bodydata, setBodyData] = useState([])

  //   const getName=async()=>{
  //   const url="http://localhost:5000/cardData";
  //   await axios.get(url)
  //   .then(resp=>setBodyData(resp.data))
  // }

  // useEffect(()=>{
  //   getName()
  // },[])

  // let data=[{id:1,imgVal:eye,graph:wgraph,views:360.402,date:"Start from jan1 2021"},
  //           {id:2,imgVal:bag,graph:rgraph,views:10.820,date:"+ Add New Product"},
  //           {id:3,imgVal:friends,graph:ggraph,views:8.425,date:"New user noted every week"},
  //           {id:4,imgVal:cart,graph:ggraph,views:1.028623,date:"Start from 1 Jan 2021"}]

  return (
    <div className="dashBoardCntnr">
      <div className="filter">
        <h1>Dashboard</h1>
        <div>
          <span>Select Date: </span>
          <select defaultValue={dateRange} onChange={onChangeDate}>
            <option value="Last 1 Week">Last 1 Week</option>
            <option value="Last 1 Month">Last 1 Month</option>
            <option value="Last 3 Month">Last 3 Month</option>
            <option value="Last 6 Month">Last 6 Month</option>
            <option value="Last 1 Year">Last 1 Year</option>
          </select>
          <label>
            {" "}
            From:{" "}
            <input
              type="date"
              value={fromToDates.from}
              onChange={onChangeFrom}
              className="dateField"
            />
          </label>
          <label>
            {" "}
            To:{" "}
            <input
              type="date"
              value={fromToDates.to}
              onChange={onChangeTo}
              className="dateField"
            />
          </label>
        </div>
      </div>
      
      <Grid
        container
        spacing={2}
        sx={{ mt: 1, width: "100%" }}
        className="jcBetween"
      >
        <Grid item xs={12} sm={6} md={6} lg={3}>
		<Card>
          <div className="actcardCntnr" onClick={() => NavigateTOPath("views")}>
            <div className="cardImages">
              <div className="imageBg">
                <img
                  src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868947/view_izfmz3.png"
                  alt="logo"
                  className="imageSize"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868949/wchart_chr2ub.png"
                alt="graph"
                className="imageSize"
              />
            </div>
            <p className="fontSize">Total Views</p>
            <p className="viewsFontSize">{getViews(data)}</p>
            <hr />
            <p className="fontSize"> Start from {fromDate}</p>
          </div>
		  </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
		<Card>
          <div
            className="inActcardCntnr"
            onClick={() => NavigateTOPath("products")}
          >
            <div className="cardImages">
              <div className="imageBg">
                <img
                  src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868914/shopping-bag_qjnx2n.png"
                  alt="logo"
                  className="imageSize"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868907/rchart_yrlh9v.png"
                alt="graph"
                className="imageSize"
              />
            </div>
            <p className="fontSize">Total Products</p>
            <p className="viewsFontSize">{getProducts(data)}</p>
            <hr />
            <p className="fontSize">+ Add New Product</p>
          </div>
		  </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
		<Card>
          <div
            className="inActcardCntnr"
            onClick={() => NavigateTOPath("users")}
          >
            <div className="cardImages">
              <div className="imageBg">
                <img
                  src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868820/group_e5rsok.png"
                  alt="logo"
                  className="imageSize"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868788/gchart_tebmgm.png"
                alt="graph"
                className="imageSize"
              />
            </div>
            <p className="fontSize">Total Users</p>
            <p className="viewsFontSize">{getUsers(data)}</p>
            <hr />
            <p className="fontSize">New User Noted every week</p>
          </div>
		  </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
		<Card>
          <div
            className="inActcardCntnr"
            onClick={() => NavigateTOPath("sells")}
          >
            <div className="cardImages">
              <div className="imageBg">
                <img
                  src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868925/shopping-cart_xqqly7.png"
                  alt="logo"
                  className="imageSize"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868788/gchart_tebmgm.png"
                alt="graph"
                className="imageSize"
              />
            </div>
            <p className="fontSize">Total Sells</p>
            <p className="viewsFontSize">{getSales(data)}</p>
            <hr />
            <p className="fontSize">Start from {fromDate}</p>
          </div>
		  </Card>
        </Grid>
      </Grid>
      <div className="tbleGrpCntnr">
	  <Grid container spacing={2} sx={{ mt: 2, width: "100%" }}>
		<Grid item xs={12} sm={8}>
        <Table />
		</Grid>
		<Grid item xs={12} sm={4}>
        <Graph graphData={data} />
		</Grid>
		</Grid>
      </div>
    </div>
  );
};

export default Body;
