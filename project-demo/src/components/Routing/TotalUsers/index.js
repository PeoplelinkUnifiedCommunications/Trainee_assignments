import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import HookApiCalls from '../../HookApiCalls';

const TotalUsers = () => {
  // const {ApiData,error}=HookApiCalls('http://localhost:800/usersData')
  const [postsPerPage] = useState(5);
  const [offset, setOffset] = useState(1);
  const [posts, setAllPosts] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [pageCount, setPageCount] = useState([1,2])
 
 const getPostData = (data) => {
   return (
     data.map(post => <div className="container" key={post.id}>
       <p>User ID: {post.id}</p>
       <p>Title: {post.title}</p>
     </div>)
   )
 
 }
 
 const getAllPosts = async () => {
   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
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
   <div className="main-app">
     {posts}
     <div className="pagination">
      <ul className='flexRow order'>
        <button
          disabled={pageCount[0] === currentPage}
          onClick={()=>{setCurrentPage(currentPage-1)
                        setOffset((currentPage-1)*5-4)}}
          >
          <SkipPreviousIcon/>
        </button>
        {pageCount.map(page => (
          <li
            className={`${currentPage === page && "activeLink"}`}
            onClick={()=>{setCurrentPage(page)
                        setOffset((page)*5-4)}}
          >
            {page}
          </li>
        ))}
        <button
          disabled={pageCount.length === currentPage}
          onClick={()=>{setCurrentPage(currentPage+1)
                        setOffset((currentPage+1)*5-4)}}
        >
          <SkipNextIcon/>
        </button>
      </ul>
    </div>
   </div>
 );
};

export default TotalUsers;
