import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnderDev from './components/ErrorPages/UnderDev.tsx';
import NotFound from './components/ErrorPages/NotFound.tsx';
import NewsComponentList from './components/News/NewsComponentList.tsx';

import NewsCarousel from './components/News/NewsCarousel.tsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/news" element={<NewsCarousel />} />
        <Route path="/under-dev" element={<UnderDev />} />
        <Route path="/not-found" element={<NotFound />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;
