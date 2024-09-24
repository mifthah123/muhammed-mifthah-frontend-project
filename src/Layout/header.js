import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import './header.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [scrollChange, setScrollChange] = useState(false)
    const [showMenu, setShowMenu] = useState(false)


    const showHandler = () => {
        setShowMenu(true)
    }

    const hideHandler = () => {
        setShowMenu(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrollChange(true)
            } else {
                setScrollChange(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className='header-wrapper'>
            <div className='header-container' style={{ backgroundColor: scrollChange ? "#000" : "transparent", boxShadow: scrollChange ? "12px 6px 24px 10px #000" : "" }}>

                <div className='header-left'>
                    <div className='header-logo'>
                        <h1>Wefo</h1>

                    </div>
                    <div className='header-options'>
                        <p id='selected-one'>Menu item</p>
                        <p>Menu item</p>
                        <p>Menu item</p>
                        <p>Menu item</p>

                    </div>


                </div>
                <div className='header-right'>
                    <button>
                        Start a project
                        <MdArrowOutward />
                    </button>

                </div>
                <div className='ham-menu' >
                    {!showMenu &&
                        <GiHamburgerMenu onClick={showHandler} />
                    }
                    {showMenu &&
                        <IoMdClose onClick={hideHandler} />
                    }
                </div>

            </div>
            {showMenu &&
                <div className='menu-list'>
                    <p id='selected-one'>Menu item</p>
                    <p>Menu item</p>
                    <p>Menu item</p>
                    <p>Menu item</p>
                    <div className='header-right'>
                        <button>
                            Start a project
                            <MdArrowOutward />
                        </button>

                    </div>

                </div>
            }
        </div>
    )
}

export default Header