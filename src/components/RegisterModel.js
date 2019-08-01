import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
export default class componentName extends Component {
	state = {
		showModal:false
	}
	getInitialState() {
		return { showModal: false };
	}
	
	close() {
	this.setState({ showModal: false });
	}

	open() {
	this.setState({ showModal: true });
	}

	render() {
		return (
		<div>
		<Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch demo modal</Button>
		<Modal.Dialog show={this.state.showModal} onHide={this.close}>
			<Modal.Header closeButton>
			<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>

			<Modal.Body>
			<p>Modal body text goes here.</p>
			</Modal.Body>

			<Modal.Footer>
			<Button variant="secondary" onClick={this.close}>Close</Button>
			<Button variant="primary">Save changes</Button>
			</Modal.Footer>
		</Modal.Dialog>
		</div>
		)
	}
}
