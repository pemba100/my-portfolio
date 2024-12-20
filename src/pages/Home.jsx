import React from 'react'
import '../pages/Home.css';
import pemba2 from '../image/pemba2.JPG'
function Home() {
  return (

    <div className='home min-vh-100 mt-5 ms-4 '>
      <div className="container">
        <div className="row ">

        <div className="left col-md-7">

        <h1 className='fs-3'>Welcome to My Portfolio</h1>
        <h3 className='fs-5 pt-5'>Hello, I'm <span>Pemba Sherpa</span></h3>
        <p className='fs-5'>I am a React developer with experience in building web applications.</p>
        </div>
        <div className="right col-md-5">
          <img src={pemba2} alt="photo" className='img-fluid' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
