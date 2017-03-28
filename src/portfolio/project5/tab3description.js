import React, { Component } from 'react';


var imporT = function(what, from){return <div><span className='sub-r'>import</span> {what} from <span className='sub-y'>{from}</span>;</div>}
var cR = function(text){return <span className='sub-r'>{text}</span>};
var cG = function(text){return <span className='sub-g'>{text}</span>};
var cY = function(text){return <span className='sub-y'>{text}</span>};
var cB = function(text){return <span className='sub-b'>{text}</span>};
var cO = function(text){return <span className='sub-o'>{text}</span>};
var cP = function(text){return <span className='sub-p'>{text}</span>};
var cGR = function(text){return <span className='sub-gr'>{text}</span>};
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
class Tab3Description extends Component{
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
					express, router, mysql, connection, randtoken<br/>...<br/>...<br/><br/>
					<div>{cGR('// Upload video through multer')} </div>
					<div>{cB('var')} multer {cR('=')} require({cY("'multer'")});</div>
					<div>{cB('var')} upload {cR('=')} multer{'({ dest: '} {cY("'public/videos'")} {'});'}</div>
					<div>{cB('var')} fs {cR('=')} require({cY("'fs'")});</div>
					<br/>
					<div>{'router.post('}{cY("'/videos'")}, {'upload.any(),'} {cB('function')}(req,res,next){'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} name {cR('=')} {'req.files[0].originalname'};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} tempPath {cR('=')} {'req.files[0].path'};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} realPath {cR('=')} {cY("'public/videos/'")} {cR('+')} name;</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} familyName {cR('=')} {'req.body.familyName'};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} token {cR('=')} {'randtoken.uid(40)'};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Insert data into sql database')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{cB('var')} insertQuery {cR('=')} {cY("'INSERT INTO videos (name, path, familyName, token) VALUES (?,?,?,?)'")};</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;{'connection.query(insertQuery, [name, realPath, familyName, token], (err2, res2, fields)'} {cR('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Read the video file saved in temporary path')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'fs.readFile(tempPath, (err3, contents)'} {cR('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Write the video file in actual video path')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'fs.writeFile(realPath, contents, (err4)'} {cR('=>')} {'{'}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cGR('// Delete video file from temporary path')}</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'fs.unlink(tempPath, (err5)=>{'}<span className='blinkTypeSomething'>|</span></div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br/>
				</div>
			</div>
		)
	}
}

export default Tab3Description

