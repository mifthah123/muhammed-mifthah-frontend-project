import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FaBehance, FaDribbble, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowDownward, MdArrowOutward, MdMail } from "react-icons/md";
import './footer.scss'



const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className='footer-left'>
                            <h1>Feel free to conect with us !</h1>
                            <div className='social-icons'>
                                <FaXTwitter />
                                <FaInstagram />
                                <FaDribbble />
                                <FaBehance />

                            </div>
                            <div className='contact-num'>
                                <FaPhoneAlt /><p>0972 663 633</p>

                            </div>
                            <div className='contact-num'>
                                <MdMail /><p>hello@wefo.com</p>

                            </div>

                        </div>

                    </Col>
                    <Col lg={7}>
                        <div className='footer-right'>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        color='black'
                                        placeholder='Your name'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='text'
                                        color='black'
                                        placeholder='Your email address'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        color='black'
                                        placeholder='Write your message here'
                                        rows={5}
                                    />
                                </Form.Group>
                                <button>
                                    Send<MdArrowOutward />
                                </button>
                            </Form>

                        </div>

                    </Col>
                </Row>
                <Row>
                    <div className='footer-bottom'>
                        <h2>Wefo</h2>
                        <div className='policy'>
                            <p>Privacy</p>
                            <p>Term</p>
                            <p>Security</p>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer