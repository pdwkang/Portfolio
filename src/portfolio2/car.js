import React, { Component } from 'react'
class Car extends Component {
	render(){
		return(
			<div className='car-wrapper'>
				<div id="car" className="moveUp">
					<div className='gradient'></div>	
					<div className="upperPart">
						<div className="triangle">
							<div className="triangle-body">
								<div className="window"></div>
							</div>	
						</div>
					</div>
					<div className="body">
						<div className="door"></div>
						<div className="knob"></div>
						<div className="headlight"></div>
						<div className="tail-light"></div>
						<div className="light"></div>
					</div>
					<div className="circle1 rotate">
						<div className="rim">
							<div className='rim-inside r1'></div>
							<div className='rim-inside r2'></div>
							<div className='rim-inside r3'></div>
							<div className='rim-inside-circle'></div>
						</div>
					</div>		
					<div className="circle2 rotate">
						<div className="rim">
							<div className='rim-inside r1'></div>
							<div className='rim-inside r2'></div>
							<div className='rim-inside r3'></div>
							<div className='rim-inside-circle'></div>
						</div>
					</div>
				</div>
				<div className="road">
					<div className="car-shadow"></div>
					<div className='white-line'></div>
				</div>

				<div className='fly letterK'>C</div>
				<div className='fly letterA'>S</div>
				<div className='fly letterN'>S</div>	
				<div className='fly fly-number letterG'>3</div>
				<div className='fly letter1'>H</div>
				<div className='fly letter2'>T</div>
				<div className='fly letter3'>M</div>
				<div className='fly letter4'>L</div>
				<div className='fly fly-number letter5'>5</div>
				{/*<div className='fly letter6'>L</div>
				<div className='fly letter7'>I</div>
				<div className='fly letter8'>N</div>
				<div className='fly letter9'>G</div>*/}

				

				<div className="moon hidden-xs">
					<div className="moon-space"></div>
					<div className="cloud">
						<div className="cloud-sm cl1"></div>
						<div className="cloud-sm cl2"></div>
						<div className="cloud-sm cl3"></div>
						<div className="cloud-sm cl4"></div>
					</div>
					<div className="cloud2">
						<div className="cloud-sm cl1"></div>
						<div className="cloud-sm cl2"></div>
						<div className="cloud-sm cl3"></div>
						<div className="cloud-sm cl4"></div>
					</div>
				</div>
			</div>

		)
	}
}

export default Car