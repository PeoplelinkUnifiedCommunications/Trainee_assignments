import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Card } from '@mui/material';
import './index.css'

const TotalUsers = () => {
  const [postsPerPage] = useState(10);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [pageCount, setPageCount] = useState([])
 
 const getPostData = (data) => {
  
   return (
    <div className='TableCard'>
    <table className='table'>
      <tbody>
        <tr className='tRow'>
          <th className='userID'>USERID</th>
          <th className='titlE'>TITLE</th>
        </tr>
     {data.map(post => 
     
       <tr key={post.id}>
       <td className='userID'>{post.id}</td>
       <td  className='titlE' >{post.title}</td>
       </tr>
     )}
     </tbody>
    </table>
    </div>
     
   )
 
 }
 
 const getAllPosts = async () => {
   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
   console.log(res);
   const data = res.data;
   const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
   const postData = getPostData(slice)
   // Using Hooks to set value
   setAllPosts(postData)
   var Num = [];
   for (var i = 1; i <=Math.ceil(data.length / postsPerPage); i++) {
     Num.push(i);
   }
   setPageCount(Num)
   console.log(pageCount.length)
 }
 
 useEffect(() => {
   getAllPosts()
 }, [offset])
 
 return (
   <div className="dashBoardCntnr">
     <Card className='paginationCard'>
       <div className='cardCntr'>
     {posts}
     <div className="pagination">
      <ul className='flexRow order'>
        <button
          disabled={pageCount[0] === currentPage}
          onClick={()=>{setCurrentPage(currentPage-1)
                        setOffset((currentPage-1)*10-9)}}
          >
          <SkipPreviousIcon/>
        </button>
        {pageCount.map(page => (
          <li
            className={`${currentPage === page && "activeLink"}`}
            onClick={()=>{setCurrentPage(page)
                        setOffset((page)*10-9)}}
          >
            {page}
          </li>
        ))}
        <button
          disabled={pageCount.length === currentPage}
          onClick={()=>{setCurrentPage(currentPage+1)
                        setOffset((currentPage+1)*10-9)}}
        >
          <SkipNextIcon/>
        </button>
      </ul>
    </div>
    </div>
    </Card>
   </div>
 );
};

export default TotalUsers;