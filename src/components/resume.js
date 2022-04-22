import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>

            <h2 style={{paddingTop: '2em'}}>EunJung Kim</h2>
            <h4 style={{color: 'grey'}}>Technical Writer</h4>
            <hr style={{borderTop: '3px solid #4a1c66', width: '50%'}}/>
            <p>Has experience in service engineering such as software platform deployment, education platform operation, and technology.<br></br>
            As a technical writing in the field of SW, I mainly work on platform development guides, user guides, and API reference guides.<br></br>
            Familiar with basic writing rules, English, communication, as well as development language, text-based language, and system/IT tool environment using various tools.</p>
            <hr style={{borderTop: '3px solid #4a1c66', width: '50%'}}/>
            <h5>location</h5>
            <p>Seoul, South of Korea</p>
            <h5>Email</h5>
            <p>zadora1004@naver.com</p>
            <h5>Blog</h5>
            <p>https://dora-author.github.io</p>
            <hr style={{borderTop: '3px solid #4a1c66', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

            <h2 style={{marginTop:'0px', color: '#4a1c66'}}>Education</h2>


            <Education
              startYear={2004}
              endYear={2009}
              schoolName="KwangWoon University"
              schoolDescription="Eletronic Engineering, 3.4/4.5"
               />

              <hr style={{borderTop: '3px solid #cfd2e2'}} />

              <h2 style={{marginTop:'0px', color: '#4a1c66'}}>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Hyundai Autoever"
              jobDescription="SW Design and Modeling by Matlab, Auto code generation and verification (C language, Visual C, Source Insight)"
              />

            <Experience
              startYear={2012}
              endYear={'present'}
              jobName="Hyundai Autron"
              jobDescription="Technical support and various technical documents in automotive and IT field"
               />
              
              <hr style={{borderTop: '3px solid #cfd2e2'}} />
              
              <h2 style={{marginTop:'0px', color: '#4a1c66'}}>SKills</h2>
             
              <Skills
                skill="Markdown/up"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS/XML"
                  progress={30}
                  />
                  <Skills
                    skill="Git"
                    progress={70}
                    />
                    <Skills
                      skill="Python/Java"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
