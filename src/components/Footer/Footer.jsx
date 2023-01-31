import React from 'react';
import "./style.css"
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container container'>
        <h1 className='footer_title'>Ridho</h1>
        <ul className='footer_list'>
          <li>
            <a href='#about' className='footer_link'>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer_link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#testimonials' className='footer_link'>
              Testimonials
            </a>
          </li>
        
        </ul>
        <div className='footer_social'>
            <a
              href='https://www.instagram.com/
'
              className='footer_social-link'
              target='_blank'
              rel='noreferrer'>
              <i className='bx bxl-instagram'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/ridho-wahyu-nugroho-4a1544142/'
              className='footer_social-link'
              target='_blank'
              rel='noreferrer'>
              <i class='bx bxl-linkedin'></i>
            </a>
            <a
              href='https://github.com/Wridho788'
              className='footer_social-link'
              target='_blank'
              rel='noreferrer'>
              <i className='bx bxl-github'></i>
            </a>
          </div>
          <span className="footer_copy">&#169; codewithnakive.id. All Rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
