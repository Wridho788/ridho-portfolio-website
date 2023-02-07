import React from 'react';
import './style.css';

const Frontend = () => {
  return (
    <div className='skills_content'>
      <h3 className='skills_title'>Frontend / Mobile developer</h3>
      <div className='skills_box'>
        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>React</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Tailwindcss</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Vue Js</h3>
              <span className='skills_level'>Basic</span>
            </div>
          </div>
        </div>
        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Kotlin</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>React Native</h3>
              <span className='skills_level'>Intermediate</span>
            </div>
          </div>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Flutter</h3>
              <span className='skills_level'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
