/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { GrResume } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/touhidul066/" rel="noreferrer"><SiLinkedin /></a>
    </div>
    <div>
      <a target="_blank" href="https://github.com/touhid1" rel="noreferrer"><AiFillGithub /></a>
    </div>
    <div>
      <a href="../assets/resume.pdf" download><GrResume /></a>
    </div>
  </div>
);

export default SocialMedia;
