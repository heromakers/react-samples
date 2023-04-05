import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/scss/app.scss';

import Splash from './pages/Splash';
import Starter from './pages/Starter';

import ErrorPage from './pages/Splash';

import AboutUs from './pages/Splash';
import Contact from './pages/Splash';
import PrivacyPolicy from './pages/Splash';
import TermsOfUse from './pages/Splash';
import Team from './pages/Splash';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Splash />}/>
        <Route path={process.env.PUBLIC_URL + "/start"} element={<Starter />}/>
        <Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>

        <Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
        <Route path={process.env.PUBLIC_URL + "/team"} element={<Team />}/>
        <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
        <Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
        <Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>
      </Routes>
    </Router>
  );
}

export default App;
