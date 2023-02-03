import React, { useState, useEffect } from 'react';
import { projectsNav, projectsData } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProject(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === item.name;
      });
      setProject(newProjects)
    }
  },[item]);

  const handleClick =(e, index) => {
    setItem({name: e.target.textContent.toLocaleLowerCase()})
    setActive(index)
  }

  return (
    <div>
      <div className='work_filters'>
        {projectsNav.map((item, index) => {
          return (
            <span className={`${active === index ? 'active_work ' : ''}work_item`} key={index} onClick={(e) => {
              handleClick(e, index)
            }}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className='work_container container grid'>
        {project.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
