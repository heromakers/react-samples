// import AppButton from "./AppButton";
// import ContactInfo from "./ContactInfo";
// import Copyright from "./Copyright";
// import FooterContent from "./FooterContent";

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
