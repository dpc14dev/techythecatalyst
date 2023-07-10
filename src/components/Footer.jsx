import React from 'react'
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
  return (
    <footer className='footer'>
       <main className="footer-main1">
         <HashLink to="/#home"><h2>Techy the Catalyst</h2></HashLink>
          <small>The world is yours to discover</small>
        </main>
      <main className="footer-main2">
        <h2>SOCIAL MEDIA</h2>
        <a href="https://www.instagram.com/codingshark">Instagram</a>
        <a href="https://www.linkedin.com">Linkedin</a>
        <a href="https://www.twitter    .com">Twitter</a>
      </main>
      
    </footer>
  )
}

export default Footer