import React from 'react';
import './Footer.scss';
import * as icons from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="footer-container">
      <div className="container py-2">
        <div className="row mt-2">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center justify-content-sm-center justify-content-md-start mx-auto text-center d-md-flex align-items-center flex-nowrap footer-thumbnails">
            <div className="footer-icon"><icons.EnvelopePaper /></div>
            <p className="mx-2 mt-2 mt-sm-0">jaswanth.k.bevara@gmailcom</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center justify-content-sm-center justify-content-md-start mx-auto text-center d-md-flex align-items-center flex-nowrap footer-thumbnails">
            <div className="footer-icon"><icons.TelephoneInboundFill /></div>
            <p className="mx-2 mt-2 mt-sm-0">+91-9493454424</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center justify-content-sm-center justify-content-md-start mx-auto text-center d-md-flex align-items-center flex-nowrap footer-thumbnails">
            <div className="footer-icon"><icons.PersonVcardFill /></div>
            <p className="mx-2 mt-2 mt-sm-0">3+ Years experience</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center justify-content-sm-center justify-content-md-start mx-auto text-center d-md-flex align-items-center flex-nowrap footer-thumbnails">
            <div className="footer-icon"><icons.GeoAltFill /></div>
            <p className="mx-2 mt-2 mt-sm-0">Hyderabad, India. 50081</p>
          </div>
        </div>
        <div className="d-flex my-4 mx-auto justify-content-center">
          <a className="btn btn-outline-primary mx-2" href="https://www.linkedin.com/in/jaswanth-bevara" target="_blank" rel="noopener noreferrer"><icons.Linkedin /></a>
          <a className="btn btn-outline-primary mx-2" href="https://github.com/jaswanth-b-kumar" target="_blank" rel="noopener noreferrer"><icons.Github /></a>
          <a className="btn btn-outline-primary mx-2" href="https://instagram.com/jaswanth_bevara?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><icons.Instagram /></a>
        </div>
        <p className="copyright-divider text-center my-0 pt-2">© 2023 Jaswanth Kumar Bevara. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer