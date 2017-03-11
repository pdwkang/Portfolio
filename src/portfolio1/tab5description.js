import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
// var sp = function(number){var returnThis
// 	for(let i = 0; i < number; i++){returnThis += '<span>{&nbsp;&nbsp;}</span>'}
// 		return returnThis;
// 	}
var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 31; i++){
	numbers.push(i)
}
class Tab5Description extends Component{
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
					<div> {imporT('React, { Component } from ', '"react"')}</div>
					...<br/>...<br/>...<br/><br/><br/><br/>
					<div>{cGR('// Pure rendering function for each stock')} </div>
					<div>{cB('class')} Stock {cR('extends')} Component {'{'}</div>
					<div>&nbsp;&nbsp;{'render(){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('return')}{'('}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'> Symbol: {'}{cO('this')}{'.props.symbol}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'> Ask: {'}{cO('this')}{'.props.LastAsk}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'> Bid: {'}{cO('this')}{'.props.LastBid}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'> Change: {'}{cO('this')}{'.props.DailyChange}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'> Name: {'}{cO('this')}{'.props.Name}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{')'}</div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>{'};'}</div>
					<br/>
					<div>{cR('export default')} Stock; <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab5Description