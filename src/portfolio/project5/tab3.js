import React, { Component } from 'react';
import Tab3Description from './tab3description'

class Tab3 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Tab3Description />, 'tab3')
	}

	render(){
		var backgroundColor = '#444444'
		var borderColor = 'none'
		var borderBottom = '1px solid white'
		var tabClass = 'each-tab each-tab-hover'
		if(this.props.target === 'tab3'){
			backgroundColor = '#272822'
			borderColor = 'lightgrey 1px solid'
			borderBottom = '1px solid #272822'
			tabClass = 'each-tab'};
		return(
			<div onClick={this.onClick} className={tabClass} >
				<div className='hidden-md hidden-sm' style={{backgroundColor:backgroundColor, borderLeft: borderColor, borderRight: borderColor, borderTop: borderColor, borderBottom: borderBottom, padding:'3px 10px'}}>
				Backend.js
				</div>
			</div>
		)
	}
}

export default Tab3