import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
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
					
					<div>{cB('const')} apiKey {cR('=')} {cY('"1234567890ASDFGHJKL"')};</div>						
					<div>{cB('var')} apiBaseUrl {cR('=')} {cY('"http://api.themoviedb.....api_key="')};</div>
					<div>{cB('var')} movieUrl{cR('=')} apiBaseUrl {cR('+')} apiKey;</div>
					<br/>
					<div> {cGR('// Callback Hell')} </div>
					<div>{cR('$')}({cB('document')}{'.ready('}{cB('function')}{'(){'}</div>
					<div>&nbsp;&nbsp;{'$.'}{cB('getJSON')}{'(movieUrl, ('}{cO('movieData')}{')'} {cB('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} movieHTML {cR('=')} {cY("''")}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('for')} ({cB('var')} i {cR('=')} {cB('0')}; i {cB('<')} {'movieData.results.length'}; i{cB('++')}{'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} movieId {cR('=')} {'movieData.results[i].id'} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} trailerUrl {cR('=')} movieUrl + {cY('"movie/')} + movieId </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'$.'}{cB('getJSON')}{'(trailerUrl, ('}{cO('trailerData')}{')'} {cB('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} creditsId {cR('=')} {'trailerData.results[i].id'} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} creditsUrl {cR('=')} movieUrl + {cY('"credits/')} + creditsId </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'$.'}{cB('getJSON')}{'(creditsUrl, ('}{cO('creditsData')}{')'} {cB('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<br/>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
					<br/>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'});'} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'});'} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;{'});'} </div>
					<div>{'});'} <span className='blinkTypeSomething'>|</span></div>					
				</div>
			</div>
		)
	}
}

export default Tab1Description
