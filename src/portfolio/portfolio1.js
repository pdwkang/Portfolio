import React, { Component } from 'react'
import Portfolio1z from './project1z.js'
import Portfolio2z from './project2/project2z.js'
import Portfolio3z from './project3/project3z.js'
import Portfolio4z from './project4/project4z.js'
import Portfolio5z from './project5/project5z.js'
import Portfolio6z from './project6/project6z.js'
import Others from './others/others.js'

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
				<div className='project-arrow-tab'>Updated &nbsp;<span className='glyphicon glyphicon-list-alt'></span></div>
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
				<div className='project-arrow-tab'>Nemo &nbsp;<span className='glyphicon glyphicon-cutlery'></span></div>
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
				<div className='project-arrow-tab'>Movie &nbsp;<span className='glyphicon glyphicon-film'></span></div>
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
				<div className='project-arrow-tab'>Black Jack &nbsp;<span className='glyphicon glyphicon-usd'></span></div>
			</div>
		)
	}
}

class ProjectTitle5 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	
	}
	onClick(){
		this.props.onClick(<Portfolio5z />, 'tab5')
	}
	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab5'){
			selectedTab = 'selected-tab'
		}
		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Translate &nbsp;<span className='glyphicon glyphicon-facetime-video'></span></div>
			</div>
		)
	}
}


class ProjectTitle6 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	
	}
	onClick(){
		this.props.onClick(<Portfolio6z />, 'tab6')
	}

	render(){
		var selectedTab = 'tab-wrapper'
		if(this.props.target === 'tab6'){
			selectedTab = 'selected-tab'
		}

		return(
			<div onClick={this.onClick} className={selectedTab}>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'>Pygame &nbsp;<span className='glyphicon glyphicon-knight'></span></div>
			</div>
		)
	}
}

class ProjectTitleComingSoon extends Component{
	render(){
		return(
			<div className='tab-wrapper'>
				<div className='tab-triangle'></div>
				<div className='project-arrow-tab'><span style={{color:'rgb(220,220,220)'}}>Coming Soon</span></div>
			</div>
		)
	}
}


class Portfolio1 extends Component{
	constructor(props) {
		super(props);
		this.state = {
			projectDescription: <Portfolio5z />,
			projectTarget: 'tab5',
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
				<div className='hidden-xs'>
					<div className='project-titles'>
						<div className='project-titles-header'>
							<div className='project-title-left-top'></div>
							Projects
							<div className='project-title-bottom-right'></div>
						</div>
						<br/>
						<ProjectTitle5 onClick={this.onClick} target={this.state.projectTarget}/>  {/* new story */}
						<ProjectTitle1 onClick={this.onClick} target={this.state.projectTarget}/>  {/* updated */}
						<ProjectTitle3 onClick={this.onClick} target={this.state.projectTarget}/>  {/* movie */}
						<ProjectTitle4 onClick={this.onClick} target={this.state.projectTarget}/>  {/* blackjack */}
						<ProjectTitle6 onClick={this.onClick} target={this.state.projectTarget}/>  {/* pygame */}
						<ProjectTitle2 onClick={this.onClick} target={this.state.projectTarget}/>  {/* nemo */}
					</div>
					{this.state.projectDescription}
				</div>
				<div className='visible-xs' style={{marginLeft:'10%'}}>
					<Others />
				</div>
			</div>			
		)
	}
}



export default Portfolio1

