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


// == Composant
const Page = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/" exact render={() => (
      <HomeProjects projects={homeprojects} />
    )} />
    <Route path="/" exact component={Team} />
    <Route path="/profile" exact render={() => (
      <Profile projects={homeprojects} />
    )} />
    <Route path="/projects" exact render={() => (
      <Projects projects={homeprojects} />
    )} />
  </>
);

// == Export
export default Page;
