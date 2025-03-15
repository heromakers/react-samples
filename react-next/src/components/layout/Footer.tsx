"use client";

import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="footer -type-1">
      <div className="container">
        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
