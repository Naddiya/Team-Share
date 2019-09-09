// == Import : npm
import React from 'react';

// == Import : local
import Home from 'src/components/Home';
import HomeProjects from 'src/components/HomeProjects';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import homeprojects from 'src/data/data.json';
import ProjectDetail from 'src/components/ProjectDetail';


const view = 'profile';

// == Composant
const Page = () => (
  <>
    {view === 'home' && <Home />}
    {view === 'home' && <HomeProjects projects={homeprojects} />}
    {view === 'home' && <Team />}
    {view === 'profile' && <Profile projects={homeprojects} />}
    {view === 'projects' && <Projects projects={homeprojects} />}
    {view === 'project' && <ProjectDetail />}
  </>
);

// == Export
export default Page;
