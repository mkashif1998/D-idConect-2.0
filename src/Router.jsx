import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsCondtion from "./pages/TermsCondtion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacyPage />} />
        <Route path="/termscondition" element={<TermsCondtion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
