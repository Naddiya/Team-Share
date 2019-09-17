// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// == Import : local
import Home from 'src/components/Home';
import HomeProjects from 'src/components/HomeProjects';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import homeprojects from 'src/data/data.json';
import ProjectDetail from 'src/components/ProjectDetail';
import projectdetails from 'src/data/projects.json';
import ProjectCreation from 'src/containers/ProjectCreation';
import LegalMentions from 'src/components/LegalMentions';
import SubscribeModal from 'src/components/LegalMentions';
import LoginModal from 'src/components/LegalMentions';


// == Composant
class Page extends React.Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    axios.get('http://92.243.10.99/Team-Share/team-share-back/public/project/index')
      .then((response) => {
          let homeprojects = response.data;
          this.setState({projects: homeprojects});
          console.log(this.state.projects);
      })
      .catch((error) => {
          console.log(error);
      });
  }

  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/" exact render={() => (
          <HomeProjects projects={this.state.projects} />
        )} />
        <Route path="/" exact component={Team} />
        <Route path="/profile" render={() => (
          <Profile projects={this.state.projects} />
        )} />
        <Route path="/projects" render={() => (
          <Projects projects={this.state.projects} />
        )} />
        <Route path="/project-creation" render={() => (
          <ProjectCreation />
        )} />
        <Route path="/project-detail" render={() => (
          <ProjectDetail key={projectdetails.title} {...projectdetails} />
        )} />
        <Route path="/legal-mentions" render={() => (
          <LegalMentions />
        )} />
                <Route path="/login" render={() => (
          <SubscribeModa />
        )} />
                <Route path="/subscribe" render={() => (
          <LoginModal />
        )} />
      </>
  )};
};

export default Page;
