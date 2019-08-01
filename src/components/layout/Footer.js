import React from 'react'

export default () => {
  return (
    <footer>
      <div className="row">
        <div className="col-sm-6">
          <div className="footer-left-section">
            <p className="footer-email-text"><a href="mailto:hello@twobyte.com.hu">hello@twobyte.com.hu</a></p>
            <p className="footer-copyright-text">Copyright © 2014 Two Bytes Consulting. <span>Terms & Policies.</span></p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="footer-right-section">
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
    </footer>
  )
}
