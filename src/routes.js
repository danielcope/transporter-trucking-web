import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import ContactPage from "./components/pages/ContactPage";

export default (
  <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/contactpage" element={<ContactPage />} />
  </Routes>
);
