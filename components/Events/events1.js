import styled from 'styled-components'
import Image from 'next/image'
import ShoppingLove from '@/assets/events/shopping-love.svg'

export default function Contact1() {
  return (
    <Container>
        <Text>
          <Heading>Our Events</Heading>
          <br />
          <p>HackSlash aims at one’s development in a peer-to-peer learning environment, with people having like interests. This is not possible without strong community bonding and informative tech sessions or events. HackSlash never fails to organize an event at a regular interval of time. The events range from technical sessions to hackathons, from workshops to community meetups, and many more!</p>
        </Text>
        <Image src={ShoppingLove} alt="Shopping Love" width={800} height={600}/>
    </Container>
    )
  }

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url("/contact/contact_background.svg") center center/cover;
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
