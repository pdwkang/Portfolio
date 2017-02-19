import React, { Component } from 'react'

// var random = Math.floor(Math.random()*10)
// class Treez extends Component{
// 	render(){
// 		return(
// 			<div>
// 					<div className="tree">
// 						<div className="tree-sm tr1"></div>
// 						<div className="tree-sm tr2"></div>
// 						<div className="tree-sm tr3"></div>
// 						<div className="tree-sm tr4"></div>
// 					</div>					
// 			</div>
// 		)
// 	}
// }
class Windowz extends Component{
	render(){
		return(
			<div>
				{/*<div className='windowz w1'></div>*/}
				<div className='windowz w2'></div>
				<div className='windowz w11'></div>
				{/*<div className='windowz w21'></div>*/}

				{/*<div className='windowz w3'></div>*/}
				<div className='windowz w4'></div>
				{/*<div className='windowz w31'></div>*/}
				<div className='windowz w41'></div>

				<div className='windowz w5'></div>
				{/*<div className='windowz w6'></div>*/}
				{/*<div className='windowz w51'></div>*/}
				<div className='windowz w61'></div>

				<div className='windowz w7'></div>
				{/*<div className='windowz w8'></div>*/}
				{/*<div className='windowz w71'></div>*/}
				{/*<<div className='windowz w81'></div>*/}

				{/*<div className='windowz w9'></div>*/}
				{/*<<div className='windowz w10'></div>*/}
				{/*<div className='windowz w91'></div>*/}
				{/*<div className='windowz w101'></div>*/}

				{/*<div className='windowz w11'></div>*/}
				{/*<div className='windowz w12'></div>	*/}										
				{/*<div className='windowz w111'></div>*/}
				{/*<div className='windowz w121'></div>*/}
			</div>
		)
	}
}

class Windowz2 extends Component{
	render(){
		return(
			<div>
				{/*<div className='windowz w1'></div>*/}
				<div className='windowz w2'></div>
				{/*<div className='windowz w11'></div>*/}
				<div className='windowz w21'></div>

				<div className='windowz w3'></div>
				{/*<div className='windowz w4'></div>*/}
				<div className='windowz w31'></div>
				{/*<div className='windowz w41'></div>*/}

				<div className='windowz w5'></div>
				{/*<div className='windowz w6'></div>*/}
				{/*<div className='windowz w51'></div>*/}
				<div className='windowz w61'></div>

				<div className='windowz w7'></div>
				<div className='windowz w8'></div>
				<div className='windowz w71'></div>
				{/*<div className='windowz w81'></div>*/}

				{/*<div className='windowz w9'></div>*/}
				{/*<<div className='windowz w10'></div>*/}
				{/*<div className='windowz w91'></div>*/}
				{/*<div className='windowz w101'></div>*/}

				{/*<div className='windowz w11'></div>*/}
				<div className='windowz w12'></div>										
				<div className='windowz w111'></div>
				{/*<div className='windowz w121'></div>*/}
			</div>
		)
	}
}

class BuildingSet extends Component{
	render(){
		return(
				<div style={{display:'inline-block'}}>
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle-round'></div>
						<div className='sky-scraper-body' style={{borderTop:'4px solid rgba(28,35,60,0.5)', height:260}}>
							<Windowz2/>							
						</div>
					</div>
					<div className='baby-sky-scraper' style={{height:120}}></div>					

										<div className='huge-sky-scraper'>
																	<Windowz/>
										</div>
					
					<div className='baby-sky-scraper' style={{height:120}}></div>					
					
					<div style={{display:'inline-block', position:'relative'}}>
						<Windowz/>
						<div className='cool-tower' style={{height:240}}></div>
						<div className='cool-tower' style={{height:270}}></div>
						<div className='cool-tower' style={{height:265}}></div>
						<div className='cool-tower' style={{height:265}}></div>
						<div className='cool-tower' style={{height:270}}></div>
						<div className='cool-tower' style={{height:270}}></div>
						<div className='cool-tower' style={{height:270}}></div>
						<div className='cool-tower' style={{height:265}}></div>
						<div className='cool-tower' style={{height:265}}></div>
						<div className='cool-tower' style={{height:270}}></div>
						<div className='cool-tower' style={{height:240}}></div>
					</div>
					<div className='baby-sky-scraper' style={{height:120}}></div>					
					<div className='black-sky-scraper' style={{height:320, width:90, borderTop: '6px solid rgba(0,43,43,.65)'}}>
						<Windowz2/>
					</div>					
					<div className='baby-sky-scraper' style={{height:120}}></div>										
					<div className='baby-sky-scraper' style={{height:130}}></div>					

					<div style={{display:'inline-block', position:'relative'}}>
						<Windowz/>
						<div className='cool-tower' style={{height:310}}></div>
						<div className='cool-tower' style={{height:310}}></div>
						<div className='cool-tower' style={{height:315}}></div>
						<div className='cool-tower' style={{height:315}}></div>
						<div className='cool-tower' style={{height:310}}></div>
						<div className='cool-tower' style={{height:310}}></div>					
					</div>
					<div className='baby-sky-scraper' style={{height:130}}></div>					
					<div className='sky-scraper'>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body'>
							<Windowz2/>
						</div>
					</div>
					<div className='baby-sky-scraper' style={{height:130}}></div>					
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body' style={{height:270}}>
							<Windowz/>
						</div>
					</div>					
					<div className='baby-sky-scraper' style={{height:130}}></div>					
					<div className='black-sky-scraper' style={{height:250, width:90, borderTop: '6px solid rgba(33,43,0,.65)'}}>
						<Windowz/>
					</div>					

					<div className='baby-sky-scraper' style={{height:130}}></div>					
					<div style={{display:'inline-block', position:'relative'}}>
						<Windowz2/>
						<div className='cool-tower' style={{height:210}}></div>
						<div className='cool-tower' style={{height:210}}></div>
						<div className='cool-tower' style={{height:205}}></div>
						<div className='cool-tower' style={{height:210}}></div>
						<div className='cool-tower' style={{height:210}}></div>
						<div className='cool-tower' style={{height:205}}></div>
						<div className='cool-tower' style={{height:210}}></div>
						<div className='cool-tower' style={{height:210}}></div>
					</div>
					
					

					<div className='baby-sky-scraper' style={{height:130}}></div>															
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body' style={{height:180}}>
							<Windowz2/>
						</div>
					</div>							
					<div className='baby-sky-scraper' style={{height:130}}></div>					
					<div className='huge-sky-scraper'>
						<Windowz/>
					</div>
					<div className='baby-sky-scraper' style={{height:150}}></div>					
					<div className='sky-scraper'>
						<div className='sky-scraper-triangle' style={{background:'linear-gradient(to right, rgba(0,35,34,1) 0%,black 40%)'}}></div>
						<div className='sky-scraper-body'>
							<Windowz2/>
						</div>
					</div>			
					<div className='baby-sky-scraper' style={{height:150}}></div>					
					
					<div style={{display:'inline-block', position:'relative'}}>
						<Windowz/>
					<div className='cool-tower' style={{height:180}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:210}}></div>
					<div className='cool-tower' style={{height:180}}></div>					
					</div>

					<div className='baby-sky-scraper' style={{height:150}}></div>					
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body'>
							<Windowz/>
						</div>
					</div>								

					<div className='baby-sky-scraper' style={{height:150}}></div>					
					
				</div>

		)
	}
}// <div style={{width:500, bottom:5, position:'absolute', height:50, backgroundColor:'rgba(0, 0, 0, 0.9)'}}></div>					
class Car extends Component {
	render(){
		return(
			<div className='car-wrapper'>
				<div className='background-car'>
					<div style={{width:'100%',position:'relative'}}>
						<div className='bat-man'></div>
					</div>
				</div>

				<div className='star'></div>
				<div className="moon hidden-xs">
					<div className="moon-space"></div>
					<div className="cloud">
						<div className="cloud-sm cl1"></div>
						<div className="cloud-sm cl2"></div>
						<div className="cloud-sm cl3"></div>
						<div className="cloud-sm cl4"></div>
					</div>	

					<div className="cloud3">
						<div className="cloud-sm cl1"></div>
						<div className="cloud-sm cl2"></div>
						<div className="cloud-sm cl3"></div>
						<div className="cloud-sm cl4"></div>
					</div>							
					<div className="cloud4">
						<div className="cloud-sm cl1"></div>
						<div className="cloud-sm cl2"></div>
						<div className="cloud-sm cl3"></div>
						<div className="cloud-sm cl4"></div>
					</div>							
				</div>
				<div className='sky-scraper-wrapper'>
					<BuildingSet/>
					<BuildingSet/>
					<BuildingSet/>
					<BuildingSet/>
					<BuildingSet/>
					<BuildingSet/>
				</div>









				<div className='street-light-wrapper'>
					<div className='street-light-pole'></div>
					<div className='street-top-pole'></div>
					<div className='street-top-light'></div>
					<div className='street-light-bulb'></div>
				</div>
				{/*****************************************************************************/}
				{/*****************************************************************************/}
				{/************************************ Car ************************************/}
				{/*****************************************************************************/}
				{/*****************************************************************************/}
				<div id="car" className="moveUp">
					<div className="upperPart">
						<div className='windshield'></div>
						<div className='upper-body-top'></div>
						<div className='windshield2'></div>
						{/*<div className="triangle">
							<div className="triangle-body">
								<div className="window"></div>
							</div>	
						</div>*/}
					</div>
					<div className='light'></div>
					<div className="body">
						<div className="door">
							CSS
						</div>
						<div className="knob"></div>
						
						<div className="headlight"></div>
						<div className="tail-light"></div>
						
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

				{/*<div className='fly letterK'>P</div>
				<div className='fly letterA'>A</div>
				<div className='fly letterN'>U</div>	
				<div className='fly fly-number letterG'>L</div>
				<div className='fly letter1'>H</div>
				<div className='fly letter2'>I</div>
				<div className='fly letter3'>I</div>
				<div className='fly letter4'>A</div>
				<div className='fly fly-number letter5'>M</div>
				<div className='fly letter6'>L</div>
				<div className='fly letter7'>I</div>
				<div className='fly letter8'>N</div>
				<div className='fly letter9'>G</div>*/}

			<div className='intro-wrapper'>	
				<div className='intro-header'>Paul Kan<div className='spin-g'>g</div></div>
{/*				<div className='intro-description'>HTML,&nbsp; CSS / SASS,&nbsp; JavaScript / jQuery,&nbsp; React.js</div> */}
				<div className='intro-description'>Full Stack Developer</div>
			</div>			
			
			</div>

		)
	}
}

export default Car