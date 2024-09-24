import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Assets/Styles/testimonial.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import proPic from '../Assets/images/testimonial/testimonial-avatar.png'
import { GoArrowRight } from "react-icons/go";


const Testimonials = () => {
    return (
        <div className='testimonial-wrapper'>
            <Container>
                <Row>
                    <Col lg={6} md={4} sm={12}>
                        <div className='testimonial-left'>
                            <p> Testimonials</p>
                        </div>
                    </Col>
                    <Col lg={6} md={8} sm={12}>
                        <div className='testimonial-swiper'>
                            <Swiper navigation={true} modules={[Navigation]} pagination={{

                            }}>
                                <SwiperSlide>
                                    <div className='swiper-box'>

                                        <h2>
                                            A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!
                                        </h2>
                                        <div className='swiper-user'>
                                            <img src={proPic} alt='avatar' />
                                            <div className='user-detail'>
                                                <h6>Kathryn Murphy</h6>
                                                <p>Senior Marketing, Spotify</p>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide> <div className='swiper-box'>

                                    <h2>
                                        A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I'm extremely satisfied!
                                    </h2>
                                    <div className='swiper-user'>
                                        <div>
                                            <img src={proPic} alt='avatar' />
                                        </div>
                                        <div className='user-detail'>
                                            <h6>Kathryn Murphy</h6>
                                            <p>Senior Marketing, Spotify</p>
                                        </div>

                                    </div>
                                </div></SwiperSlide>

                            </Swiper>

                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Testimonials 