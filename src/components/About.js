import React from 'react';
import imageSelf from '../photo.png';

const About = () => {
    return (
        <>
            <h2>About Me</h2>
            <img src={imageSelf} className='imageSelf' />
            <p>I am a recent college graduate seeking new opportunites to use my
                technical skills for a entry level software engineer.
                As a graduate from CUNY Lehman College, I seek to use my skills learned
                from my undergrad and interships to contribute to innovative projects.</p>
        </>
    );
};

export default About;
