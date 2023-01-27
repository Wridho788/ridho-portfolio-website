import React, { useState } from 'react';
import './style.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (id) => {
    setToggleState(id);
  };

  return (
    <section className='qualification section'>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My Journey</span>
      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification_button qualification_active button--flex'
                : 'qualification_button button--flex'
            }
            onClick={()=> toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification_icon'></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification_button qualification_active button--flex'
                : 'qualification_button button--flex'
            }
            onClick={()=> toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification_icon'></i>
            Experience
          </div>
        </div>
        <div className='qualification_sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification_content qualification_content-active'
                : 'qualification_content '
            }>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>
                  Information technologies
                </h3>
                <span className='qualification_subtitle'>
                  Bachelor's Degree
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2016 - 2019
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>SMK</h3>
                <span className='qualification_subtitle'>Teladan</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2015-2018
                </div>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>SMP</h3>
                <span className='qualification_subtitle'>AW</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2012 - 2015
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>SD</h3>
                <span className='qualification_subtitle'>Negri</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2004-2009
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification_content qualification_content-active'
                : 'qualification_content '
            }>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>
                 Full Stack Developer
                </h3>
                <span className='qualification_subtitle'>
                  Facebook
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Frontend Engineer</h3>
                <span className='qualification_subtitle'>Google</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2020-2021
                </div>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Mobile Programmer</h3>
                <span className='qualification_subtitle'>Tokopedia</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2019-2020
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>IT Support</h3>
                <span className='qualification_subtitle'>Tesla</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2017 - 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
