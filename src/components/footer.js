import React from 'react';
import gitIcon from '../assets/icons/git.svg';
import linkedInIcon from '../assets/icons/linkedin.svg';


const Footer = () => {
  const data = {
    gitHub: "https://github.com/yks-10",
    linkedIn: "https://www.linkedin.com/in/YOGESH-KRISHNAN-S",
  };

  const handleIconClick = (link) => {
    window.location.href = link; 
  };

  return (
    <footer>
      {/* Your header content goes here */}
      <hr></hr>
      அவன் பரக்க போகிறான் என்று பெசி சொல்கிறாள்...
      தன்னை போல் பிறரையும் பரக்க வைக்கும் வரை அவன் ஓயா மட்டன்...
      <p>
      <a href={data.gitHub} target="_blank" rel="noreferrer noopener">
          <img src={gitIcon} alt="GitHub" onClick={() => handleIconClick(data.gitHub)} />
        </a>
        <a href={data.linkedIn} target="_blank" rel="noreferrer noopener">
          <img src={linkedInIcon} alt="LinkedIn" onClick={() => handleIconClick(data.gitHub)} /> {/* Replace with data.linkedIn for correct redirection */}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
