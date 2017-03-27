import React, { Component } from 'react';
import Modal from 'react-modal';
class SkillsTable extends Component{
	constructor() {
	    super();

	    this.state = {
	      modalIsOpen: false
	    };

	    this.openModal = this.openModal.bind(this);
	    this.afterOpenModal = this.afterOpenModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
	    this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
	    // references are now sync'd and can be accessed.
	    this.refs.subtitle.style.color = '#f00';
	}

	closeModal() {
	    this.setState({modalIsOpen: false});
	}

	render(){
		return(
			<div className='row skills-table-wrapper text-center' id='skills'>
				{/*<div className='skills-table-header'></div>*/}
				<div className='hidden-xs hidden-sm'>
				<div className='project-titles-header3'>
					<div className='project-title-left-top3'></div>
					Skills
					<div className='project-title-bottom-right3'></div>
				</div>
				<div className='front-end'>
					<div className='front-end-header'>Front-End</div>
					<div className='each-skill'>HTML5 &nbsp;/ &nbsp;CSS3&nbsp; / &nbsp;<i style={{fontSize:17}}>Sass</i> </div>
					<div className='each-skill s2'>Bootstrap &nbsp; / &nbsp; <i style={{fontSize:17}}>Responsive Design</i></div>
					<div className='each-skill s2'>JavaScript &nbsp;/&nbsp; Ajax &nbsp;/&nbsp; JSON &nbsp;/&nbsp; ES6</div>
					<div className='each-skill'>Angular.js &nbsp;/&nbsp; View.js &nbsp;/&nbsp; jQuery </div>
					<div className='each-skill s2'><i style={{fontSize:17}}>React.js &nbsp; </i> / 
						<i className='redux-hover' onClick={this.openModal} style={{fontSize:17, color:'blue'}}> &nbsp;Redux </i> 
						
						    	<Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal" >
						    		<img src={require('../../public/redux.png')} alt='a' style={{height:'90vh', maxWidth:'90vw'}}/>
									<button className='btn btn-primary' style={{position:'absolute', right:15, bottom:15, zIndex:6, backgroundColor:'rgba(25,44,255,0.92)', fontFamily:'Libre Franklin'}} onClick={this.closeModal}>Close</button>
						        </Modal>						
					</div>
				</div>
				<div className='back-end'>
					<div className='back-end-header'>Back-End</div>
					<div className='each-skill '>Node.js &nbsp; / &nbsp; NPM</div>
					<div className='each-skill s2'>Express &nbsp; / &nbsp; MySql &nbsp; / &nbsp; RESTful API </div>
					<div className='each-skill'>Python</div>
					<div className='each-skill s2'>AWS &nbsp; / &nbsp; EC2 </div>
					<div className='each-skill'>Apache</div>
				</div>
				<div className='in-progress hidden-xs'>
					<div className='in-progress-header'>Development Tools</div>
					<div className='each-skill'>Git &nbsp; / &nbsp; SourceTree </div>				
					<div className='each-skill'>FileZilla &nbsp; / &nbsp; Sequel Pro</div>					
					<div className='each-skill s2'>Wordpress &nbsp; / &nbsp; MAMP PRO </div>
					<div className='each-skill'>Photoshop &nbsp; / &nbsp; Sketch</div>
					<div className='each-skill'>&nbsp;</div>
				</div>
				<div> &nbsp;</div><div> &nbsp;</div><div> &nbsp;</div>
				</div>
				<div className='visible-xs visible-sm'>
				<div className='project-titles-header3' style={{width:'40vw', marginLeft: '30vw'}}>
					<div className='project-title-left-top3'></div>
					Skills
					<div className='project-title-bottom-right3'></div>
				</div>
				<div className='front-end' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='front-end-header'>Front-End</div>
					<div className='each-skill'>HTML5 &nbsp;/ &nbsp;CSS3&nbsp; / &nbsp;<i style={{fontSize:17}}>Sass</i> </div>
					<div className='each-skill s2'><i style={{fontSize:17}}>Responsive Design</i></div>
					<div className='each-skill'>JavaScript &nbsp;/&nbsp; jQuery &nbsp;/&nbsp; Ajax</div>
					<div className='each-skill s2'><i style={{fontSize:17}}>React.js</i> &nbsp;/ &nbsp;Redux &nbsp;/ &nbsp;JSX &nbsp;/ &nbsp;ES6</div>
				</div>
				<div className='back-end' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='back-end-header'>Back-End</div>
					<div className='each-skill '>NPM / Express</div>
					<div className='each-skill s2'>MySQL</div>
				
				</div>
				<div className='in-progress' style={{width:'80vw', margin:'auto', marginTop:40}}>
					<div className='in-progress-header'>In Progress</div>
					<div className='each-skill'>Redux&nbsp; /&nbsp; Node.js</div>				
					<div className='each-skill s2'>MongoDB / MySQL</div>
					<div className='each-skill'>Socket.io</div>
					<div className='each-skill s2'>AWS &nbsp; / &nbsp; Webpack &nbsp; / &nbsp; Python</div>
				</div>
				<div> &nbsp;</div><div> &nbsp;</div><div> &nbsp;</div>					
				</div>
			</div>
		)
	}
}

export default SkillsTable



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
