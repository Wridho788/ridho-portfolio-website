import React, { useState } from 'react';
import './style.css';

const dataExperience = [
  {
    id: 0,
    jobTitle: 'Mobile Programmer',
    companyName:
      'PT. Lunata Teknokindo | Komplek Vila Abadi, Setia Budi, Medan',
    startDate: 'January - 2018',
    endDate: 'February - 2020',
  },
  {
    id: 1,
    jobTitle: 'Frontend Engineer',
    companyName: 'PT. Nirvana Indonesia Yoga | Jln. Bilal Ujung, Medan',
    startDate: 'March - 2020',
    endDate: 'June - 2021',
  },
  {
    id: 2,
    jobTitle: 'Mobile Application Developer',
    companyName: 'PT. Darkotech Mandiri Indonesia | Jln. H. Adam Malik, Medan',
    startDate: 'August - 2021',
    endDate: 'October - 2021',
  },
  {
    id: 3,
    jobTitle: 'Mobile Application Developer',
    companyName:
      'PT. Cipta Kerja Arunika Nusantara | Komp. Citraland Gamacity, Medan',
    startDate: 'November - 2021',
    endDate: 'February - 2023',
  },
  {
    id: 4,
    jobTitle: 'Frontend Engineer',
    companyName: 'PT. Taqnia Utama | KEK Sei Mangkei, Simalungun',
    startDate: 'March - 2023',
    endDate: 'July - 2024',
  },
  {
    id: 5,
    jobTitle: 'Mobile Application Developer',
    companyName: 'Oxbridge Institute | Medan',
    startDate: 'August - 2024',
    endDate: 'December - 2024',
  },
  {
    id: 6,
    jobTitle: 'Odoo Developer',
    companyName: 'Digisofl Consultant Technology | Medan ',
    startDate: 'December - 2024',
    endDate: 'Now',
  },
];
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
                <span className='qualification_subtitle'>STMIK IBBI Medan</span>
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
                <h3 className='qualification_title'>
                  Computer and Network Engineering
                </h3>
                <span className='qualification_subtitle'>
                  SMK SWASTA TELADAN
                </span>
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
            className={`qualification_content ${toggleState === 2 ? 'qualification_content-active' : ''}`}>
            {dataExperience.map((item) => (
              <div className='qualification_data' key={item.id}>
                {item.id % 2 !== 0 && (
                  <>
                    <div></div>
                    <div>
                      <span className='qualification_rounder'></span>
                      <span className='qualification_line'></span>
                    </div>
                  </>
                )}

                <div>
                  <h3 className='qualification_title'>{item.jobTitle}</h3>
                  <span className='qualification_subtitle'>{item.companyName}</span>
                  <div className='qualification_calendar'>
                    <i className='uil uil-calendar-alt'></i> {item.startDate} - {item.endDate}
                  </div>
                </div>

                {item.id % 2 === 0 && (
                  <div>
                    <span className='qualification_rounder'></span>
                    <span className='qualification_line'></span>
                  </div>
                )}
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
