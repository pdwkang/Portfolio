import React, { Component } from 'react'
import Code from './sublime.js'


class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Upd<span style={{color:'#4099ff'}}>8</span>ed, News Aggregator
					{/*<div className='featured-github-link'>
						<a target='_blank' href='https://github.com/mason0958/News-Aggregator'><img src={require('./others/images/git.png')} alt='a'/></a>
					</div>*/}
				</div>
				
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/news'>
						<img src={require('./images/tv1.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>

						<div className='github-main' style={{position:'absolute', top:-16, right:10, width:90, zIndex:999}}>	
							<a target="_blank" href='https://github.com/mason0958/News-Aggregator'>
								<img style={{width:'100%'}} alt='a' src={require('./others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'><i>Upd8ed</i> is a one-stop shop that provides the viewer with the latest business, entertainment, 
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

class Portfolio1z extends Component{
	render(){
		return(
				<div className='portfolio-page'> 
					<div className='hidden-xs col-sm-6 col-md-6 project-wrapper'>
						<Project />
					</div>
					<div className='hidden-xs col-sm-6 col-md-6 sublime-wrapper'>
						<Code />
					</div>
				</div>		
		)
	}
}

export default Portfolio1z