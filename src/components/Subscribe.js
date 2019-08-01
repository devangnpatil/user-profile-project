import React from 'react'
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../static/css/subscribe.css'
export default () => {
	return (
		<div className="subscribe-section">
			<div className="subscribe-wrapper">
			<div className="search-bar-section">
				<Form>
					<div className="row">
						<div className="col-sm-9">
							<Form.Group controlId="formSubscribeInputBox">
								<Form.Label>Subscribe to your Job Mailing List</Form.Label>
								<Form.Control type="text" placeholder="Enter your email address" className="input-email-subscription"/>
								<FontAwesomeIcon icon={faEnvelope} />
							</Form.Group>
						</div>
					</div>
				</Form>
				</div>
			</div>
		</div>
	)
}


