import React, { Component } from 'react'
import Code from './sublime.js'

class Project extends Component{
	render(){
		return(
			<div>
				<div className='upd8ed-header'>New Story, Video Translation Tool</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://pauldkang.com/new_story/#/'>
						<img src={require('./tv.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>
						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/Story-Translate'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>

				<div className='project-description'>
					Web application that allows charity givers, translators, and admins of <a href='https://www.newstorycharity.org/' target='_blank'><u>New Story</u></a> to 
					view, upload and translate videos. New Story Charity is a nonprofit organization that builds homes and communities for families in need.  
					The application is designed for internal use only, demo site has <span style={{color:'green'}}>username</span> and <span style={{color:'green'}}>password</span> set to <span style={{color:'green'}}>'test'</span> / <span style={{color:'green'}}>'test'</span>

				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>{'< video >'}</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>Sass</div>
					<div className='tags'>JavaScript</div>
					<div className='tags'>jQuery</div>
					<div className='featured tags'>Angular 1.5</div>
					<div className='tags'>ui-router</div>
					<div className='tags'>Materialize</div>
					<div className='tags'>Node.js</div>
					<div className='featured tags'>Express</div>
					<div className='tags'>Multer</div>
					<div className='tags'>rand-token</div>
					<div className='tags'>fs</div>
					<div className='featured tags'>MySql</div>
					<div className='tags'>Git</div>
				</div>
			</div>
		)
	}
}

class Portfolio5z extends Component{
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

export default Portfolio5z

// <a href='https://newstorycharity.org/sponsor/' target='_blank'><u>families</u></a>