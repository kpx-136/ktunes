import './App.css';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { MenuPage } from './MenuPage';
import { AlbumContext } from './AlbumContext';
import { albums } from './data/albums';
import { AlbumPage } from './AlbumPage';
import { Navbar } from './Navbar';
import { FeedbackForm } from './FeedbackForm';

{/*
Dark: #060009
Dark2: #21002b
purple: #5a1f94
pink: #fa7aff
*/}

function App() {

  return (

    <AlbumContext.Provider value = {albums}>
      <HashRouter>

        <Routes>

          <Route path="/" element = {<LandingPage />} />
          <Route path="/discover" element = {<MenuPage />} />
          <Route path = "/album/:id" element = {<AlbumPage />} />
          <Route path = "/feedback" element = {<FeedbackForm />} />

        </Routes>

        <Navbar />

      </HashRouter>

    </AlbumContext.Provider>
    
  );
}

export default App;
