import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
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
					<div>{cGR('// Make a post request to upload video')} </div>
					<div>app{'.'}controller{'('}{cY("'uploadVideoController'")}, {cB('function')}({cR('$')}scope, {cR('$')}location, {cR('$')}http){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cR('$')}scope{'.'}{cG('upload')} {cR('=')} {cB('function')}(){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} formData {cR('=')} {cR('new')} {cG('FormData')};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cR('for')}(key {cR('in $')}scope{'.'}product){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData{'.'}append(key, {cR('$')}scope{'.'}product{'[key])'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} file {cR('=')} {cR('$')}({cY("'#file'")}){'[0].files[0];'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData{'.'}append({cY("'video'")}, file);</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;formData{'.'}append({cY("'familyName'")}, {cR('$')}scope{'.'}familyName);</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Send video file and family name string to backend')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cR('$')}http{'.post('}{cY('http://backend/videos')}, formData, {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Transform data which is defaulted to JSON')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transfromRequest: angular{'.'}identity,</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers: {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cY("'Content-Type'")} : {cP('undefined')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}).then('}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('function')} {cG('successFunction')}({cO('data')}){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Route to list of videos after uploading')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cR('$')}location{'.'}path({cY("'/videosToTranslate'")})</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'},'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cB('function')} {cG('failedFunction')}({cO('data')}){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Show message on DOM if upload failed')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cR('$')}scope{'.'}failedUpload {cR('=')} {cY("'Try Again'")}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{')'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
					<div>{'});'} <span className='blinkTypeSomething'>|</span></div>
				</div>
			</div>
		)
	}
}

export default Tab1Description