// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.body};
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 25px;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 25px;
  border-radius: 10px;
  padding: 5px;
  &:hover {
  background: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff);
    background-size: 1400% 1400%;
    animation: rainbow 10s ease infinite;
}

@keyframes rainbow {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
  
`;

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="home" id="active" smooth={true} duration={500}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" smooth={true} duration={500}>About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="workExperience" smooth={true} duration={500}>Work Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
