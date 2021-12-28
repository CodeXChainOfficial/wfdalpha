import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from 'pages/Index';
import Faqs from 'pages/Faqs';
import ExplorerProject from 'pages/Explorer';
import CreateProject from 'pages/CreateProject';
import BackProject from 'pages/BackProject';
import ProjectDetail from 'pages/ProjectDetail';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Candidate */}
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/" element={<Index />} />
        <Route path="/explorer" element={<ExplorerProject />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/back" element={<BackProject />} />
        <Route path="/detail" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
