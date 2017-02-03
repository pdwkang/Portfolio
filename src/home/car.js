import React, { Component } from 'react'
var Scroll = require('react-scroll')
var Link      = Scroll.Link;
// var random = Math.floor(Math.random()*10)

class BuildingSet extends Component{
	render(){
		return(
				<div style={{display:'inline-block'}}>
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle-round'></div>
						<div className='sky-scraper-body'></div>
					</div>
					<div className='baby-sky-scraper' style={{height:190, width:25,backgroundColor:'black'}}></div>					
					<div className='baby-sky-scraper' style={{height:80, width:10,backgroundColor:'black'}}></div>					
					<div className='baby-sky-scraper' style={{height:320, width:90}}></div>					
					<div className='baby-sky-scraper' style={{height:110, width:30,backgroundColor: 'black'}}></div>										
					<div className='baby-sky-scraper' style={{height:70}}></div>					
					<div className='huge-sky-scraper'></div>
					<div className='baby-sky-scraper' style={{height:100}}></div>					
					<div className='baby-sky-scraper'></div>					
					<div className='sky-scraper'>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body'></div>
					</div>
					<div className='baby-sky-scraper' style={{height:140}}></div>					
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body' style={{height:270}}></div>
					</div>					
					<div className='baby-sky-scraper' style={{height:100, width:10}}></div>					
					<div className='baby-sky-scraper' style={{height:250, width:90 }}></div>					
					<div className='baby-sky-scraper' style={{height:200, width:20}}></div>					
					<div className='huge-sky-scraper'></div>
					<div className='baby-sky-scraper' style={{height:130, width:25}}></div>					
					<div className='baby-sky-scraper' style={{height:90}}></div>
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body' style={{height:150}}></div>
					</div>							

					<div className='baby-sky-scraper'></div>					
					<div className='huge-sky-scraper'></div>
					<div className='baby-sky-scraper' style={{height:160, width:8,backgroundColor: 'rgba(0, 0, 0, 0.9)'}}></div>					
					<div className='baby-sky-scraper' style={{height:60}}></div>					
					<div className='baby-sky-scraper' style={{height:160, width:25}}></div>					
					<div className='sky-scraper'>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body'></div>
					</div>			
					<div className='baby-sky-scraper' style={{height:60}}></div>					
					<div className='sky-scraper'>
						<div style={{width:'100%', height:30}}></div>
						<div className='sky-scraper-triangle'></div>
						<div className='sky-scraper-body'></div>
					</div>								
					<div className='baby-sky-scraper' style={{height:160}}></div>					
					
					
				</div>

		)
	}
}// <div style={{width:500, bottom:5, position:'absolute', height:50, backgroundColor:'rgba(0, 0, 0, 0.9)'}}></div>					
class Car extends Component {
	render(){
		return(
			<div className='car-wrapper'>
				<div className='background-car'></div>
				<div className='star'></div>
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
				<div className='intro-header'>Front End Development</div>
				<div className='intro-description'>HTML,&nbsp; CSS / SASS,&nbsp; JavaScript / jQuery,&nbsp; React.js</div>
			</div>			
			<Link to="portfolio" spy={true} smooth={true} duration={1000} ><div className='arrow bounce'></div></Link>
			</div>

		)
	}
}

export default Car