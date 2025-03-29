
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Navbar from './components/Navbar/Navbar'
// import images from '../images/1.jpg'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [spentTime,setSpentTime] = useState(0)

  function handleBookmarks(blog){
    const isExist = bookmarks.find(b=>b.id===blog.id)

    if(isExist){
      alert('already bookmarked')
    }
    else{
      setBookmarks([...bookmarks,blog])
    }
  }

  function handleSpentTime(time){
      setSpentTime(spentTime+time)
  }


  function handMarkAsRead(marked){
      const removeReadBook = bookmarks.filter(b=>b.id!==marked.id)

      // console.log(removeReadBook)

      setBookmarks(removeReadBook)
      handleSpentTime(marked.reading_time)
  }

  return (
    <>
    
      {/* <span class="loading loading-spinner loading-xs"></span> */}

      {/* this is how you can use outside images */}
      {/* <img src={images} alt="" /> */}

      
      <Navbar></Navbar>

      <div className='flex w-11/12 mx-auto gap-10'>
      <Blogs handleBookmarks={handleBookmarks}  handMarkAsRead={handMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} spentTime={spentTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
