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
				<Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link>
				<Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link>
				<Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
				<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>       
			</div> 
		);
	}
});

export default NavBar