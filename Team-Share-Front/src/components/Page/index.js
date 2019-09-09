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
<<<<<<< HEAD
import ProjectDetail from 'src/components/ProjectDetail';

=======
import ProjectCreation from 'src/components/ProjectCreation';
>>>>>>> 11090347325cccf8deab1fbb3f3cb6cf8a876954


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
<<<<<<< HEAD
=======
    <Route path="/project-creation" render={() => (
      <ProjectCreation />
    )} />
  </>
>>>>>>> 11090347325cccfgit 8deab1fbb3f3cb6cf8a876954
);

export default Page;
