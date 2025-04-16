import React from 'react';
import Work from './Work';

const WorkExperience = () => {
    const workExperienceList = [
        {
            title: 'NYY Summer Associate 2023',
            description: 'Revamped the UI/UX of an internal application utilized by Yankees employees and MLB players, enhancing usability and design',
        },
        {
            title: 'NYY Summer Internship 2022',
            description: ' Designed a cutting-edge user interface tailored for coaches and players to analyze batting sessions',
        },
        {
            title: ' CUNY Recovery Corps SYEP Program 2021',
            description: ' Conducted research and developed strategic business materials, improving organizational efficiency. Supported recruitment efforts by managing databases and conducting initial screening processes.',
        },
    ];

    return (
        <section>
            <h2>Work Experience</h2>
            {workExperienceList.map((project) => (
        <Work {...project} />
      ))}
        </section>
    );
};

export default WorkExperience;
