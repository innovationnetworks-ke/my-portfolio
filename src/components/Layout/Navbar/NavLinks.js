import React from 'react';
import Link from 'gatsby-link';
import { Link as SLink } from 'react-scroll';

const NavItemsSmoothLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        Home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        About me
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="projects">
        Projects
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="creative-coding">
        Creative coding
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="concepts">
        Concepts
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="contact">
        Contact
      </SLink>
    </NavItem>
  </>
);

const NavItemsGatsbyLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/#about">About me</Link>
    </NavItem>
    <NavItem>
      <Link to="/#projects">Projects</Link>
    </NavItem>
    <NavItem>
      <Link to="/#creative-coding">Creative coding</Link>
    </NavItem>
    <NavItem>
      <Link to="/#concepts">Concepts</Link>
    </NavItem>
    <NavItem>
      <Link to="/#contact">Contact</Link>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }) => {
  let path = null;
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  }

  return (
    <>
      {path === '/' ? (
        <NavItemsSmoothLinks NavItem={NavItem} />
      ) : (
        <NavItemsGatsbyLinks NavItem={NavItem} />
      )}
    </>
  );
});

export default NavLinks;
