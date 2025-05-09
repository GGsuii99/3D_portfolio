import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2025 <strong>Ethem Beldagli</strong>. All rights reserved.
        </p>


      </div>
    </footer>
  );
};

export default Footer;
