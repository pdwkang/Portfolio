import React, { Component } from 'react';

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

				<div className='fly letterK'>K</div>
				<div className='fly letterA'>A</div>
				<div className='fly letterN'>N</div>	
				<div className='fly letterG'>G</div>

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

class Portfolio2 extends Component{
	render(){
		return(
			<Car />
		)
	}
}

export default Portfolio2