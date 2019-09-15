// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/containers/Navbar';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';
import Burger from 'src/components/Burger';

// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Burger />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
