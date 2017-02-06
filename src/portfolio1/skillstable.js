import React, { Component } from 'react';

class SkillsTable extends Component{
	render(){
		return(
			<div className='row skills-table-wrapper text-center'>
				{/*<div className='skills-table-header'></div>*/}
				<div className='front-end'>
					<div className='front-end-header'>Front-End Skills</div>
					<div className='each-skill'>HTML5 / CSS3</div>
					<div className='each-skill s2'>SASS / Compass</div>
					<div className='each-skill'>Bootstrap</div>
					<div className='each-skill s2'>Javascript / ES6</div>
					<div className='each-skill'>React.js</div>
					<div className='each-skill s2'>jQuery</div>
					<div className='each-skill'>Ajax</div>
					<div className='each-skill s2'>Responsive Design</div>
					<div className='each-skill'>Sketch App</div>

				</div>
				<div className='back-end'>
					<div className='back-end-header'>Back-End Skills</div>
					<div className='each-skill '>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>										
				</div>
				<div className='in-progress'>
					<div className='in-progress-header'>In Progress</div>
					<div className='each-skill'>Redux</div>				
					<div className='each-skill s2'>Node.js / NPM</div>
					<div className='each-skill'>Express</div>
					<div className='each-skill s2'>Socket.io</div>
					<div className='each-skill'>MongoDB</div>

					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>
					<div className='each-skill s2'>&nbsp;</div>
					<div className='each-skill'>&nbsp;</div>
				</div>
				<div> &nbsp;</div><div> &nbsp;</div><div> &nbsp;</div>
			</div>
		)
	}
}

export default SkillsTable