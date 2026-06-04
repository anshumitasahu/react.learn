import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './container/Navbar'
import MainBody from './container/Maiin-Body'
import About from './container/About'

function App() {
  const [page, setPage] = useState("home");
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const toggleStyle = () => {
    console.log("clicked");
    console.log("before:", myStyle);
    if (myStyle.color == 'white') {
      setMyStyle({

        color: 'black',
        backgroundColor: 'white'
      })
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
    }
  }

  useEffect(() => {
    console.log("updated:", myStyle);
  }, [myStyle]);
  console.log(myStyle);

  
  return (
      <div className='body' style={myStyle}>
        <Navbar toggleStyle={toggleStyle} setPage={setPage} />
        {page === "home" && <MainBody myStyle={myStyle}/>}
        {page === "about" && <About />}
      </div>
  )
}

export default App
