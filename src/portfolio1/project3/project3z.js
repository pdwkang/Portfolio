import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Movie Database</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/movie-app'>
							<img src={require('./movie.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>

						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/movie-app'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'>Movie application that displays currently 
					playing movies, nearby theater ticketing through Fandango, popular tv shows,                  
					and a movie search query through <i>The Movie Data Base</i> API.
				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>JavaScript</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>Bootstrap</div>
					<div className='tags'>jQuery</div>					
					<div className='tags'>Ajax</div>
					<div className='tags'>JSON</div>
					<div className='tags'>Movie API</div>
				</div>
			</div>
		)
	}
}

class Portfolio3z extends Component{
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

export default Portfolio3z