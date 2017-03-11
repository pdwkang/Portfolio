import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
// var cP = function(text){return <span className='sub-p'>{text}</span>};
// var sp = function(number){var returnThis
// 	for(let i = 0; i < number; i++){returnThis += '<span>{&nbsp;&nbsp;}</span>'}
// 		return returnThis;
// 	}
var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 35; i++){
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
					<div>{cGR('// Create Deck Function')} </div>
					<div>{cB('function')} {cG('createDeck')}{'(){'}</div>						
					<div>&nbsp;&nbsp;{cB('var')} newDeck {cR('=')} [];</div>
					<div>&nbsp;&nbsp;{cB('var')} suits {cR('=')} [{cY('"h", "s", "d", "c"')}];</div>
					<div>&nbsp;&nbsp;{cR('for')}( {cB('let')} i {cR('=')} 0; i {cR('<')} suits.length; i{cR('++')}{'){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('for')}( {cB('let')} j {cR('=')} 0; j {cR('<=')} 13; j{cR('++')}{'){'}</div>						
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newDeck{cB('.push')}(k {cR('+')} suits[j]);</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;{cR('return')} newDeck;</div>
					<div>{'}'}</div>
					<br/>
					<div>{cB('var')} theDeck {cR('=')} {cB('createDeck')}();</div>
					<br/>
					<div>{cGR('// Shuffle Deck Function')} </div>
					<div>{cB('function')} {cG('shuffleDeck')}{'(){'}</div>						
					<div>&nbsp;&nbsp;{cR('for')}( {cB('let')} i {cR('=')} 0; i {cR('<')} 1000; i{cR('++')}{'){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} random1 {cR('=')} {cB('Math.floor')}({cB('Math.random')}() {cR('*')} theDeck.length);</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} random2 {cR('=')} {cB('Math.floor')}({cB('Math.random')}() {cR('*')} theDeck.length);</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} temp {cR('=')} theDeck[random1];</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;theDeck[random1] {cR('=')} theDeck[random2];</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;theDeck[random2] {cR('=')} temp;</div>
					<div>&nbsp;&nbsp;{'}'}</div>
					<div>{'}'}</div>
					<br/>
					<div>{cGR('// Shuffle Deck On Deal')} </div>
					<div>{cR('$')}({cB('document')}{').ready('}{cB('function')}{'(){'}</div>
					<div>&nbsp;&nbsp;{'$'}({cY('"deal-button"')}){'.'}{cB('click')}({cB('function')}{'(){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('shuffleDeck')}();</div>
					<div>&nbsp;&nbsp;{'});'} </div>						
					<div>{'});'} </div>						
				</div>
			</div>
		)
	}
}

export default Tab1Description