import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection1";
import PromoSection from "../components/PromoSection";
import AboutSection from "../components/AboutUs";
import FeatureSection from "../components/Features";
import DownloadSection from "../components/Download";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <PromoSection />
          <FeatureSection />
          <AboutSection />
          <Screenshots />
          <DownloadSection />
          {/* <DownloadSection /> */}
          <PricingSection hideFaq={false} />
          {/* <Testimonial /> */}
          {/* <TeamMember /> */}
          <ContactSection />
          {/* <TrustedCompany /> */}
        </div>
        {/* <SubscribeSection /> */}
        {/* <FooterSection /> */}
        <footer className="footer-section">
        <div className="footer-bottom gray-light-bg pt-4 pb-4">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-md-6 col-lg-5">
                <p className="copyright-text pb-0 mb-0">
                  Copyrights © 2022. All rights reserved by
                  <a href="/#"> WayFar</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </footer>
        
      </React.Fragment>
    );
  }
}

export default Theme;
