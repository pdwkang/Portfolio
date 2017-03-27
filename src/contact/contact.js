import React, { Component } from 'react';
import $ from 'jquery';



class MyForm extends Component {
	render(){
		return(
			<form >
				<div className='row'>
					<div className='about-me-description col-lg-6 col-md-6 col-sm-11 col-xs-11'>
						<div className='actual-text'>
							I’m a web developer based in Atlanta. 
							<br/><br/>
							I earned my Bachelor’s  &nbsp;<span className='glyphicon glyphicon-education'></span>&nbsp; Degree in Psychology from the <a href='http://www.uga.edu/' target='_blank' className='contact-a-tag'>University of Georgia</a> and simultaneously found a passion for coding. 
							Much like how the human mind processes information, I was fascinated with the way computers quickly process data and algorithms.
							<br/><br/>
							This led me to join <a href='http://www.digitalcrafts.com/' target='_blank' className='contact-a-tag'>DigitalCrafts</a>, a 16-week immersive coding bootcamp, where I trained to become a full stack developer.
							<span className='hidden-xs'>
								<br/><br/>
								I also spent two years abroad in South Korea to serve in the military as an <a className='contact-a-tag' href='https://www.youtube.com/watch?v=cmeZAmjX8XE&t=212s' target='_blank'>ATCIS-R</a> operator, a Geolocation <span className='glyphicon glyphicon-map-marker'></span> Tool 
								used to track and update real-time personnel or inventory information on the ROKA Intranet server.
								<br/><br/>
								In my free time, I enjoy playing golf, traveling and all things NBA. 
							</span>	
							<br/><br/>
							If you have any questions or just want to say hello, feel free to contact me using any of the links below!
							<br/><br/>
							<div style={{display:'inline-block',width:'50%'}}>(706) 424-0364</div>
							<div style={{display:'inline-block',width:'50%', textAlign:'right'}}>paulkangdev@gmail.com</div>
						</div>
					</div>
				</div>
				<div></div>
  				<div className='row' style={{paddingLeft:30}}>
  					<div className='linkz'><a target="_blank" href='https://github.com/pdwkang'><img src={require('./github.png')} alt='a' /></a></div>
  					<div className='linkz'><a target="_blank" href='https://www.linkedin.com/in/paul-kang-373820131'><img src={require('./linkedin.png')} alt='a' /></a></div>
  					<div className='linkz'><a href='mailto:paulkangdev@gmail.com'><img src={require('./email.png')} alt='a' /></a></div>
  					<div className='linkz'><a href={require("../../public/PaulKangResume.pdf")} target="_blank"><img src={require('./resume.png')} alt='a' /></a></div>
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