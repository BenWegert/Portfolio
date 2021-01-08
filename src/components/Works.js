import React from 'react'
import { Card, Button, Row, Col, Container, Badge, Modal, Image } from 'react-bootstrap'
import { connect } from 'react-redux'

class Works extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			modal: false,
			projectt: {}
		}

		this.moreInfo = this.moreInfo.bind(this)
	}
	moreInfo(project) {
		this.setState({project: project})
		this.setState({modal: true})
	}

	render() {
		if(this.props.data){
			var react = this
			var projects = this.props.data.portfolio.projects.map(function(projects){
				var projectImage = 'images/portfolio/'+projects.image;
				return (
					<Col sm={12} md={6} lg={4} className="mb-4">
						<Card style={{ height: '350px', 'max-width': '350px', 'margin': 'auto' }}>
							<Badge variant={projects.badge}>{projects.status}</Badge>{' '}
							<Card.Img className="works-image" variant="top" alt={projects.title} src={projectImage} />
							<Card.Body>
								<Card.Title>{projects.title}</Card.Title>
								<div className='works-buttons'>
									{ projects.url !== '' ? <Button className="float-right" variant="link" target="_blank" href={projects.url}>Demo <i class="link-icon fas fa-external-link-alt"></i></Button> : null }
									<Button variant="dark" onClick={() => react.moreInfo(projects)}>More Info</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				)
			})
		}
		return (
			<>	
				{ this.state.project ? 
					<Modal scrollable={true} className="works" size="xl" show={this.state.modal} onHide={() => this.setState({modal: false})}>
						<Modal.Header closeButton>
							<Modal.Title>{this.state.project.title + " "}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Image fluid className="more-image" alt={this.state.project.title} src={"./images/portfolio/" + this.state.project.image}></Image>
							<div className="p-3">
								{this.state.project.more} <br></br>
								<b>
									{this.state.project.pass ? "user: " + this.state.project.user + " pass: " + this.state.project.pass : null }
								</b>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="dark" onClick={() => this.setState({modal: false})}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				:
					null
				}
				<section className="works" id="works">
					<Container>
						<h1 className="works-header"><span>CHECK OUT SOME OF MY WORKS</span></h1>
						<Row className="resume-row works">
							{projects}
						</Row>
					</Container>
				</section>
			</>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		data: store.reducers.data
	}
}

export default connect(mapStateToProps, null)(Works)