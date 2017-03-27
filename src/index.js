import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './compassSass.css';
import NavBar from './navbar.js'
import Home from './home/home.js'
import Portfolio1 from './portfolio1/portfolio1.js'
import Contact from './contact/contact.js'
import contactBackground from './contact/bbb.png'
import SkillsTable from './portfolio1/skillstable.js'
import Modal from 'react-modal';

const customStyles = {
	overlay : {
	    position          : 'fixed',
	    backgroundColor   : 'rgba(0, 0, 0, 0.8)',
	    zIndex: 201
	},
	content : {
	  	paddding:0,
	    top                   : '50%',
	    left                  : '50%',
	    right                 : 'auto',
	    bottom                : 'auto',
	    marginRight           : '-50%',
	    transform             : 'translate(-50%, -50%)'
	}
};

class Portfolio extends Component {
	constructor() {
		super();
    	this.state = {modalIsOpen: false};
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	openModal() {
		this.setState({modalIsOpen: true});
	}
	afterOpenModal() {
		this.refs.subtitle.style.color = '#f00';
	}
	closeModal() {
		this.setState({modalIsOpen: false});
	}
	render(){
		return (
    		<div>
    			<div className='portrait'>
    				<img src={contactBackground} alt='a'/>
    			</div>
    			<NavBar />
    			<div className='home-background'></div>
				<div id='home' className='vh home'><Home /></div>	
				<div id='portfolio'>
					<div className='portfolio-background'>
						<div id='portfolio1' className='portfolio1'>
						 	<div className='hidden-xs hidden-sm'>
						    	<button className='btn btn-primary' style={{position:'absolute', right:15, top:85, zIndex:6, backgroundColor:'rgba(25,44,255,0.4)', fontFamily:'Libre Franklin'}} onClick={this.openModal}>
						    		Linting The Code
						    	</button>
						    	<Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal" >
						    		<img src={require('../public/code.png')} alt='a' style={{maxHeight:580, maxWidth:'90vw'}}/>
									<button className='btn btn-primary' style={{position:'absolute', right:30, bottom:30, zIndex:6, backgroundColor:'rgba(25,44,255,0.92)', fontFamily:'Libre Franklin'}} onClick={this.closeModal}>Close</button>
						        </Modal>
      						</div>
							<Portfolio1 />
						</div>
					</div>
					<div style={{width:'100%', height:'100%', backgroundColor: '#e0e0e0'}}>
						<SkillsTable/>
					</div>
					<div className='contact-tab'>
						<div id='contact' className='contact'><Contact /></div>
						<div className='rights' id='rights'>Copyright &copy; www.pauldkang.com 2017</div>
					</div>
				</div>
			</div>
		);
	}
};


ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);


