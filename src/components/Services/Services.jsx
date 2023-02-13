import React, { useState } from 'react';
import './style.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id) => {
    setToggleState(id);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section_title'>Services</h2>
      <span className='section_subtitle'>What i Offer</span>
      <div className='services_container container grid'>
        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>
              Jira <br /> Atlassian
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggleState === 1
                ? 'services_modal active_modal'
                : 'services_modal'
            }>
            <div className='services_modal-content'>
              <i
                className='uil uil-times services_modal-close'
                onClick={() => toggleTab(0)}></i>
              <h3 className='services_modal-title'>Agile Scrum With Jira</h3>
              <p className='services_modal-description'>
                Service with 3 years of experience.Providing quality work to
                clients and companies.
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Version management</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Easy backlog grooming</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Sprint planning</p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Story points</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='services_content'>
          <div>
            <i className='uil uil-arrow services_icon'></i>
            <h3 className='services_title'>
              Self-Documenting <br />
              Code
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(2)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggleState === 2
                ? 'services_modal active_modal'
                : 'services_modal'
            }>
            <div className='services_modal-content'>
              <i
                className='uil uil-times services_modal-close'
                onClick={() => toggleTab(0)}></i>
              <h3 className='services_modal-title'>Self-Documenting Code</h3>
              <p className='services_modal-description'>
                A major argument against documents is that they get outdated as
                the system evolves. And the faster a system evolves, the faster
                its documentation gets outdated.
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    I made documentation via comments for other developers to
                    know the purpose of the code that I made
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    I created documentation for the continuation of code
                    development
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    I also wrote a line of code to briefly explain the theory
                    and what it should do
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>Code never lies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='services_content'>
          <div>
            <i className='uil uil-edit services_icon'></i>
            <h3 className='services_title'>
              Visual <br /> Designer
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(3)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggleState === 3
                ? 'services_modal active_modal'
                : 'services_modal'
            }>
            <div className='services_modal-content'>
              <i
                className='uil uil-times services_modal-close'
                onClick={() => toggleTab(0)}></i>
              <h3 className='services_modal-title'>Visual Designer</h3>
              <p className='services_modal-description'>
                A visual designer creates the concepts, artwork and layouts for
                digital projects based on creative briefs and client meetings.
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Establish the look and feel for various interfaces,
                    including websites, mobile devices, apps
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Strong problem-solving skills
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Excellent visual, written and verbal communication skills,
                    along with presentation and negotiation skills
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    The ability to know when to positively take direction and
                    work both collaboratively and solo
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
