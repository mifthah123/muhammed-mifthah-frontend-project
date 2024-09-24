import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Assets/Styles/whoarewe.scss'
import { MdArrowOutward } from 'react-icons/md'
import tag from '../Assets/images/whoarewe/tag.png'

const Whoarewe = () => {
    return (
        <div className='wh-are-we-container'>
            <Container >
                <Row >
                    <Col lg={4} md={12} sm={12}>
                        <div className='left-content'>
                            <p>Who are we?</p>
                            <div className='left-box'>

                            </div>

                        </div>
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <div className='right-content'>
                            <p>
                                We create mind-blowing visuals, brands, websites and products  <span> that help startups and innovative companies gain more exposure.</span>

                            </p>



                            <div className='learn-more'>
                                <button>Learn more <MdArrowOutward /></button>
                            </div>
                        </div>
                    </Col>

                </Row>

                <div className='footer-img'>
                    <img src={tag} alt='footer-img' />

                </div>
            </Container>
        </div>

    )
}

export default Whoarewe