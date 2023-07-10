import React from 'react'
import "../styles/Home.css"
import {AiFillGoogleCircle,AiFillInstagram,AiFillAmazonCircle}from 'react-icons/ai'
import {SiFlipkart}from"react-icons/si"

const Home = () => {
  return (
    <div>

      <div className='home1'>
        <div className="home1-inner">
          <h1>Techy the Catalyst</h1>
          <p>The world is yours to discover.</p>
        </div>
      </div>

      <div className="parent-home2"  id='about'>
        <div className='home2'>
          <h1>ABOUT</h1>
          <p>Welcome to Techy the Catalyst! We are a dynamic and innovative platform dedicated to all things tech. Our mission is to ignite a spark of inspiration and drive transformative change in the world of technology. With our expert team of tech enthusiasts, we strive to provide you with the latest news, trends, and insights from the ever-evolving tech landscape.</p>
          <button className='btn-home'>
            Read more...  
          </button>
        </div>
      </div>
{/* ______________________________________________________________________________________________________________ */}
      <div className='home3' id='brands'>

        <div className="home3-inner">
          <h1>BRANDS</h1>
          <div className="brands" >

            <div className="brand" style={{animationDelay:"0.50s"}}>
              <AiFillGoogleCircle/>
              <p>google</p>
            </div>

            <div className="brand" style={{animationDelay:"1s"}}>
              <AiFillInstagram/>
               <p>instagram</p>
            </div>

            <div className="brand" style={{animationDelay:"1.5s"}}>
              <AiFillAmazonCircle/>
               <p>amazon</p>
            </div>

            <div className="brand" style={{animationDelay:"2s"}}>
              <SiFlipkart/>
              <p>flipkart</p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home