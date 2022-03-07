import React from "react";

const pagination = () => {
  let pageNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <center>
        {pageNo.map((page) => (
          <div className="pageNum"></div>
        ))}
      </center>
    </div>
  );
};

export default pagination;
