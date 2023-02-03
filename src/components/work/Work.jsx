import React from 'react';
import './style.css';
import Works from './works';
const Work = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <span className='section_subtitle'>Most Recent Works</span>
      <div>
        <Works />
      </div>
    </section>
  );
};

export default Work;
