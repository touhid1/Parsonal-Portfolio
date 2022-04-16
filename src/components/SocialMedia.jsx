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
      <AiFillGithub />
    </div>
    <div>
      <GrResume />
    </div>
  </div>
);

export default SocialMedia;
