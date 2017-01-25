import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './compassSass.css';
import NavBar from './navbar.js'
import Home from './home.js'
import Portfolio1 from './portfolio1.js'
import Portfolio2 from './portfolio2.js'
import Skills from './skills.js'
import Contact from './contact.js'

class Portfolio extends Component {
	render(){
		return (
    		<div>
    			<NavBar />
				<div id='home' className='vh home'>
					<Home />
				</div>
				<div id='portfolio' className='vh portfolio1'>
					<Portfolio1 />
				</div>
				<div className='vh portfolio2'>
					<Portfolio2 />
				</div>
				<div id='skills' className='vh skills'>
					<Skills />
				</div>
				<div id='contact' className='vh contact'>
					<Contact />
				</div>
			</div>
		);
	}
};

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);