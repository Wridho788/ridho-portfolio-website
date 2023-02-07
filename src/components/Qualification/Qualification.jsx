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
            onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification_icon'></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification_button qualification_active button--flex'
                : 'qualification_button button--flex'
            }
            onClick={() => toggleTab(2)}>
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
                Bachelor of Informatics Engineering
                </h3>
                <span className='qualification_subtitle'>
                STMIK IBBI Medan
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2015 - 2019
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
                <h3 className='qualification_title'>Computer and Network Engineering</h3>
                <span className='qualification_subtitle'>SMK SWASTA TELADAN</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2015-2012
                </div>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>MTs. Al-Washliyah</h3>
                <span className='qualification_subtitle'>Tembung</span>
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
                <h3 className='qualification_title'>SD Negeri 105323</h3>
                <span className='qualification_subtitle'>Bakaran Batu</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2012-2006
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
                <h3 className='qualification_title'>Full-Stack Developer</h3>
                <span className='qualification_subtitle'>
                  PT. Cipta Kerja Arunika Nusantara
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 08/2021 - present
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
                <span className='qualification_subtitle'>
                  PT. Nirvana Indonesia Yoga
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 05/2020 - 07/2021
                </div>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Mobile Programmer</h3>
                <span className='qualification_subtitle'>
                  PT. Lunata Teknokindo Group
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 01/2018 - 04/2020
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
