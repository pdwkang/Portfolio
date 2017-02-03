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
					<div className='sublime-header-title'>
						{/*<div className='layout-built'>
							<span style={{color:'orange'}}>
							 &nbsp;</span> 
							{'this'} </span> . mockTextEditor <span style={{color:'red'}}> &nbsp;{'='}&nbsp;</span>&nbsp;  {"{"} &nbsp; plugIn_used : &nbsp;<span style={{color:'#AA66CC'}}> &nbsp;{'null'}&nbsp; </span>{"}"};} 
						</div>*/}

						<div className="code-example-header">CODE &nbsp; EXAMPLE</div>
						<div style={{padding:10.5,position:'absolute', top:0, right:0, textAlign:'right', fontSize:10, color:'rgba(255,255,255,0.7)'}}>&nbsp; PAUL KANG &copy; 2017</div>
					</div>
					<div className='tabs'>
						<Tab1 onClick={this.onClick} target={this.state.target}/>
						<Tab2 onClick={this.onClick} target={this.state.target}/>
						<Tab3 onClick={this.onClick} target={this.state.target}/>
						<Tab4 onClick={this.onClick} target={this.state.target}/>
						<Tab5 onClick={this.onClick} target={this.state.target}/>
					</div>
				</div>
				<div className={this.state.descriptionClass}>
					{this.state.tab}
				</div>
			</div>
		)
	}
}

export default Code