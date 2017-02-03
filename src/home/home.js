import React, { Component } from 'react';
import Car from './car.js'

class Home extends Component{
	render(){
		return(
			<div>
				<Car />
				<div style={{position:'absolute', fontSize:17,fontFamily:'Libre Franklin', width:'100%',bottom:15, textAlign:'center'}}>This portfolio is built in React.js</div>
			</div>
		)
	}
}

export default Home