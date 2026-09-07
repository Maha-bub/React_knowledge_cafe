import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const handleBookMarks = (blog) => {
    console.log("bookmarks adding soong!",blog)
  }

  return (
    <>

      <Header></Header>
      <div className=' flex max-w-7xl mx-auto'>
        <Blogs handleBookMarks={handleBookMarks} ></Blogs>
        <Bookmarks ></Bookmarks>
      </div>
    </>
  )
}

export default App
