import styled from 'styled-components'
import Image from 'next/image'
import Card from './Card'

export default function About2() {
  return (
    <Container>
        <Text>
          <Heading>Our Team</Heading>
          <span>conquering the world of tech</span>
        </Text>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("/about/About_2_background.svg") center center/cover;
`
const Heading = styled.span`

`

const Text = styled.div`
  
`

const CardContainer = styled.div`

`
