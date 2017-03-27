import React, { Component } from 'react'
import Code from './sublime.js'
import $ from 'jquery'
var Carousel = require('nuka-carousel');
const apiKey = '711598378e9580af473078fd4c1c1a26'
const apiBaseUrl = 'http://api.themoviedb.org/3/'
const imageBaseUrl = 'http://image.tmdb.org/t/p/w185/'

class Project extends Component{
	constructor(props){
		super(props);
		this.state = {moviesArray1: [],moviesArray2: [],moviesArray3: [],moviesArray4: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}	
	componentDidMount () {
		var url = apiBaseUrl + 'movie/now_playing?api_key=' + apiKey 
		var titlesArray1 = [];
		var titlesArray2 = [];
		var titlesArray3 = [];
		var titlesArray4 = [];
		$.getJSON(url, (movieData) =>{
			// console.log(movieData.results)
			movieData.results.map((movie, index)=>{
				if(index < 5){
					var posterURL = imageBaseUrl + movie.poster_path;
					titlesArray1.push(<div key={index} className='each-movie-poster'><img src={posterURL} alt='a'/></div>);
				}else if(index < 10){
					var posterURL = imageBaseUrl + movie.poster_path;
					titlesArray2.push(<div key={index} className='each-movie-poster'><img src={posterURL} alt='a'/></div>);
				}else if(index < 15){
					var posterURL = imageBaseUrl + movie.poster_path;
					titlesArray3.push(<div key={index} className='each-movie-poster'><img src={posterURL} alt='a'/></div>);	
				}else if(index < 21){
					var posterURL = imageBaseUrl + movie.poster_path;
					titlesArray4.push(<div key={index} className='each-movie-poster'><img src={posterURL} alt='a'/></div>);
				}
			})
			this.setState({
				moviesArray1: titlesArray1,
				moviesArray2: titlesArray2,
				moviesArray3: titlesArray3,
				moviesArray4: titlesArray4
			})
			// console.log(this.state.moviesArray1)
		});	
	
	}		
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Movie Database</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/movie-app'>
							<img src={require('./movie.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>

						<div className='github-main'>	
							<a target="_blank" href='https://github.com/pdwkang/movie-app'>
								<img style={{width:'100%'}} alt='a' src={require('../others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'>Movie application that displays currently 
					playing movies, nearby theater ticketing through Fandango, popular tv shows,                  
					and a movie search query through <i>The Movie Data Base</i> API.
				</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>Bootstrap</div>
					<div className='tags'>JavaScript</div>
					<div className='tags'>jQuery</div>					
					<div className='featured tags'>Ajax</div>
					<div className='tags'>JSON</div>
					<div className='tags'>Movie API</div>
				</div>
				<div className='movie-wrapper'>
					<div className='col-sm-3'>
						<Carousel autoplayInterval={2000} autoplay={true} wrapAround={true} decorators={false}>
							{this.state.moviesArray1}
						</Carousel>
					</div>
					<div className='col-sm-3'>
						<Carousel autoplayInterval={2000} autoplay={true} wrapAround={true} decorators={false}>
							{this.state.moviesArray2}
						</Carousel>
					</div>
					<div className='col-sm-3'>
						<Carousel autoplayInterval={2000} autoplay={true} wrapAround={true} decorators={false}>
							{this.state.moviesArray3}
						</Carousel>
					</div>
					<div className='col-sm-3'>
						<Carousel autoplayInterval={2000} autoplay={true} wrapAround={true} decorators={false}>
							{this.state.moviesArray4}
						</Carousel>
					</div>															
				</div>
			</div>
		)
	}
}

class Portfolio3z extends Component{
	render(){
		return(
			<div className='portfolio-page'> 
				<div className='col-xs-8 col-xs-offset-4 col-sm-6 col-md-6 project-wrapper'>
					<Project />
				</div>
				<div className='hidden-xs col-sm-6 col-md-6 sublime-wrapper'>
				<div style={{position:'absolute', right:0, top:0, width:'100%', height:75, backgroundColor:'#171814', zIndex:2}}></div>
					<Code />
				</div>
			</div>
		)
	}
}

export default Portfolio3z