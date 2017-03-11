import React from 'react';
var Scroll = require('react-scroll')
var Link      = Scroll.Link;
var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;
import {Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap'



var NavBar = React.createClass({
  	componentDidMount: function() {
    	Events.scrollEvent.register('begin', function(to, element) {});
    	Events.scrollEvent.register('end', function(to, element) {});
    	scrollSpy.update();
	},

	componentWillUnmount: function() {
    	Events.scrollEvent.remove('begin');
    	Events.scrollEvent.remove('end');
	},

	render: function () {
    	return (	
			<div className='portfolio-nav-bar'>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Toggle />
					</Navbar.Header>
	    			<Navbar.Collapse>
	      				<Nav pullRight>
	        				<NavItem eventKey={1} href="/">
	        					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} to="home" spy={true} smooth={true} duration={700} ><div className='each-nav-child'>Home</div></Link></div>
	        				</NavItem>
	        				<NavItem eventKey={2} href="/">
	        					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} to="portfolio" spy={true} smooth={true} duration={700} ><div className='each-nav-child'>Projects</div></Link></div>
	        				</NavItem>
	        				<NavItem eventKey={2} href="/">
	        					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} to="skills" spy={true} smooth={true} duration={700} ><div className='each-nav-child'>Skills</div></Link></div>
	        				</NavItem>	        				
							<NavItem eventKey={3} href="/">
	        					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} to="contact" spy={true} smooth={true} duration={800} ><div className='each-nav-child'>Contact</div></Link></div>
	        				</NavItem>
	      				</Nav>
	    			</Navbar.Collapse>
  				</Navbar>		
  			</div>
		);
	}
});

export default NavBar

	// <div className='portfolio-nav-bar'>
	// 			{/*<div className='paul'>Paul</div>*/}
	// 			<div className='nav-align-right'>
	// 				<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeclassName="active" to="home" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Home</div></Link></div>
	// 				{<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeclassName="active" to="about" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>About</div></Link></div>
	// 				<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeclassName="active" to="skills" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Skills</div></Link></div>}
	// 				<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeclassName="active" to="portfolio" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Portfolio</div></Link></div>
	// 				<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeclassName="active" to="contact" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Contact</div></Link></div>
	// 			</div>
				

	// 		</div> 
