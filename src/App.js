import React from 'react';
import axios from 'axios'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Spinner } from 'react-bootstrap'

import { setData } from './actions/actions'

import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'


class App extends React.Component {
	constructor(props){
	    super(props)

	    this.getResumeData = this.getResumeData.bind(this)
	}

	getResumeData(){
		axios.get('/resumeData.json')
		.then(response => {
			this.props.setData(response.data);
		})
		.catch(err => console.log(err))
	}

	componentDidMount(){
		this.getResumeData();
	}

	render() {
		console.log(this.props.data)
		return (
			<>
				{ this.props.data ? 
					<div className="wrapper">
						<Home />
						<About />
						<Resume />
						<Works />
					</div>
				: 
					<Spinner animation="border" size="lg" variany="info" />
				}
			</>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		data: store.reducers.data
	}
}

const mapDispatchToProps = (dispatch) => {
 	return bindActionCreators({ setData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
