import React, { Component } from 'react';

class MyForm extends Component {
	render(){
		return(
			<form >
				<div className="form-group row">
					
					<div className='col-xs-6'><textarea placeholder='Name' className="form-control contact-form" rows="1"></textarea></div>
    				<div className='col-xs-6'><textarea placeholder='Phone' className="form-control contact-form" rows="1"></textarea></div>
    			</div>
    			<div className="form-group row">	
    				<div className='col-xs-12'><textarea placeholder='Email' className="form-control contact-form" rows="1"></textarea></div>
  				</div>			
				<div className="form-group row">
    				<div className='col-xs-9 contact-message'><textarea placeholder='Message....in progress. Instead, please send me an email at dwkang3403@gmail.com or call me at 706-424-0364' className="form-control contact-form " rows="4"></textarea>
						
    				</div>
    				<div className='col-xs-3 contact-btn-margin-left'>
							<button className='btn btn-contact'>Send</button>
						</div>
  				</div>
  				<div className='row'>
  					<div className='col-xs-4 col-sm-3 linkz'><a target="_blank" href='https://github.com/pdwkang'><img src={require('./github.png')} alt='a' /></a></div>
  					<div className='col-xs-4 col-sm-3 linkz'><a target="_blank" href='https://github.com/pdwkang'><img src={require('./linkedin.png')} alt='a' /></a></div>
				</div>

  			</form>			
		)
	}
}
class ContactHeader extends Component{
	render(){
		return(
			<div className="contact-header">
				Get in touch
			</div>
		)
	}
}
class Contact extends Component{
	render(){
		return(
			<div className='contact-wrapper'>
				<ContactHeader />
				<div className='contact-left-column col-sm-offset-1 col-md-6 col-sm-8 col-xs-12'>
					<MyForm />
				</div>

			</div>
		)
	}
}

export default Contact