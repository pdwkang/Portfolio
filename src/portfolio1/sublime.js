import React, { Component } from 'react';
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import Tab4 from './tab4'
import Tab5 from './tab5'
import Tab1Description from './tab1description'


class Code extends Component{
	constructor(props) {
		super(props);
		this.state = {
			tab: <Tab1Description />,
			target: 'tab1'
		}
		this.onClick = this.onClick.bind(this)
	}
	onClick(tab, target){
		this.setState({
			tab:tab,
			target:target
		})
	}
	render(){
		return(
			<div>
				<div className='sublime-header'>
					<div className='tabs'>
						<Tab1 onClick={this.onClick} target={this.state.target}/>
						<Tab2 onClick={this.onClick} target={this.state.target}/>
						<Tab3 onClick={this.onClick} target={this.state.target}/>
						<Tab4 onClick={this.onClick} target={this.state.target}/>
						<Tab5 onClick={this.onClick} target={this.state.target}/>
					</div>
				</div>
				<div className='sublime-body'>
					{this.state.tab}
				</div>
			</div>
		)
	}
}

export default Code