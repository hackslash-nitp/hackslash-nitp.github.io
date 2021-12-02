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

  @media (max-width: 768px) {
  min-height: 100vh;
  height: auto;
  justify-content: space-between;
  flex-direction: column-reverse;
  padding-bottom: 50px;
}
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
  
  @media (max-width: 768px) {
    text-align: initial;
    width: 90%;
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
