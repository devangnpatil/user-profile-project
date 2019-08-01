import React from 'react'
import { Form, Button } from 'react-bootstrap';
import RegisterModel from './RegisterModel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../static/css/Hero.css'
export default () => {
  return (
	<>
		<div className="hero-section">
		<div className="container">
			<div className="row">
			<div className="col-sm-12">
				<div className="hero-header">
					<h2>I'm looking for..</h2>
				</div>
				<div className="search-bar-section">
				<Form>
					<div className="row">
						<div className="col-sm-8">
							<Form.Group controlId="formSearchInputBox">
								<Form.Control type="text" placeholder="Enter a Job Description" />
							</Form.Group>
						</div>
						<div className="col-sm-3">
							<Button variant="primary" type="submit" className="btn-primary btn-search"><span><FontAwesomeIcon icon={faSearch} /></span>Search</Button>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<Form.Group className="select-job">
									<Form.Check inline type="checkbox" label="Full Time" />
									<Form.Check inline type="checkbox" label="Part Time / Casual / Freelnce" />
							</Form.Group>
						</div>
						<div className="col-sm-4">
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Control as="select">
									<option value="">Select your location</option>
									<option value="India">India</option>
									<option value="China">China</option>
									<option value="US">US</option>
									<option value="Nepal">Nepal</option>
								</Form.Control>
							</Form.Group>
						</div>
					</div>
				</Form>
				</div>
				<div className="register-button-wrapper">
					<button type="button" className="btn btn-primary btn-register">Register</button>
				</div>
			</div>
			</div>
		</div>
		{/* <RegisterModel></RegisterModel> */}
		</div>
	</>
  )
}
