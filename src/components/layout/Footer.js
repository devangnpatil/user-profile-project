import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../static/css/Footer.css'
export default () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-left-section">
              <p className="footer-email-text">
								<FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:hello@twobyte.com.hu">hello@twobyte.com.hu</a>
              </p>
              <p className="footer-copyright-text">Copyright © 2014 Two Bytes Consulting. <span>Terms & Policies.</span></p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-right-section pull-right">
              <ul className="social-links">
                <li>
                <a href="https://twitter.com/devangnpatil?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-screen-name="false" data-dnt="true" data-show-count="true">Tweet</a>
                </li>
                <li>
                <div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}