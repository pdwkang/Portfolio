import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<img src={require('./images/tv1.png')} width="100%" height='90%' alt='a'/>
			</div>
		)
	}
}

class Portfolio1 extends Component{
	render(){
		return(
			<div>
				<div className='col-sm-7 col-md-6 project-wrapper'>
					<Project />
				</div>
				<div className='col-sm-5 col-md-6 sublime-wrapper'>
					<Code />
				</div>
			</div>
		)
	}
}

export default Portfolio1