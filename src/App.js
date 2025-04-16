import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import NavBar from './components/NavBar';
import WorkExperience from './components/WorkExperience';
import About from './components/About';

const ToggleButton = styled.button`
  // position: absolute;
  top: 10px;
  left: 10px;
  background: '${({ theme }) => theme.toggleBorder}';
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
  margin-top: 60px; /* Add margin-top equal to the height of the navbar */
  background: 'linear-gradient(35deg, #60aed3, #5c3de4)'5;
`;

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
        <div class="snowflake">❅</div>
        <div class="snowflake">❆</div>
      </div>

      <div className="App">
        <NavBar />

        <Section id="home">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
        </Section>
        <Section id="about">
          <About/>
        </Section>
        <Section id="projects">
          <Projects />
        </Section>

        <Section id="workExperience">
          <WorkExperience />
        </Section>

        <Section id="contact">
          <h2>Contact</h2>
          <p>Please connect with me on LinkedIn</p>
          <button>
            <a href='linkedin.com/in/gabriela~gonzalez'>LinkedIn</a>
          </button><br></br>

        </Section>

      </div>
    </ThemeProvider>
  );
}

export default App;
