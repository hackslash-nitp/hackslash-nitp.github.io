import styled, {css} from "styled-components"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/hackslash_logo.svg'
import {FaFacebook, FaInstagram, FaTwitter, FaBars} from 'react-icons/fa'
import { Component } from "react"

function myFunction(){
    alert("ok")
}

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            nav_open: false,
        }

        this.toggle = this.toggle.bind(this)
    
    }

    toggle() {
        this.setState(() => ({'nav_open': !this.state.nav_open}))
    }
    
    render() {
        return (
            <Nav>
                <NavLeft> 
                    <Link href="/">
                        <a>
                            <Image src={Logo} alt="Hackslash Logo" height="20%"/> 
                            <span>Hackslash</span>
                        </a>
                    </Link>
                </NavLeft>
    
                <NavRightContainer>
                    <RightIcon onClick={this.toggle}><a><FaBars/></a></RightIcon>
                    <NavRight isOpen={this.state.nav_open}>
                        <Link href="/">Home</Link>
                        <Link href="/projects">Our Projects</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>
                        <div>
                            <Link href="https://www.facebook.com/hackSlash.nitp/"><a><FaFacebook/></a></Link>
                            <Link href="https://www.instagram.com/hackslash.nitp/"><a><FaInstagram/></a></Link>
                            <Link href="https://twitter.com/hackslash_nitp/"><a><FaTwitter/></a></Link>
                        </div>
                    </NavRight>
                </NavRightContainer>
    
            </Nav>
        )
    }
}

var Nav = styled.div`
    top: 0;
    height: 10%;
    width: 100vw;
    font-size: 20px;
    font-weight: 400;
    color: white;
    display: flex;
    position: fixed;
    align-items: center;
    z-index: 10;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10px;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        max-height: max-content;
        height: auto;
        align-items: flex-start;
        padding-top: 3%;
    }
    `

var NavLeft = styled.div`
    width: 15%;

    & > a{
        display: flex;
    }
    `

var NavRightContainer = styled.div`
    width: 70%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: max-content;
    }
`

var NavRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    & > div {
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        display: ${props => props.isOpen ? "flex" : "none"};

        & > a{
            margin-top: 2px;
        }
    }
    `

const RightIcon = styled.div`
    display: none;
    cursor: pointer;
    
    @media (max-width: 768px) {
        display: initial;
    }
`
