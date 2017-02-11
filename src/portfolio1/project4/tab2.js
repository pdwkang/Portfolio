import React, { Component } from 'react';
import Tab2Description from './tab2description'

class Tab2 extends Component{
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);	

	}
	onClick(){
		this.props.onClick(<Tab2Description />, 'tab2')
	}

	render(){
		var backgroundColor = '#444444'
		var borderColor = 'none'
		var borderBottom = '1px solid white'
		var tabClass = 'each-tab each-tab-hover'
		if(this.props.target === 'tab2'){
			backgroundColor = '#272822'
			borderColor = 'lightgrey 1px solid'
			borderBottom = '1px solid #272822'
			tabClass = 'each-tab'};
		return(
			<div onClick={this.onClick} className={tabClass} >
				<div style={{backgroundColor:backgroundColor, borderLeft: borderColor, borderRight: borderColor, borderTop: borderColor, borderBottom: borderBottom, padding:'3px 10px'}}>
				App.js
				</div>
			</div>
		)
	}
}

export default Tab2