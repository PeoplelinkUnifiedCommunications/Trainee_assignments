
// import React,{ useState, useEffect ,useMemo} from 'react';
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// import axios from 'axios';

// const TableData=()=> {

//     const [dataSet,setTableData]=useState([])
//   useMemo(()=>{
//     const getData=async()=>{
//       const url="http://localhost:8000/tableData";
//       await axios.get(url)
//       .then(resp=>setTableData(resp.data))
//     };
//     getData()
//   },[])

// 	//const keys = dataSet.map((each) => Object.keys(each));
//     const keys=[{id:1,title:"No",field:"id"},{id:2,title:"Product Name",field:"text"},
//                 {id:3,title:"Status",field:"status"},{id:4,title:"Sold",field:"sold"},{id:5,title:"View",field:"view"}]

//     console.log(dataSet)
//     console.log(keys)
// 	return (
// 		<Paper sx={{ width: "100%", overflow: "hidden" }}>
// 			<TableContainer sx={{ maxHeight: 600 }}>
// 				<Table stickyHeader aria-label='sticky table'>
// 					<TableHead>
// 						<TableRow className='tableheader'>
// 							{keys.map((each) => (
// 								<TableCell
// 									key={each.id}
// 									align='center'>
// 									{each.title}
// 								</TableCell>
// 							))}
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{dataSet && dataSet.map((row) => {
// 							return (
// 								<TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
// 									{keys.map((column) => {
// 										const value = row[column.field];
// 										return (
// 											<TableCell key={column.id} align='center'>
// 												{value}
// 											</TableCell>
// 										);
// 									})}
// 								</TableRow>
// 							);
// 						})}
// 					</TableBody>
// 				</Table>
// 			</TableContainer>
// 		</Paper>
// 	);
// }
// export default TableData;


import React  from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import HookApiCalls from '../HookApiCalls';
const Table = () => {
  const {ApiData,loader}= HookApiCalls("http://localhost:8000/tableData")
  if (loader) return (
    <div className='tableCntnr flexRow jcCntr alignCntr '> 
       <CircularProgress />
    </div>
  )
  return (
    <div className='tableCntnr'>
    <table className='tableSpacing'>
        <tbody>
            <tr className='top'>
                <th>No</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Sold</th>
                <th>View</th>
            </tr>
            {ApiData && ApiData.map((each) => (
                <tr key={each.id}>
                    <td>{each.id}</td>
                    <td>
                        <div className='flexRow jcCntr alignCntr'>
                        <img src={each.img} className='imageSize' alt="tablelogo" />
                        <p>{each.text}</p>
                        </div>
                    </td>
                    <td>{each.status}</td>
                    <td>{each.sold}</td>
                    <td>{each.view}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
};
export default Table;