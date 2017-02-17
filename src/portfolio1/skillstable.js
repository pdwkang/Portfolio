import React, { Component } from 'react';

class SkillsTable extends Component{
	render(){
		return(
			<div className='row skills-table-wrapper text-center'>
				{/*<div className='skills-table-header'></div>*/}
				<div className='hidden-xs hidden-sm'>
				<div className='project-titles-header3'>
					<div className='project-title-left-top3'></div>
					Skills
					<div className='project-title-bottom-right3'></div>
				</div>
				<div className='front-end'>
					<div className='front-end-header'>Front-End</div>
					<div className='each-skill'>HTML5 &nbsp;/ &nbsp;CSS3&nbsp; / &nbsp;<i style={{fontSize:17}}>Sass</i> </div>
					<div className='each-skill s2'>Bootstrap &nbsp;/&nbsp; <i style={{fontSize:17}}>Responsive Design</i></div>
					<div className='each-skill'>Javascript &nbsp;/&nbsp; jQuery &nbsp;/&nbsp; Ajax &nbsp;/&nbsp; JSON</div>
					<div className='each-skill s2'><i style={{fontSize:17}}>React.js</i> &nbsp;/ &nbsp;Redux &nbsp;/ &nbsp;JSX &nbsp;/ &nbsp;ES6</div>
				</div>
				<div className='back-end'>
					<div className='back-end-header'>Back-End</div>
					<div className='each-skill '>NPM / Express</div>
					<div className='each-skill s2'>MySQL</div>
					<div className='each-skill'>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
				</div>
				<div className='in-progress hidden-xs'>
					<div className='in-progress-header'>In Progress</div>
					<div className='each-skill'>Node.js</div>				
					<div className='each-skill s2'>MongoDB / Jasmine</div>
					<div className='each-skill'>Python</div>
					<div className='each-skill s2'>AWS &nbsp; / &nbsp; Webpack</div>
				</div>
				<div> &nbsp;</div><div> &nbsp;</div><div> &nbsp;</div>
				</div>
				<div className='visible-xs visible-sm'>
				<div className='project-titles-header3' style={{width:'40vw', marginLeft: '30vw'}}>
					<div className='project-title-left-top3'></div>
					Skills
					<div className='project-title-bottom-right3'></div>
				</div>
				<div className='front-end' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='front-end-header'>Front-End</div>
					<div className='each-skill'>HTML5 &nbsp;/ &nbsp;CSS3&nbsp; / &nbsp;<i style={{fontSize:17}}>Sass</i> </div>
					<div className='each-skill s2'>Bootstrap &nbsp;/&nbsp; <i style={{fontSize:17}}>Responsive Design</i></div>
					<div className='each-skill'>Javascript &nbsp;/&nbsp; jQuery &nbsp;/&nbsp; Ajax &nbsp;/&nbsp; JSON</div>
					<div className='each-skill s2'><i style={{fontSize:17}}>React.js</i> &nbsp;/ &nbsp;ES6 &nbsp;/ &nbsp;JSX &nbsp;/ &nbsp;Babel</div>
				</div>
				<div className='back-end' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='back-end-header'>Back-End</div>
					<div className='each-skill '>Express</div>
					<div className='each-skill s2'>NPM</div>
				
				</div>
				<div className='in-progress' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='in-progress-header'>In Progress</div>
					<div className='each-skill'>Redux&nbsp; /&nbsp; Node.js</div>				
					<div className='each-skill s2'>MongoDB / MySQL</div>
					<div className='each-skill'>Socket.io</div>
					<div className='each-skill s2'>AWS &nbsp; / &nbsp; Webpack &nbsp; / &nbsp; Python</div>
				</div>
				<div> &nbsp;</div><div> &nbsp;</div><div> &nbsp;</div>					
				</div>
			</div>
		)
	}
}

export default SkillsTable