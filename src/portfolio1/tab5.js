import React, { Component } from 'react';
import Tab5Description from './tab5description'

class Tab5 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Tab5Description />, 'tab5')
	}

	render(){
		var backgroundColor = '#444444'
		var borderColor = 'none'
		var borderBottom = '1px solid white'
		var tabClass = 'each-tab each-tab-hover'
		if(this.props.target === 'tab5'){
			backgroundColor = '#272822'
			borderColor = 'lightgrey 1px solid'
			borderBottom = '1px solid #272822'
			tabClass = 'each-tab'};
		return(
			<div onClick={this.onClick} className={tabClass} >
				<div className='hidden-sm' style={{backgroundColor:backgroundColor, borderLeft: borderColor, borderRight: borderColor, borderTop: borderColor, borderBottom: borderBottom, padding:'3px 10px'}}>
				Stock.js
				</div>
			</div>
		)
	}
}

export default Tab5