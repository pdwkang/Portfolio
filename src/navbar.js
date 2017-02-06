import React from 'react';
var Scroll = require('react-scroll')
var Link      = Scroll.Link;
var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;


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
				{/*<div className='paul'>Paul</div>*/}
				<div className='nav-align-right'>
					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeClass="active" to="home" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Home</div></Link></div>
					{/*<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeClass="active" to="about" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>About</div></Link></div>
					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeClass="active" to="skills" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Skills</div></Link></div>*/}
					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Portfolio</div></Link></div>

					
					<div className='each-nav'><Link style={{color:'white', textDecoration:'none'}} activeClass="active" to="contact" spy={true} smooth={true} duration={500} ><div className='each-nav-child'>Contact</div></Link></div>
				</div>
				

			</div> 

		);
	}
});

export default NavBar