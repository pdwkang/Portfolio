import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
var sp = function(number){
	var returnThis
	for(let i = 0; i < number; i++){
		returnThis += '<span>{&nbsp;&nbsp;}</span>'
	}
	return returnThis;
}
var brc = function(text){return <span>{'{'}{text}{'}'} </span>}
var par = function(text){return <span>{'('}{text}{')'} </span>}
// var lc = function(number){return <div className='col-sm-1 line-count'>{number}</div>};
var numbers = []
for(let i = 1; i < 29; i++){
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
					<div> {imporT('React, { Component }', '"react"')}</div>
					<div> {imporT('$', '"jquery"')}</div>
					<div> {imporT('App', '"./App"')}</div>
					<div> {imporT('Business', '"./business/Business.js"')}</div>
					<div> {imporT('{ Router,Route,hasHistory,IndexRoute }', '"react-router"')}</div>
					...<br/>...<br/>...<br/><br/>
					<div>ReactDOM.render(</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Router')} {cG('history')}{'='}{brc('hashHistory')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('component')}{'='}{brc('App')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('IndexRoute')} {cG('component')}{'='}{brc('General')} {'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('path')}{'='}{brc('entertainment')} {cG('component')}{'='}{brc('Entertainment')} {'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('path')}{'='}{brc('sports')} {cG('component')}{'='}{brc('Sports')}{'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('path')}{'='}{brc('business')} {cG('component')}{'='}{brc('Business')}{'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('path')}{'='}{brc('global')} {cG('component')}{'='}{brc('Global')}{'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}{cR('Route')} {cG('path')}{'='}{brc('search/:input')} {cG('component')}{'='}{brc('SearchResults')} {'/>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}{cR('Route')}{'>'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'</'}{cR('Router')}{'>'},</div>
					<div> {cB("document.getElementById")}{par(cY('"root"'))}</div>
					<div> {');'} <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab1Description