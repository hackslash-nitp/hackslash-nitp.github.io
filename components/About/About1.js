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
          <p>HackSlash Developer Club is a community of NIT Patna that was created with the sole purpose of bringing people with similar interests in technology together where they can begin and master their coding and development skills. The club strives to build and improve the open-sourcing environment and the coding culture. It provides a platform where you get to work on collaborative projects and help each other grow as a team. The willpower and determination of each Developer, Competitive Coders, Designers, and Innovative thinker is what governs our community. It is an initiative taken that will go a long way in maintaining the coding culture of NIT Patna in the years to come.</p>
        </Text>
        <Image src={backgroundImg} alt="Boy on Plane" width={800} height={600}/>
    </Container>
    )
  }

const Container = styled.section`
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
