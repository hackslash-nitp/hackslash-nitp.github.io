import styled from "styled-components"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/hackslash_logo.svg'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

export default function Navbar() {
    return (
        <Nav>
            <NavLeft> 
                <Link href="/">
                    <a>
                        <Image src={Logo} height="20%"/> 
                        <span>Hackslash</span>
                    </a>
                </Link>
            </NavLeft>
            <NavRight>
                <Link href="/">Home</Link>
                <Link href="/projects">Our Projects</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <div>
                    <Link href="facebook_link"><FaFacebook/></Link>
                    <Link href="insta_link"><FaInstagram/></Link>
                    <Link href="facebook_link"><FaTwitter/></Link>
                </div>
            </NavRight>
        </Nav>
    )
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
    padding-left: 10%;
    padding-right: 10%;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.2);
`

var NavLeft = styled.div`
    width: 15%;

    & > a{
        display: flex;
    }
`

var NavRight = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    & > div {
        width: 15%;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

