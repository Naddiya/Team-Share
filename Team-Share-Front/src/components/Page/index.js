// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// == Import : local
import Home from 'src/containers/Home';
import HomeProjects from 'src/components/HomeProjects';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import ProjectDetail from 'src/components/ProjectDetail';
import projectdetails from 'src/data/projects.json';
import ProjectCreation from 'src/containers/ProjectCreation';
import LegalMentions from 'src/components/LegalMentions';
import Error from './Error';
import store from 'src/store';

// == Composant
class Page extends React.Component {

  state = {
    projects: [],
    technos: [],  

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

    axios.get('http://92.243.10.99/Team-Share/team-share-back/public/techno/index')
      .then((response) => {
          let profiletechnos = response.data;
          console.log(response.data)
          this.setState({technos: profiletechnos});
          console.log(this.state.technos);  
      })
      .catch((error) => {
          console.log(error);
      });
    // axios.get('http://92.243.10.99/Team-Share/team-share-back/public/tag/index')
    //   .then((response) => {
    //       let tag = response.data;
    //       this.setState({tag: tag});
    //       console.log(this.state.tag);
    //   })
    //   .catch((error) => {
    //       console.log(error);
    //   });
    axios.get('http://92.243.10.99/Team-Share/team-share-back/public/skill/index')
      .then((response) => {
          let skills = response.data;
          this.setState({skills: skills});
          console.log(this.state.skills);
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
          <Profile 
            projects={this.state.projects}
            technos={this.state.technos}
            skills={this.state.skills}
          />
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
        {/* <Route component={Error} /> */}
      </>
  )};
};

export default Page;
