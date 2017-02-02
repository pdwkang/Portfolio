import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
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
class Tab4Description extends Component{
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
				<div className='col-sm-11'>
					<div> {imporT('React, { Component } from ', '"react"')}</div>
					<div> {imporT('SearchResult', '"./Search.js"')}</div>
					...<br/>...<br/>...<br/><br/>
					<div>{cB('class')} StockSearch {cR('extends')} Component {'{'}</div>
					<div>&nbsp;&nbsp;{'constructor(props) { '}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('super')}{'(props);'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('this')}{'.state'} {cR('=')} {'{ stock: {} };'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('this')}{'.changeStock'} {cR('=')} {cO('this')}{'.changeStock.bind('}{cO('this')}{')'} </div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('this')}{'.componentDidMount'} {cR('=')} {cO('this')}{'.componentDidMount.bind('}{cO('this')}{')'} </div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>&nbsp;&nbsp;{'componentDidMount(){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'$.'}{cB('getJSON')}{'(stockUrl, ('}{cO('stockData')}{')'} {cB('=>')} {'{'}</div>
					<div>{'};'}</div>
					<br/>
					<div>{cR('export default')} StockSearch; <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab4Description