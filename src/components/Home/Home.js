import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'python']} />
      </CardIcon>
      <CardTitle>Python</CardTitle>
      <CardText>
        Skilled in Django and Flask fameworks to help 
      </CardText>
    </Card>
    {/* PHP */}
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'php']} />
      </CardIcon>
      <CardTitle>PHP</CardTitle>
      <CardText>
        Skilled in Laravel 
      </CardText>
    </Card>
    {/* React */}
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'react']} />
      </CardIcon>
      <CardTitle>React Js</CardTitle>
      <CardText>
        Skilled in React
      </CardText>
    </Card>
    {/* Angular */}
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'angular']} />
      </CardIcon>
      <CardTitle>Angular Js</CardTitle>
      <CardText>
        Skilled in Angular
      </CardText>
    </Card>
    {/* Database */}
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'database']} />
      </CardIcon>
      <CardTitle>SQL</CardTitle>
      <CardText>
        Skilled in SQL
      </CardText>
    </Card>
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'database']} />
      </CardIcon>
      <CardTitle>MongoDB </CardTitle>
      <CardText>
        Skilled in  MongoDB
      </CardText>
    </Card>    
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'database']} />
      </CardIcon>
      <CardTitle>Cassandra </CardTitle>
      <CardText>
        Skilled in  Cassandra
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="paint-brush" />
      </CardIcon>
      <CardTitle>Creative Coding</CardTitle>
      <CardText>
        I love creative coding because I do both coding & designing. making
        beautiful art with code is very satisfying to me.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>NGUGI DAVID</h1>
          <p className="adjust">FULL STACK SOFTWARE DEVELOPER SKILLED IN Python, PHP, React and Angular JS</p>
          <FontAwesomeIcon icon="code" />
          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/innovationnetworks-ke"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/davyvynes"
              />
              <IconLink
                label="codepen"
                icon={['fab', 'codepen']}
                href="//codepen.io/ngugidavid"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Areas of Expertise <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
