import React from 'react';
import styled from 'styled-components';

import PageHeader from '@src/components/common/PageHeader';
import { Hidden } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from '@src/components/common/Flex';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      y={['-350px', '-150px']}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 50, left: '50%', fontSize: 23 }}>HTML5</p>
      <p style={{ top: 0, left: 0, fontSize: 25 }}>Bootstrap</p>
      <p style={{ top: 200, left: -60, fontSize: 14 }}>CSS3</p>
      <p style={{ top: '30%', left: '35%', fontSize: 18 }}>Python</p>
      <p style={{ top: 40, left: '75%', fontSize: 12 }}>PHP</p>
      <p style={{ top: 380, left: '85%', fontSize: 18 }}>MongoDB</p>
      <p style={{ top: 320, left: '65%', fontSize: 18 }}>SQL</p>
      <p style={{ top: 350, left: 150, fontSize: 20 }}>Casandra</p>
      <p style={{ top: 120, left: '22%', fontSize: 12 }}>React</p>
      <p style={{ top: 110, left: '72%', fontSize: 12 }}>Angular</p>
    </Parallax>

  );
};

const Skills = () => (
  
  <SkillsWrapper>
    <ParallaxProvider>
      <PageHeader>My Skillsets</PageHeader>

      {/* <SkillPie percent={90} name={"JavaScript"} /> */}
      <Flex className="skill__icons" justify="space-around" align="center">
        <FontAwesomeIcon icon={['fab', 'html5']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'js']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'react']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'css3']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'java']} size="5x" />
        <FontAwesomeIcon icon={['fab', 'kotlin']} size="5x" />
        {/* <MDBIcon fab icon="php" /> */}

      </Flex>
      <Flex className="skill__ico" justify="space-around" align="center">
      {/* <section class="colorlib-skills" data-section="skills">
                  <div class="colorlib-narrow-content">
                     <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                           <span class="heading-meta">My Specialty</span>
                            <div class="about-desc">
                           <h1>Skills</h1>
                            </div>
                        </div>
                     </div>
                     <p>Some of the significant aptitudes which will assist me with achieving my objectives.</p>
                     <div class="row">
                     <div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
                           <div class="progress-wrap">
                              <h3>MongoDB/ExpressJS/Angular/NodeJS</h3>
                              <div class="progress">
                                 <div class="progress-bar color-6" role="progressbar" aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                                    <span>80%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                         
                      </div>
                    </div>
               </section> */}
      </Flex>

      <Hidden md xs sm>
        <WordClouds />
      </Hidden>
    </ParallaxProvider>
  </SkillsWrapper>
);

export default Skills;
