import React from 'react'
import profileImg from '../images/profile-image.png'
import '../static/css/Profile.css'
export default () => {
	return (
		<div className="profile-section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<h3 className="profile-header">Profile</h3>
					</div>
					<div className="row">
						<div className="col-sm-4 offset-md-1">
							<div className="profile-image-section">
								<div className="profileImage">
									<img alt="John Doe" src={profileImg} />
								</div>
								<div className="profile-buttons">
									<button type="button">Edit Photo</button>
									<button type="button">Edit Profile</button>
								</div>
							</div>
						</div>
						<div className="col-sm-7">
							<div className="profile-description">
								<p>I’m Caroline Kassidy and Im above 20 years and you can send your emails to caroline.kassidy@publicis.com. I live in the state of Alaska. I like to  play hockey, football and reading books. And please send me newsletters. Please reach out to me on my phone number. </p>
								<button type="button">Agree</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
