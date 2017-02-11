import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Eat<span style={{color:'#BF360C'}}>i</span>ng N<span style={{color:'#BF360C'}}>e</span>m<span style={{color:'#BF360C'}}>o</span></div>
					{/*<div className='featured-github-link'>
						<a target='_blank' href='https://github.com/mason0958/News-Aggregator'><img src={require('./others/images/git.png')} alt='a'/></a>
					</div>*/}
				
				<div className='project-image' style={{width:'93%'}}>
					<div className='project-image-div'>
						<img src={require('./tv.png')} width="100%" height='100%' alt='a'/>
					</div>
					<div className='show-on-hover'>
						<a target='_blank' href='http://pauldkang.com/news'>Live Demo</a>
					</div>
				</div>
				<div className='project-description'>blahblachalsdhkalfk<br/>blahblachalsdhkalfk<br/>blahblachalsdhkalfk<br/></div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Tags</div>
					<div className='tags'>JavaScript</div>
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

export default Portfolio2z