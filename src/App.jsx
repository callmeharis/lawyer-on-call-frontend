import React from "react";
import Hero from "./components/hero/Hero";
import Services from "./components/what-you-get/WhatYouGet";
import ExpertHelp from "./components/expert-help/ExpertHelp";
import VerifiedExperts from "./components/verified-experts/VerifiedExpert";
import BgCntAfford from "./components/bg-cnt-afford/BgCntAfford";
import FooterComponent from "./components/Footer";

export default function App() {
  return (
    <div>
      <Hero />
      <Services />
      <ExpertHelp />
      <VerifiedExperts />
      <BgCntAfford />
      <FooterComponent />
    </div>
  );
}
