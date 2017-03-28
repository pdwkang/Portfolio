import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
// var cP = function(text){return <span className='sub-p'>{text}</span>};
// var sp = function(number){var returnThis
// 	for(let i = 0; i < number; i++){returnThis += '<span>{&nbsp;&nbsp;}</span>'}
// 		return returnThis;
// 	}
// var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
// var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 35; i++){
	numbers.push(i)
}
class Tab2Description extends Component{
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
					<div>{imporT('React, { Component } from ', '"react"')}</div>
					<div>{imporT('{ Link }', '"react-router"')}</div><br/>
					<br/>
					<div>{cGR('// Change routes, on click of navigation bar')} </div>
					<div>{cB('class')} ToggleRoutes {cR('extends')} Component {'{'}</div>
					<div>&nbsp;&nbsp;{'constructor(props) { '}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('super')}{'(props);'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('this')}{'.onInputChange'} {cR('=')} {cO('this')}{'.onInputChange.bind('}{cO('this')}{')'} </div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>&nbsp;&nbsp;{'onInputChange(e){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'e.preventDefault();'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} inputValue {cR('=')} e{'.'}{cB('target')}{'.'}{cB('value')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cO('this')}{'.props.displaySearchedNews(inputValue)'}</div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>&nbsp;&nbsp;{'render(){'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('return')}{'('}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('nav')}{'>'} {'<'}{cR('Link')} {cG('to')}{'='}{cY('"/business"')}{'>'}Business{'</'}{cR('Link')}{'>'}{' </'}{cR('nav')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{')'}</div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>{'};'}</div>
					<br/>
					<br/>
					<div>{cB('class')} App {cR('extends')} React{'.'}Component {'{'}</div>
					<div>&nbsp;&nbsp;{'render() {'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('return')}{' ('}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('div')}{'>{'}{cO('this')}{'.props.children}'}{'</'}{cR('div')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{')'}</div>
					<div>&nbsp;&nbsp;{'};'}</div>
					<div>{'};'}</div>
					<br/>
					<div>{cR('export default')} App; <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab2Description