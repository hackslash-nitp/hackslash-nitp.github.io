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
  
`
const Heading = styled.span`

`

const Text = styled.div`
  
`

const CardContainer = styled.div`

`
