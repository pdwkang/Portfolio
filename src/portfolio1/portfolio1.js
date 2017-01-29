import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Upd<span style={{color:'#4099ff'}}>8</span>ed, News Aggregator</div>
				
				<div className='project-image' style={{width:'90%', marginLeft:'5%'}}>
					<div className='project-image-div'>
						<img src={require('./images/tv1.png')} width="100%" height='100%' alt='a'/>
					</div>
					<div className='show-on-hover'>
						<a target='_blank' href='https://github.com/mason0958/News-Aggregator'><div className='project-link'>GitHub</div></a>
						<a target='_blank' href='http://pauldkang.com/news'><div className='project-link'>Live Demo</div></a>
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

class Portfolio1 extends Component{
	render(){
		return(
			<div>
				<div className='col-xs-12 col-sm-7 col-md-6 project-wrapper'>
					<Project />
				</div>
				<div className='hidden-xscol-sm-5 col-md-6 sublime-wrapper'>
					<Code />
				</div>
			</div>
		)
	}
}

export default Portfolio1