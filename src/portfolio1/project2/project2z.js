import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Eat<span style={{color:'#BF360C'}}>i</span>ng N<span style={{color:'#BF360C'}}>e</span>m<span style={{color:'#BF360C'}}>o</span>, Canvas Game</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/nemo'>
						<img src={require('./tv.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>

						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/canvas-game'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>

				<div className='project-description'>
					<i>Eating Nemo</i> is a Shark role playing game created in native javascript that includes two game modes: Feeding Frenzy (Normal) and 2D Shooting Mode (Boss)
				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Tags</div>
					<div className='tags'>JavaScript</div>
					<div className='tags'>{'< Canvas >'}</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
				</div>
			</div>
		)
	}
}

class Portfolio2z extends Component{
	render(){
		return(
			<div className='portfolio-page'> 
				<div className='col-xs-8 col-xs-offset-4 col-sm-6 col-md-6 project-wrapper'>
					<Project />
				</div>
				<div className='hidden-xs col-sm-6 col-md-6 sublime-wrapper'>
				<div style={{position:'absolute', right:0, top:0, width:'100%', height:75, backgroundColor:'#171814', zIndex:2}}></div>
					<Code />
				</div>
			</div>
		)
	}
}

export default Portfolio2z