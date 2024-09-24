import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Ourleader = () => {
    return (
        <div className='leader-wrapper'>
            <Row>
                <Col lg={3}>
                    <div className='left-box'>

                    </div>
                </Col>
                <Col lg={6}>
                    <div className='middle-box'>
                        <div></div>
                        <div className='founder-title'>
                            <h3>Cody Fisher</h3>
                            <p>CEO Founder</p>
                            <div className='media-icons'>
                                <FaXTwitter style={{ color: "#fff" }} />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>

                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Ourleader