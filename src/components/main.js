import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';



const Main = () => (
  <Switch>
    <Route exact path="/myportfolio" component={LandingPage} />
    <Route path="/myportfolio/aboutme" component={AboutMe} />
    <Route path="/myportfolio/contact" component={Contact} />
    <Route path="/myportfolio/projects" component={Projects} />
    <Route path="/myportfolio/resume" component={Resume} />
  </Switch>
)

export default Main;
