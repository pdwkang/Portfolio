import React, { Component } from 'react'
import Code from './sublime.js'
import $ from 'jquery'
var Carousel = require('nuka-carousel');
const newsApiKey = '275258a3655c449ba4907833f5baf08b';
const apiMain = 'https://newsapi.org/v1/articles?source=';	
const apiTail = '&apiKey='

class Project extends Component{
	constructor(props){
		super(props);
		this.state = {articlesArray: []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}	
	componentDidMount () {
		var apiSource = 'techcrunch';
		var url = apiMain + apiSource + apiTail + newsApiKey;
		var titlesArray = [];
		$.getJSON(url, (newsData) =>{
			newsData.articles.map((article, index)=>{
				titlesArray.push(<div className='each-article-title'><a target="_blank" href={article.url}>{article.title}</a></div>);
			})
			this.setState({articlesArray: titlesArray})
		});	
	
	}	
	render(){
		return(
			<div>
				<div className='upd8ed-header'>Upd8ed, News Aggregator</div>
				<div className='project-image' style={{width:'93%', position:'relative'}}>
					<div className='project-image-div'>
						<a className='laptop-screen-project' target="_blank" href='http://www.pauldkang.com/news'>
						<img src={require('./images/tv1.png')} width="100%" height='100%' alt='a'/>
						<div className='show-me-on-hover'>Visit Website</div>
						</a>
						<div className='github-main'>	
							<a target="_blank" href='https://github.com/mason0958/News-Aggregator'>
								<img style={{width:'100%'}} alt='a' src={require('./others/images/github.png')} />
							</a>
						</div>
					</div>
				</div>
				<div className='project-description'><i>Upd8ed</i>&nbsp; is a one-stop shop that provides the visitor with the latest business, entertainment, 
				global, and sports news aggregated from over 60 different news sources</div>
				<div className='tag-wrapper'>
					<div className='tag-header'>Technologies used</div>
					<div className='tags'>HTML5</div>
					<div className='tags'>CSS3</div>
					<div className='tags'>Bootstrap</div>
					<div className='tags'>Responsive Design</div>
					<div className='tags'>JavaScript</div>					
					<div className='tags'>jQuery</div>					
					<div className='tags'>Ajax</div>
					<div className='featured tags'>React.js</div>
					<div className='tags'>react-router</div>
					<div className='tags'>create-react-app</div>
					<div className='featured tags'>Node.js</div>
					<div className='tags'>NPM</div>
					<div className='tags'>Git</div>
					<div className='tags'>Yahoo Stock API</div>
					<div className='tags'>Weather API</div>
					<div className='tags'>News API</div>
					<div className='tags'>Agile Development</div>
				</div>
				<div className='news-wrapper'>
					TechCrunch Top Articles
					<Carousel autoplayInterval={2000} autoplay={true} wrapAround={true} decorators={false}>
						{this.state.articlesArray}
					</Carousel>
				</div>				
			</div>
		)
	}
}

class Portfolio1z extends Component{
	render(){
		return(
				<div className='portfolio-page'> 
					<div className='hidden-xs col-sm-6 col-md-6 project-wrapper'>
						<Project />
					</div>
					<div className='hidden-xs col-sm-6 col-md-6 sublime-wrapper'>
						<Code />
					</div>
				</div>		
		)
	}
}

export default Portfolio1z