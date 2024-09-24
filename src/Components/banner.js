import React from 'react'
import '../Assets/Styles/banner.scss'
import { Container } from 'react-bootstrap'
import { MdArrowOutward } from 'react-icons/md'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container >
                <div className='banner-content'>
                    <h1>We create award winning website</h1>
                    <p>Based in San Francisco, we’re a digital products design& development studio that passionate with the creation high applicability of digital experiences</p>
                    <button>
                        Explore <MdArrowOutward />
                    </button>
                </div>

            </Container>
        </div>
    )
}

export default Banner