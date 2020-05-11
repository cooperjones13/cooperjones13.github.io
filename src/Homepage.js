import React from 'react';

import Jumbotron from './Jumbotron'
import Section from './Section';
import Card from './Card';

function Homepage() {
  return (
    <div className="Homepage">
      <Jumbotron></Jumbotron>
      <Section>
          <h2 className="section-title">Projects</h2>
          <div className="horiz-card-container">
            <Card id={"radii"} title={"Radii"} desc={"Share music with your social circle"} githubRepo="" figmaLink="https://www.figma.com/file/UiYtKHJaJEd6FSVsEOYafN/Capstone-Prototype?node-id=4%3A48"/>
            <Card title={"Womentor"} desc={"Created an React web app and a iOS application"} githubRepo="womentor-ios"/>
            <Card title={"Womentor"} desc={"Created an React web app and a iOS application"} />
          </div>
      </Section>
    </div>
  );
}

export default Homepage;
