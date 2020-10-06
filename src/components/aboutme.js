import React, { Component } from 'react';
import './styles.css';


class About extends Component {
  render() {
    return(
 

    <section id="about" class="about">
      <h1 class="about__title">Get to know me<span class="about__title__dot"></span></h1>
      <div class="about__info__container">
        <div class="about__text">
          <p class="about__text__description">Hello, my name is EunJung. I am a Technical Writer and Communicator located in Seoul, South of Korea.</p>
          <p class="about__text__description"> I reorganizes and rewrites the development manual for the next generation vehicle standard platform,
            AUTOSAR Adaptive, including styles and formatting. <br></br>
            In addition to improving UI/UX usability for user tools, I write the tool user guide and develops the visual content of it.
            All work in English, and analyze AUTOSAR English specifications for the accuracy of technology. <br></br>
            Before final deployment, I test the Shell command, Python Code Generator, and CMake Build System on Linux/Docker based development environment. <br></br>
            To improve the quality of distribution, I utilize Sphinx and ReadtheDocs tools to automatically generate html documents and apply Git-based version management. <br></br>
            I communicate frequently with developers(SMEs) using collaboration/sharing tools such as Confluence and Wiki. This improves the accuracy, clarity, conciseness and consistency of technical documentation. <br></br>
            As technical writing is not a creation, I pursue logical writing, and continuously create  sentences and improve the environment to make it easy for users. 
            And I constantly search for all these. </p>
        </div>
      </div>
    </section>
    

    )
  }
}

export default About;
