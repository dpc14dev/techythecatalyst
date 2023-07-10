import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../styles/services.css"

const Services = () => {
  return (
    <div className='services'>
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} interval={2000} transitionTime={1000}>
          <div>
            <img src="/images/service1.jpg" alt="image 1" />  
            <p className='legend'>IT Support</p>
          </div>
          <div>
            <img src="/images/rating.jpg" alt="image 2" />  
            <p className='legend'>Reviews and Ratings</p>
          </div>
          <div>
            <img src="/images/services.png" alt="image 3"/>  
            <p className='legend'>Customer Support</p>
          </div>
          <div>
            <img src="/images/sm.jpg" alt="image 4" />  
            <p className='legend'>Social Media</p>
          </div>
      </Carousel>
    </div>
  )
}

export default Services