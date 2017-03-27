import React, { Component } from 'react';
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Tab1Description from './tab1description'


class Code extends Component{
	constructor(props) {
		super(props);
		this.state = {
			tab: <Tab1Description />,
			target: 'tab1',
			descriptionClass:'sublime-body-animation'
		}
		this.onClick = this.onClick.bind(this)
		this.delayScroll = this.delayScroll.bind(this)
	}
	onClick(tab, target){
		this.setState({
			tab:tab,
			target:target,
			descriptionClass: 'sublime-body'
		})
		setTimeout(this.delayScroll,1)
	}
	delayScroll(){
		this.setState({
			descriptionClass: 'sublime-body-animation'
		})
	}
	render(){
		return(
			<div>
				<div className='sublime-header'>
					<div className='project-titles-header2'>
						<div className='project-title-left-top2'></div>
						Code Example 
						<div className='project-title-bottom-right2'></div>
					</div>
					<div className='tabs'>
						<Tab1 onClick={this.onClick} target={this.state.target}/>
						<Tab2 onClick={this.onClick} target={this.state.target}/>
						<Tab3 onClick={this.onClick} target={this.state.target}/>
					</div>
				</div>
				<div className={this.state.descriptionClass}>
				<div style={{position:'absolute', right:0, top:0, width:'100%', height:75, backgroundColor:'#171814', zIndex:2}}></div>
					{this.state.tab}
				</div>
			</div>
		)
	}
}

export default Code