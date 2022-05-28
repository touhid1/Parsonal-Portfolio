/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { GrResume } from 'react-icons/gr';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <SiLinkedin />
    </div>
    <div>
      <a href="https://github.com/touhid1"><AiFillGithub /></a>
    </div>
    <div>
      <a href="../assets/resume.pdf"><GrResume /></a>
    </div>
  </div>
);

export default SocialMedia;
