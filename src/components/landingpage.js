import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '75%', padding: '20px 30px 15px', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

        <div className="banner-text">
          <h1>Technical Writer and Communicator</h1>
          <hr/>
          <p>Documentation and Editing with Markdown, XML, HTML, Sphinx, and ReadMe</p>
          <p>Collaboration and Communication by Git, Bitbucket, and Confluenece</p>
          <p>Good English Reading and Writing Skills</p>
          <p>Multi OS User (Windows10, Linux Ubuntu, and Docker)</p>

          <hr/>

          <a href="/myportfolio/aboutme" class="about__btn" style={{marginTop:'20px', color: '#fff'}}> Read more
          </a>

        </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
