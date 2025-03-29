
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Navbar from './components/Navbar/Navbar'
// import images from '../images/1.jpg'

function App() {

  return (
    <>
    
      {/* <span class="loading loading-spinner loading-xs"></span> */}

      {/* this is how you can use outside images */}
      {/* <img src={images} alt="" /> */}

      
      <Navbar></Navbar>

      <div className='flex w-11/12 mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
