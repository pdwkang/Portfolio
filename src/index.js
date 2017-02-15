import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './compassSass.css';
import NavBar from './navbar.js'
import Home from './home/home.js'
import Portfolio1 from './portfolio1/portfolio1.js'
import Contact from './contact/contact.js'
import contactBackground from './contact/bbb.png'
import SkillsTable from './portfolio1/skillstable.js'
class Portfolio extends Component {
	render(){
		return (
    		<div>
    			<div className='portrait'><img src={contactBackground} alt='a'/></div>
    			<NavBar />

				<div id='home' className='vh home'>
					<Home />
				</div>	
				<div id='portfolio'>
					<div className='portfolio-background'>

						<div id='portfolio1' className='portfolio1'>
						
							<Portfolio1 />
							
						</div>
					</div>
					<div style={{width:'100%', height:'100%', backgroundColor:'white'}}>
						<SkillsTable/>
					</div>
					<div className='contact-tab'>
						<div id='contact' className='contact'>							
							<Contact />
						</div>
						
						<div className='rights' id='rights'>Copyright &copy; www.pauldkang.com 2017
							<div className='emailz'>dwkang3403@gmail.com</div>
						</div>
						
					</div>
				</div>

			</div>
		);
	}
};

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);
