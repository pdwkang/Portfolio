import React, { Component } from 'react';


var imporT = function(from, what){return <div><span className='sub-r'>from</span> {from} <span className='sub-r'>import</span> {what};</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
var sp = function(number){
	var returnThis
	for(let i = 0; i < number; i++){
		returnThis += '<span>{&nbsp;&nbsp;&nbsp;&nbsp;}</span>'
	}
	return returnThis;
}
var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 33; i++){
	numbers.push(i)
}
class Tab1Description extends Component{
	render(){
		return(
			<div className='code-font'>
				<div className='col-sm-1'>
					{numbers.map((number, index)=>{
						return(
							<div className='line-count' key={index}>{number}</div>
						)
					})}
				</div>
				<div className='col-sm-10 col-md-11'>
					<div>{cR('import')} pygame</div>
					<div>{imporT('pygame.sprite', 'Group, groupcollide')}</div>
					<div>{imporT('settings', 'Settings')}</div>
					<div>{imporT('background', 'Background')}</div>
					<div>{cR('import')} time</div>
					<div>pygame{'.'}{cB('init')}();</div>
					...<br/>...<br/>...<br/><br/>
					<div>enemies {cR('=')} {cB('Group')}();</div>
					<div>screen {cR('=')} {'pygame.display.'}{cB('set_mode')}{'(Settings.screen_size);'}</div>
					<br/>
					<div>{cB('def')} {cG('run_game')}():</div>
					<div>&nbsp;&nbsp;tick {cR('=')} 0;</div>
					<div>&nbsp;&nbsp;{cGR('// Run pygame module until turned off')} </div>
					<div>&nbsp;&nbsp;{cR('while')} 1:</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Continue game mode until user loses game')} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('if')} {'Settings.game_active:'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Increase tick by 1 every loop ( 1 / 30 seconds )')} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tick {cR('+=')} 1;</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Add an Enemy to enemies group every 2 seconds')} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cR('if')} tick {cR('%')} 60:</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enemies{'.'}{cB('add')}({cB('Enemy')}{'(screen, Settings, 1));'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<br/>
					<div>{cB('run_game')}(); <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab1Description