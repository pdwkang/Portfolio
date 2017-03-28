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
				<div className='upd8ed-header'>Pygame, Plants Vs Zombies Clone &nbsp;&nbsp;&nbsp;<a style={{fontSize:16, fontFamily:'Libre Franklin'}} target='_blank' href='https://youtu.be/uUWaEBpFAoA'>Video Link</a></div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<video width="100%" controls src={require("./pvz-10s.mp4")} type="video/mp4" autoPlay loop muted/>
						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/Pygame'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'>
					 A tower defense game created in Python using the Pygame module. 
					 The game involves upgradable gunners(towers) fighting against ancient enemies in a grid / lane based map.
				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>Python</div>
					<div className='featured tags'>Pygame</div>
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


