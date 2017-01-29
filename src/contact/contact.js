import React, { Component } from 'react';

class ContactHeader extends Component{
	render(){
		return(
			<div className="contact-header">
				Contact? get in touch? info?
			</div>

		)
	}
}
class Contact extends Component{
	render(){
		return(
			<div className='contact-wrapper'>
				<ContactHeader />
			</div>
		)
	}
}

export default Contact