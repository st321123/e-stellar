import React from "react";
import { Link } from "react-router-dom";
import FOOTER_LINKS from "../../../public/data/footer_links";
import FOOTER_CONTACT_INFO from "../../../public/data/footer_contact";
import SOCIALS from "../../../public/data/socials";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footerContainer">
        <Link className="shoppee" to="/">Stellar</Link>
        <div className="footerContent">
          {FOOTER_LINKS.map((col) => (
            <span className="footerColumn" title={col.title} key={col.title}>
              {col.title}
              <ul>
                {col.links.map((link) => (
                  <li key={link}><Link to={link}>{link}</Link></li>
                ))}
              </ul>
            </span>
          ))}
          <div>
            <span className="footerColumn" title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.title}
              <ul>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label}><Link to="/contact">{link.label}: {link.value}</Link></li>
                ))}
              </ul>
            </span>
          </div>
          <div>
            <span className="footerColumn" title={SOCIALS.title}>
              {SOCIALS.title}
              <ul className="icons">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}><img src={link} alt={`social-icon-${index}`} /></li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div className="rightsFoot">
        <span>{currentYear} Stellar | All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
