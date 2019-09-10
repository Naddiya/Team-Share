// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navbar from 'src/containers/Navbar';
import Page from 'src/components/Page';
import Footer from 'src/components/Footer';


// == Composant
const App = () => (
  <div id="app">
    <Navbar />
    <Page />
    <Footer />
  </div>
);

// == Export
export default App;
