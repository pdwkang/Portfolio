import React, { Component } from 'react'
class ProjectTab4 extends Component{
	render(){
		return(
			<div className='each-project-overflow'>
				<div className='each-project-header'>Upd8ed, News Aggregator</div>
				<img src={require('./images/news.png')} alt='a'/>
				<div className='each-project-tags'>
					<div className='tag-wrapper'>
						<div className='tags tag-small'>React.js</div>
						<div className='tags tag-small'>Node.js</div>
						<div className='tags tag-small'>JavaScript</div>
						<div className='hidden-xs tags tag-small'>Bootstrap</div>
						<div className='tags tag-small'>Ajax</div>
						<div className='tags tag-small'>' Responsive Design '</div>
						<div className='tag-line'></div>
						<div className='live-demo'><a href='http://www.pauldkang.com/news' target="_blank"><div>DEMO</div></a></div>
						<a target="_blank" href='https://github.com/mason0958/News-Aggregator'><div className='github-flag'>
							<img alt='a' src={require('./images/github.png')} />
						</div>
						</a>
					</div>
				</div>					
			</div>
		)
	}
}


class ProjectDescription3 extends Component{
	render() {
		return(
			<div>description 3</div>
		)
	}
}

class ProjectTab3 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<ProjectDescription3 />, 'tab3')
		console.log('haha')
	}

	render(){
		return(
			<div className='each-project-overflow' onClick={this.onClick}>
				<div className='each-project-header'>ABC Movie Data Base</div>
				<img src={require('./images/movie.png')} alt='a'/>
				<div className='each-project-tags'>
					<div className='tag-wrapper'>
						<div className='hidden-xs tags tag2'>{"' Callback Hell '"}</div>
						<div className='tags tag1'>jQuery</div>
						<div className='tags tag2'>Ajax</div>
						<div className='tags tag3'>JSON</div>
						<div className='tags tag3'>JavaScript</div>
						<div className='hidden-xs tags tag2'>HTML5</div>
						<div className='hidden-xs tags tag1'>CSS3</div>
						<div className='tag-line'></div>
						<div className='live-demo'><a href='http://www.pauldkang.com/movie-app' target="_blank"><div>DEMO</div></a></div>
						<a target="_blank" href='https://github.com/pdwkang/movie-app'><div className='github-flag'>
							<img alt='a' src={require('./images/github.png')} />
						</div>
						</a>
					</div>
				</div>					
			</div>
		)
	}
}

class ProjectDescription2 extends Component{
	render() {
		return(
			<div>description 2</div>
		)
	}
}

class ProjectTab2 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<ProjectDescription2 />, 'tab2')
		console.log('haha')
	}

	render(){
		return(
			<div className='each-project-overflow' onClick={this.onClick}>
				<div className='each-project-header'>Eating Nemo, Canvas Game</div>
				<img src={require('./images/nemo3.png')} alt='a'/>
				<div className='each-project-tags'>
					<div className='tag-wrapper'>
						<div className='tags tag3'>JavaScript</div>
						<div className='tags tag3'>{'< Canvas >'}</div>
						<div className='tags tag2'>HTML5</div>
						<div className='tags tag1'>CSS3</div>
						<div className='tag-line'></div>
						<div className='live-demo'><a href='http://www.pauldkang.com/nemo' target="_blank"><div>DEMO</div></a></div>
						<a target='_blank' href='https://github.com/pdwkang/canvas-game'><div className='github-flag'>
							<img alt='a' src={require('./images/github.png')} />
						</div>
						</a>						
					</div>
				</div>				
			</div>
		)
	}
}



class ProjectDescription1 extends Component{
	render() {
		return(
			<div>description 1</div>
		)
	}
}


class ProjectTab1 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<ProjectDescription1 />, 'tab1')
	}

	render(){
		return(
			<div className='each-project-overflow' onClick={this.onClick}>
				<div className='each-project-header'>Blackjack / Memory Game</div>
				<img src={require('./images/blackjack.png')} alt='a'/>
				<div className='each-project-tags'>
					<div className='tag-wrapper'>
						<div className='tags tag4'>jQuery</div>					
						<div className='tags tag2'>HTML5</div>
						<div className='tags tag1'>CSS3</div>
						<div className='tags tag3'>JavaScript</div>
						<div className='tag-line'></div>
						<div className='live-demo'>
							<a href='http://www.pauldkang.com/blackjack' target="_blank"><div>DEMO</div></a>
						</div>
						<a target='_blank' href='https://github.com/pdwkang/blackjack'><div className='github-flag'>
							<img alt='a' src={require('./images/github.png')} />
						</div>
						</a>								
					</div>
				</div>
			</div>
		)
	}
}

class Others extends Component{
	constructor(props) {
		super(props);
		this.state = {
			tab: <ProjectDescription1 />,
			target: 'tab1'
		}
		this.onClick = this.onClick.bind(this);	
	}
	onClick(tab, target){
		this.setState({
			tab:tab,
			target:target
		})
		// setTimeout(this.delayScroll,1)
	}	
	// delayScroll(){
	// 	this.setState({
	// 		descriptionClass: 'sublime-body-animation'
	// 	})
	// }	
	render(){
		return(
			<div className='projects-wrapper'> 

				<div className='projects-image-wrapper row'>
					<div className='portfolio-mid-line col-xs-12'></div>			
					<div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-6 each-projects-image'><ProjectTab4 onClick={this.onClick} target={this.state.target}/></div>
					<div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-6 each-projects-image'><ProjectTab1 onClick={this.onClick} target={this.state.target}/></div>
					<div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-6 each-projects-image'><ProjectTab2 onClick={this.onClick} target={this.state.target}/></div>
					<div className='col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-6 each-projects-image'><ProjectTab3 onClick={this.onClick} target={this.state.target}/></div>
				</div>				
				<div className='projects-place-holder row'></div>
			</div>
		)
	}
}

export default Others
				// <div className='projects-description-wrapper col-xs-9'>
				// 	{this.state.tab}
				// </div>