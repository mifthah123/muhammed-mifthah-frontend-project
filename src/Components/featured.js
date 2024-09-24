import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Assets/Styles/features.scss'

const Featured = () => {
    return (
        <Container className='feature-container'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className='features-left'>
                        <div className='card-content'>


                        </div>
                        <div className='feature-option'>
                            <p>Development</p>
                            <p>UI/UX</p>
                            <p>Illustration</p>

                        </div>
                        <div className='feature-title'>
                            <h4>Roboto Landing page</h4>

                        </div>

                    </div>
                    <div className='features-left'>
                        <div className='card-content'>


                        </div>
                        <div className='feature-option'>
                            <p>Development</p>
                            <p>UI/UX</p>
                            <p>Illustration</p>

                        </div>
                        <div className='feature-title'>
                            <h4>Groteck Website</h4>

                        </div>

                    </div>

                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className='features-right-title'>
                        <p>Featured Works</p>
                        <h2>Take a look at
                            our projects</h2>


                    </div>
                    <div className='features-left'>
                        <div className='card-content'>


                        </div>
                        <div className='feature-option'>
                            <p>Development</p>
                            <p>UI/UX</p>
                            <p>Illustration</p>

                        </div>
                        <div className='feature-title'>
                            <h4>Poppin App Design</h4>

                        </div>

                    </div>
                    <div className='features-left'>
                        <div className='card-content'>


                        </div>
                        <div className='feature-option'>
                            <p>Development</p>
                            <p>UI/UX</p>
                            <p>Illustration</p>

                        </div>
                        <div className='feature-title'>
                            <h4>Helvatica Branding</h4>

                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Featured