import styled from 'styled-components'
import Image from 'next/image'
import backgroundImg from '@/assets/about/boy_on_plane.svg'

export default function About1() {
  return (
    <Container>
        <Text>
          <Heading>On a Mission</Heading>
          <br />
          <span>To Take The Hassle out of Home.</span>
          <p>HackSlash, currently under the Mozilla Campus Clubs Network, is an all student driven developers community located in the National Institute of Technology Patna. The club strives to build and improve the open sourcing environment and the coding culture of the whole city of Patna and eventually the whole state of Bihar. The will power and determination of each Developers, Competitive Coders, Designers and Innovative thinkers is what governs our great community.</p>
        </Text>
        <Image src={backgroundImg} alt="Boy on Plane" width={800} height={600}/>
    </Container>
    )
  }

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/about/About_1_background.svg") center center/cover;
  display: flex;
  align-items: center;
  padding: 5%;
  color: white;
`

const Text = styled.div`
  width: 50%;
  text-align: justify;

  & > p :first {
    font-size: 18px;
  }

  & > span {
    font-size: 48px;
  }
`
const Heading = styled.span`
  width: 50%;
  background: -webkit-linear-gradient(right, #00FF9D, #00E7FF);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`
