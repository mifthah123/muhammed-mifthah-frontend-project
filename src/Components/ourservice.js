import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdArrowOutward } from 'react-icons/md'
import '../Assets/Styles/ourservice.scss'

const Ourservice = () => {
    return (
        <div className='service-wrapper'>
            <Container className='service-container'>
                <Row className='title-row'>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className='service-header-title'>
                            <h6>
                                Our services
                            </h6>

                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <h2>
                            We are a close-knit team of experts dedicated to crafting memorable and <span> emotionally engaging websites, digital experiences, and native apps.</span>
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className='service-card'>
                            <div className='service-title'>
                                <h2>
                                    Brand Identity
                                </h2>
                                <MdArrowOutward />

                            </div>
                            <p>
                                We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
                            </p>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='service-card'>
                            <div className='service-title'>
                                <h2>
                                    UX/UI
                                    design
                                </h2>
                                <MdArrowOutward />

                            </div>
                            <p>
                                We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
                            </p>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='service-card'>
                            <div className='service-title'>
                                <h2>
                                    Webflow
                                    developer
                                </h2>
                                <MdArrowOutward />

                            </div>
                            <p>
                                We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Ourservice