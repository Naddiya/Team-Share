// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import Home from 'src/components/Home';
import HomeProjects from 'src/components/HomeProjects';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import homeprojects from 'src/data/data.json';
import ProjectDetail from 'src/components/ProjectDetail';
import ProjectCreation from 'src/containers/ProjectCreation';
import LegalMentions from 'src/components/LegalMentions';



// == Composant
const Page = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/" exact render={() => (
      <HomeProjects projects={homeprojects} />
    )} />
    <Route path="/" exact component={Team} />
    <Route path="/profile" render={() => (
      <Profile projects={homeprojects} />
    )} />
    <Route path="/projects" render={() => (
      <Projects projects={homeprojects} />
    )} />
    <Route path="/project-creation" render={() => (
      <ProjectCreation />
    )} />
    <Route path="/projectdetail" render={() => (
      <ProjectDetail />
    )} />
    <Route path="/legalmentions" render={() => (
      <LegalMentions />
    )} />
  </>
);

export default Page;
