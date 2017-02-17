import React, { Component } from 'react';
import $ from 'jquery';



class MyForm extends Component {
// 	componentDidMount() {
// 		$.ajax({
//     url: 'http://localhost:3003/email/send',
//     headers: {
//         'Content-Type':'application/x-www-form-urlencoded'
//     },
//     method: 'POST',
//     crossDomain: 'true',
//     dataType: 'json',
//     data: {'email':'aaa','password': 'aaa', 'number': 'aaa'},
//     success: (data)=>{
//       console.log('YOU SEND THE DATA TO THE BACKEND!')
//     }
//     }) .fail(function(jqXhr) {
//   console.log('failed');
// });
// 	}
	

	render(){
		return(
			<form >
				{/*

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
				*/}
				<div className='row'>
					<div className='about-me-description col-lg-5 col-md-6 col-sm-7 col-xs-11'>
						<div className='actual-text'>
							I{"'"}m a web developer based in Atlanta. 
							<br/><br/>
							I received a Psychology degree from UGA 
							prior to discovering my passion for coding. 
							This led me to join DigitalCrafts, a 16-week immersive coding bootcamp.
							<br/><br/>
							When I{"'"}m not coding, I memorize useless NBA stats or 
							spend time on the golf course looking for my own balls. 
							<br/><br/>
							If you'd like to chat, send me an email !
						</div>
					</div>
				</div>
				<div></div>
  				<div className='row'>
  					<div className='linkz'><a target="_blank" href='https://github.com/pdwkang'><img src={require('./github.png')} alt='a' /></a></div>
  					<div className='linkz'><a target="_blank" href='https://www.linkedin.com/in/paul-kang-373820131'><img src={require('./linkedin.png')} alt='a' /></a></div>
				</div>
  			</form>			
		)
	}
}

// <a href='mailto:paulkangdev@gmail.com'>asdf</a>
class ContactHeader extends Component{
	render(){
		return(
			<div style={{marginTop:75, marginLeft:10}}>
				<div className='project-titles-header4'>
					<div className='project-title-left-top4'></div>
					HI, I{"'"}m Paul
					<div className='project-title-bottom-right4'></div>
				</div>  				
			</div>
		)
	}
}
class Contact extends Component{
	render(){
		return(
			<div className='contact-wrapper'>
				<ContactHeader />
				<div className='contact-left-column'>
					<MyForm />
				</div>

			</div>
		)
	}
}

export default Contact