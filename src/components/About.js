import React from "react";
import { Image, Col, Row, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";

class About extends React.Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.main.name;
      var profilepic = "images/" + this.props.data.main.image;
      var bio = this.props.data.main.bio;
      var city = this.props.data.main.address.city;
      var state = this.props.data.main.address.state;
      var zip = this.props.data.main.address.zip;
      var phone = this.props.data.main.phone;
      var email = this.props.data.main.email;
      var resumeDownload = this.props.data.main.resumedownload;
    }
    return (
      <>
        <section className="about" id="about">
          <Container>
            <Row>
              <Col sm={0} md={3} lg={3} className="d-none d-sm-block center">
                <Image
                  className="about profilepic mb-4"
                  roundedCircle
                  src={profilepic}
                  alt="Ben Wegert Profile Pic"
                />
              </Col>
              <Col sm={12} md={9} lg={9}>
                <Row className="mb-5">
                  <Col sm={12} md={12} lg={12}>
                    <h3>About Me</h3>
                    <p>{bio}</p>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} lg={5}>
                    <h3>Contact Details</h3>
                    <p className="address">
                      <span>{name}</span>
                      <br />
                      <span>
                        {city} {state} {zip}
                      </span>
                      <br />
                      <a href={"tel:" + phone}>{phone}</a>
                      <br />
                      <a href={"mailto:" + email}>{email}</a>
                    </p>
                  </Col>
                  <Col sm={12} md={7} lg={7}>
                    <Button
                      variant="dark"
                      download="BenWegertResume"
                      href={resumeDownload}
                    >
                      <i className="fa fa-file-download download"></i>{" "}
                      <b>Download Resume</b>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.reducers.data,
  };
};

export default connect(mapStateToProps, null)(About);
