import React from "react";
import { FooterContainer } from "../Styles/Style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="https://about.linkedin.com/">
        <p>About</p>
      </Link>
      <Link to="https://www.linkedin.com/accessibility">
        <p>Accessibility</p>
      </Link>
      <Link to="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_feed">
        <p>HelpCenter</p>
      </Link>
      <Link to="https://www.linkedin.com/legal/privacy-policy">
        <p>Privacy & Terms</p>
      </Link>
      <Link to="https://www.linkedin.com/help/linkedin/answer/a1342443/">
        <p>Ad Choices</p>
      </Link>
      <Link to="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart">
        <p>Advertising</p>
      </Link>
      <Link to="https://business.linkedin.com/en-in/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control-en-in&src=li-nav">
        <p>Business Services</p>
      </Link>
      <Link to="https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN">
        <p>Get the LinkedIn app</p>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
