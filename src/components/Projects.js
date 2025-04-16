import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectList = [
    {
      title: 'Swift iOS App',
      description: 'Built an iOS application using Swift language. The app was a prototype non-functional MLB live score app.',
      link: 'https://youtube.com/shorts/T9F9lNfp9mU?feature=share'
    },
    {
      title: '2D Platformer Video Game',
      description: 'Having a passion for gaming, I built a 2D platformer game using Java. Watch the Youtube Playlist to see gameplay and see how it was built!',
      link: 'https://github.com/johndoe/project-two'
    },
    {
      title: 'This Website',
      description: 'Built this website to host my projects using HTML, CSS, JS, and React!',
    }
  ];

  return (
    <section>
      <h2>Recent Projects</h2>
      {projectList.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      
    </section>
  );
};

export default Projects;
