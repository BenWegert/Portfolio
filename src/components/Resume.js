import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

class Resume extends React.Component {

	render() {
		if(this.props.data){
			var education = this.props.data.resume.education.map(function(education){
				return <div key={education.degree}><h4>{education.school}</h4>
					<p className="info">{education.degree} &bull; <em className="date">{education.graduated}</em></p>
					<p>{education.description}</p></div>
			})
			var work = this.props.data.resume.work.map(function(work){
				return <div key={work.company}><h4>{work.company}</h4>
					<p className="info">{work.title} &bull; <em className="date">{work.years}</em></p>
					<p>{work.description}</p>
					</div>
			})
			var skills = this.props.data.resume.skills.map(function(skills){
				return (
					<Col sm={12} md={4} lg={4} key={skills.name} className="mb-2 mt-2">
						<img src={'images/' + skills.image} alt={skills.image} className="skill-image"></img>
						<p>{skills.info}</p>
					</Col>
				)
			})
		}
		return (
			<section className="resume" id="resume">
				<Container className="resume-heading">
					<Row className="resume-row">
						<Col sm={12} md={12} lg={3} className="mb-4">
							<h1><span>Education</span></h1>
						</Col>
						<Col sm={12} md={12} lg={9} className="pb-3 pt-3">
							{education}
						</Col>
					</Row>
					<Row className="resume-row">
						<Col sm={12} md={12} lg={3} className="mb-4">
							<h1><span>Work</span></h1>
						</Col>
						<Col sm={12} md={12} lg={9} className="pb-3 pt-3">
							{work}
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={12} lg={3} className="mb-4">
							<h1><span>Technologies</span></h1>
						</Col>
						<Col sm={12} md={12} lg={9} className="pb-3 pt-3 center">
							<Row>
								{skills}
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		data: store.reducers.data
	}
}

export default connect(mapStateToProps, null)(Resume)