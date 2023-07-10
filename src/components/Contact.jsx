import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='contact-inner'>
        <form action="">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="" id="" placeholder='Enter Your full name'/>            
          </div>  
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" name="" id="" placeholder='Enter your email'/>            
          </div>  
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" name="" id="" placeholder='Enter your phone number'/>            
          </div>  
          <div className="form-group">
            <label>Any Queries</label>
            <input type="text" name="" id="" placeholder='Tell us about your query'/>            
          </div>
          <div className='form-submit'>
              <button>Submit</button>
          </div>  
        </form>  
      </div>
    </div>
  )
}

export default Contact