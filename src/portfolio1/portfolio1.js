import React, { Component } from 'react'
import Portfolio1z from './project1z.js'
import Portfolio2z from './project2/project2z.js'
import Portfolio3z from './project3/project3z.js'
import Portfolio4z from './project4/project4z.js'


class ProjectTitle1 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	
	}
	onClick(){
		this.props.onClick(<Portfolio1z />, 'tab1')
	}
	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab1'){
			selectedTab = 'selected-tab'
		}

		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Upd8ed</div>
			</div>
		)
	}
}

class ProjectTitle2 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Portfolio2z />, 'tab2')
	}

	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab2'){
			selectedTab = 'selected-tab'
		}

		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Eating Nemo</div>

			</div>
		)
	}
}

class ProjectTitle3 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Portfolio3z />, 'tab3')
	}

	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab3'){
			selectedTab = 'selected-tab'
		}

		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Movie App</div>

			</div>
		)
	}
}

class ProjectTitle4 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Portfolio4z />, 'tab4')
	}

	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab4'){
			selectedTab = 'selected-tab'
		}

		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Black Jack</div>

			</div>
		)
	}
}

class ProjectTitle5 extends Component{
	render(){
		return(
			<div className='tab-wrapper'>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>coming soon</div>
			</div>
		)
	}
}



class Portfolio1 extends Component{
	constructor(props) {
		super(props);
		this.state = {
			projectDescription: <Portfolio1z />,
			projectTarget: 'tab1',
		}
		this.onClick = this.onClick.bind(this)
	}
	onClick(projectDescription, projectTarget){
		this.setState({
			projectDescription:projectDescription,
			projectTarget:projectTarget
		})
	}
	render(){
		return( 
			<div>
				<div className='project-titles'>
					<div className='project-titles-header'>Projects</div>
					<ProjectTitle1 onClick={this.onClick} target={this.state.projectTarget}/>
					<ProjectTitle2 onClick={this.onClick} target={this.state.projectTarget}/>
					<ProjectTitle3 onClick={this.onClick} target={this.state.projectTarget}/>
					<ProjectTitle4 onClick={this.onClick} target={this.state.projectTarget}/>
					<ProjectTitle5/>
					<ProjectTitle5/>

				</div>
				{this.state.projectDescription}
			</div>
		)
	}
}



export default Portfolio1

					
					// <ProjectTitle3 onClick={this.onClick} target={this.state.target}/>
					// <ProjectTitle4 onClick={this.onClick} target={this.state.target}/>