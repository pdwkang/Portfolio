import React, { Component } from 'react';
import Car from './car.js'
var Scroll = require('react-scroll')
var Link      = Scroll.Link;

class Home extends Component{
	render(){
		return(
			<div>
				<Car />
				<div style={{position:'absolute', fontSize:17,fontFamily:'Libre Franklin', fontWeight:900, width:'100%',bottom:35, textAlign:'center'}}>This portfolio is built in React.js

				</div>
				<Link to="portfolio" spy={true} smooth={true} duration={1000} ><div className='arrow-wrapper'><div className='arrow bounce'></div></div></Link>
			</div>
		)
	}
}

export default Home