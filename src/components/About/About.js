import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="profile.jpg" />
        </div>
        <p>
         Hello, I am ngugidavid, Skilled Sofware Developer in Python, PHP, React and Angular Js, 
         also skilled in SQL, cassandra and MongoDB databases{' '}
          <a className="about__link" href="https://github.com/innovationnetworks-ke">
            innovation-networks-ke
          </a>{' '}
          Am well skilled and equiped with latest trends and upcoming technologies in software development,
          Sharpening my skills regulary to enhance building best dynamic softwares with latest technologies intergrated
          <br />
          <br />
          I also have basic skills in Networking(Components installation, troubleshooting),Graphics design, Computer repair and maintenance,3D animation and production
          {/* I'm also a certified graphic designer from "Ramakrishna Mission
          Shilpamandira". I also do Graphic and UI designing. Since I love both
          programming and designing, I'm also interested in creating
          programmatic designs and creative coding projects. */}
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
