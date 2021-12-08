import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import ContactPage from "./components/pages/ContactPage";
import AboutSection from "./components/AboutSection";

export default (
  <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/contactpage" element={<ContactPage />} />
    <Route path="/aboutsection" element={<AboutSection />} />
  </Routes>
);
