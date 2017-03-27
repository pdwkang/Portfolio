import React, { Component } from 'react'
import Code from './sublime.js'
import ReactPlayer from 'react-player'

class Project extends Component{
	constructor() {
		super();
    	this.state = {modalIsOpen: false};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({modalIsOpen: true});
	}
	afterOpenModal() {
		this.refs.subtitle.style.color = '#f00';
	}
	closeModal() {
		this.setState({modalIsOpen: false});
	}	
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Eating Nemo, Canvas Game &nbsp;&nbsp;&nbsp;<a style={{fontSize:16, fontFamily:'Libre Franklin'}} href='https://www.youtube.com/watch?v=2Ok6tEpgFLc&feature=youtu.be'>Video Link</a></div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/nemo'>
							<ReactPlayer width='100%' height='300px' url='https://www.youtube.com/watch?v=2Ok6tEpgFLc&feature=youtu.be' playing />
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
					<i>Eating Nemo</i>&nbsp; is a shark role playing game created in native javascript that includes two game modes: Arcade Mode (Normal) and 2D Shooting Mode (Boss)
				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>{'< Canvas >'}</div>
					<div className='tags'>CSS3</div>
					<div className='featured tags'>JavaScript</div>
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


