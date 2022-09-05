import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Pages
import Home from '../pages/home/Home.jsx';
import Repositories from '../pages/repositories/Repositories.jsx'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/repositories" element={<Repositories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;