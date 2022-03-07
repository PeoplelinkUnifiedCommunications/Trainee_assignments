import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FetchApi from "../../customHook/fetchApi";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

const TotalProducts = () => {
  const { loader, ApiData } = FetchApi("http://localhost:5000/productData");

  const [product, setProduct] = useState("");
  const [count, setCount] = useState("");
  const [show, setShow] = useState(ApiData.length===0);
 
  const postData = async (e) => {
    e.preventDefault();
    const newProduct = { product, count };
    await axios.post("http://localhost:5000/productData", newProduct);
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/productData/${id}`);
  };

  useEffect(()=>{
    if (ApiData.length===0){
      setShow(true)
    }else{
      setShow(false)
    }
  },[ApiData])

  if (loader)
    return (
      <div className="dashBoardCntnr">
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "inherit",
          }}
        />
      </div>
    );

  const ChangeShow = () => {
    setShow(false);
  };

  

  return (
    <div className="dashBoardCntnr">
      {show && (
        <div>
          <center>
            <h1>NO DATA FOUND</h1>
            <Button variant="contained" onClick={ChangeShow}>
              Back
            </Button>
          </center>
        </div>
      )}
      {!show && (
        <div className="flexCol" style={{ width: "100%" }}>
          <form
            className="flexRow jcBetween"
            onSubmit={postData}
            style={{ marginBottom: "1rem", fontsize: "1.5rem" }}
          >
            <label>
              Product Name:
              <input
                type="text"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </label>
            <label>
              Count:
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </label>
            <button type="submit">ADD</button>
          </form>

          <div className="flexRow jcBetween">
            <h1>ID</h1>
            <h1>ProductName</h1>
            <h1>TotalItems</h1>
            <h1>UPDATE</h1>
            <h1>DELETE</h1>
          </div>
          <hr />
          {ApiData &&
            ApiData.map((each) => {
              const delData = () => {
                deleteData(each.id);
              };
              return (
                <div key={each.id}>
                  <div className="flexRow jcBetween brdrBottomSM">
                    <h1>{each.id}</h1>
                    <h1>{each.product}</h1>
                    <h1>{each.count}</h1>
                    <h1>
                      <EditIcon />
                    </h1>
                    <h1 onClick={delData}>
                      <DeleteIcon />
                    </h1>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default TotalProducts;
