// == Import : npm
import React from 'react';

// == Import : local
import Home from 'src/components/Home';
import HomeProjects from 'src/components/HomeProjects';
import Team from 'src/components/Team';
import Profile from 'src/components/Profile';
import Projects from 'src/components/Projects';
import homeprojects from 'src/data/data.json';


const view = 'projects';

// == Composant
const Page = () => (
  <>
    {view === 'home' && <Home />}
    {view === 'home' && <HomeProjects projects={homeprojects} />}
    {view === 'home' && <Team />}
    {view === 'profile' && <Profile projects={homeprojects} />}
    {view === 'projects' && <Projects projects={homeprojects} />}
  </>
);

// == Export
export default Page;
