import React, { Component } from 'react';

class About extends Component{
	render(){
    	return (
    		<div className='about-background'>
				<div className='col-sm-offset-1 col-sm-10 col-lg-offset-2 col-lg-8 col-xs-12 about-wrapper'>
					<div className='absolute-top-about'>
					<div className='col-sm-3 hidden-xs picture-frame pic1'>
						<div className='each-picture'><img src={require('./hike.jpg')} alt='a'/></div>
					</div>
					<div className='col-sm-4 col-xs-6 picture-frame col-xs-offset-3 col-sm-offset-1 pic2'>
						<div className='each-picture'><img src={require('./family2.jpg')} alt='a'/></div>
					</div>
					<div className='col-sm-3 hidden-xs picture-frame col-sm-offset-1 pic3'>
						<div className='each-picture'><img src={require('./uga.jpg')} alt='a'/></div>
					</div>
					</div>
					<div className='absolute-bottom-about'>
					<div className='col-xs-12'>
						<div className='col-sm-3 hidden-xs picture-frame left-pic'>
							<div className='each-picture'><img src={require('./army.jpg')} alt='a'/></div>
						</div>
						<div className='col-sm-6 col-xs-10 col-xs-offset-1 col-sm-offset-0 laptop'>
							<div className='laptop-body'>
								<div className='laptop-screen'>
									<div className='laptop-picture'><img src={require('./dc.png')} alt='a'/><img src={require('./dc2.png')} alt='a'/></div>
								</div>
							</div>
							<div className='laptop-white-part'>
								<div className='black-dot'>
									<div className='actual-dot'></div>
								</div>
							</div>
							<div className='laptop-stand'></div>
							<div className='stand-bottom'></div>
						</div>
						<div className='col-sm-3 hidden-xs picture-frame right-pic'>
							
						</div>

					</div>	
					</div>					
				<div className='desk-wrapper'></div>
					<div className='leg-left'></div>	
					<div className='leg-right'></div>	
				</div>

			</div> 
		);
	}
};

export default About