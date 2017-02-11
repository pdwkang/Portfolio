import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Movie Database
					{/*<div className='featured-github-link'>
						<a target='_blank' href='https://github.com/mason0958/News-Aggregator'><img src={require('./others/images/git.png')} alt='a'/></a>
					</div>*/}
				</div>
				
				<div className='project-image' style={{width:'93%'}}>
					<div className='project-image-div'>
						<img src={require('./movie.png')} width="100%" height='100%' alt='a'/> 
					</div>
					<div className='show-on-hover'>
						<a target='_blank' href='http://pauldkang.com/news'>Live Demo</a>
					</div>
				</div>
				<div className='project-description'>Upd8ed is a one-stop shop that provides the viewer with the latest business, entertainment, 
				global, and sports news aggegated from over 60 different news sources</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Tags</div>
					<div className='featured tags'>React.js</div>
					<div className='featured tags'>React-Router</div>
					<div className='featured tags'>NPM</div>
					<div className='tags'>JavaScript</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>Node.js</div>
					<div className='tags'>Bootstrap</div>
					<div className='tags'>Responsive Design</div>
					<div className='tags'>jQuery</div>					
					<div className='tags'>Ajax</div>
					<div className='tags'>Yahoo Stock API</div>
					<div className='tags'>Weather API</div>
					<div className='tags'>News API</div>
					<div className='tags'>Agile Development</div>
				</div>
			</div>
		)
	}
}

class Portfolio3z extends Component{
	render(){
		return(
			<div className='portfolio-page'> 
				<div className='col-xs-12 col-sm-7 col-md-6 project-wrapper'>
					<Project />
				</div>
				<div className='hidden-xs col-sm-5 col-md-6 sublime-wrapper'>
					<Code />
				</div>
			</div>
		)
	}
}

export default Portfolio3z