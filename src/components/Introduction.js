import React from 'react'
import '../static/css/Introduction.css'
export default () => {
  return (
    <div className="introduction-section text-center">
        <div className="introduction-wrapper">
          <div className="introduction-heading">
            <div className="heading-1">We're leaders in</div>
            <h4 className="heading-2">Creative Digital Recruitment</h4>
          </div>
          <hr className="introduction-hr"/>
          <div className="introduction-description">
            <p>Based in Surry Hills, the creative hub of Sydney we are surrounded by creativity
and that reflects on the type of jobs we recruit for.</p>
          </div>
          <div className="introduction-button-section">
            <button type="button" className="btn btn-default btn-about-us">Find out more about us</button>
          </div>
        </div>
    </div>
  )
}
