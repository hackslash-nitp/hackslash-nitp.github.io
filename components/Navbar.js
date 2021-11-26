import styled from "styled-components"
import Link from 'next/link'

export default function Navbar() {
    return (
        <Nav>
            <NavLeft>Hackslash</NavLeft>
            <NavRight>
                <Link href="/">Home</Link>
                <Link href="/projects">Our Projects</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <div>
                    <Link href="facebook_link"><i></i></Link>
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
    background-color: rgba(0, 0, 0, 0.1);
`

var NavLeft = styled.div`
    width: 20%;
`

var NavRight = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
`

