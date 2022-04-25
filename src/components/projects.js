import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './Project.css';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://pythonforthelab.s3.amazonaws.com/media/images/chuttersnap-553860-unsplash_linkedin.width-800.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h1 className="Project_hedding">Documentation by Sphinx and ReadtheDocs </h1>
            <p>Documentation of platform development guides and user guides using Sphinx, a Python-based documentation tool, and the reStructuredText(reST) markup language.<br></br>
            Use ReadtheDocs for web hosting and Git or Bitbucket for version control.</p>
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/dora-author/ReadtheDocs" target="_blank">GitHub</Button>
              <Button colored a href= "https://ejkim-author.readthedocs.io/en/latest" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '276px', background: 'url(https://getlogovector.com/wp-content/uploads/2020/10/readme-logo-vector.png) center / cover'}} ></CardTitle>
            <CardText>
              <h1 className="Project_hedding">API reference guide using  Doxygen and Sphinx integration</h1>  
              I had experience on documentation that connects Doxygen output and Python-based Sphinx using 
              <a href="https://github.com/michaeljones/breathe">breathe extension</a>.
              Also, I use ReadMe tool as a markdown editor and improved the understanding about Rest API.
            </CardText>
            <CardActions border>
              <Button colored a href="https://tw-assignment.readthedocs.io/en/latest/index.html" target="_blank">Sample API Reference</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '256px', background: 'url(https://img.youtube.com/vi/XoUvOTiVaDc/maxresdefault.jpg) center / cover'}} ></CardTitle>
            <CardText>
            <h1 className="Project_hedding">UX/UI improvement through usability test based on Java Eclipse IDE</h1>  
            Develops and improves all UI terms and messages that users encounter.
            As part-time, participated in the customer communication language development (UX Writing) project (January-March 2020)
            </CardText>
            <CardActions border>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

             {/* Project 4 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://news.hmgjournal.com/images_n/contents/0423_mobilegene_01.png) center / cover'}} ></CardTitle>
            <CardText>
            <h1 className="Project_hedding">Creation and localization of SW product catalogs, brochures, and educational content</h1>
            <p>Create appropriate composition, phrases, words, pictures, etc. to make use of SW platform technology and features, and work in style(PPT, PDF format).
               Collaboration with the planning team and design team (Fine Art).
               Work area: AUTOSAR Adaptive Platform, Ethernet middleware, technical services.</p>
            </CardText>
            <CardActions border>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div style={{textAlign: 'center'}}>
        <Grid>
        <Cell col={4}>
          <h2>Completion of Training Course</h2>
          <hr style={{borderTop: '3px solid #4a1c66', width: '100%'}}/>
          <div style={{textAlign: 'left'}}>
          <h4> - Yonsei University English Technical Writing Course completed, August ~ December 2019 </h4>
          <h4> - DND Technical Writing Basic Course (Accuracy, Clarity, Conciseness, Consistency), October 2019 </h4>
          <h4> - DND information structuring & single sourcing (Help & Manual practice), November 2019 </h4>
          <h4> - DND technical document standardization consulting, March 2020 </h4>
          <h4> -DND English technical editing, May 2020 </h4>
          </div>
        </Cell>
        </Grid>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div style={{textAlign: 'center'}}>
        <Grid>
        <Cell col={4}>
          <h2>English Certificate</h2>
          <hr style={{borderTop: '3px solid #4a1c66', width: '100%'}}/>
          <div style={{textAlign: 'left'}}>
          <h4> - TOEIC Writing Level 7, Jun 2019 </h4>
          <h4> - ITT Business Translation Level 2, August 2020 </h4>
          </div>
        </Cell>
        </Grid>
        </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Education</Tab>
          <Tab>Certificate</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
