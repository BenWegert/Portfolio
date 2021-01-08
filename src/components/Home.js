import React from 'react'
import { Container } from 'react-bootstrap'

import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

class Home extends React.Component {
	render() {

		if(this.props.data){
			var name = this.props.data.main.name;
			var occupation= this.props.data.main.occupation;
			var description= this.props.data.main.description;
			var city= this.props.data.main.address.city;
			var networks= this.props.data.main.social.map(function(network){
				return <li key={network.name} className='social'><a href={network.url}><i className={network.className}></i></a></li>
			})
		}

		return (
			<>
				<section className="home" id="home">
					<Navbar collapseOnSelect expand='sm' bg="navbar-navy" variant="dark" fixed="top">
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					  	<Navbar.Collapse id="responsive-navbar-nav">
					  		<Nav className="ml-auto mr-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<Nav.Link href="#resume">Resume</Nav.Link>
								<Nav.Link href="#works">Works</Nav.Link>
							</Nav>
					  	</Navbar.Collapse>
					</Navbar>
					<Container className="centered">
						<h1 className="responsive-headline">I'm {name}.</h1>
						<h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
						<hr />
						<ul className="social">
							{networks}
						</ul>
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

export default connect(mapStateToProps, null)(Home)
