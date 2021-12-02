import styled from 'styled-components'
import Card from './Card'

export default function About2() {
  return (
    <Container>
        <Text>
          <Heading>Our Team</Heading>
          <br />
          <span>Conquering The World Of Tech</span>
        </Text>
        <CardContainer>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  background: url("/about/About_2_background.svg") center center/cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Heading = styled.span`
  background: -webkit-linear-gradient(right, #00FF9D, #00E7FF);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  font-size: 2em;
  `

const Text = styled.div`
  font-size: 20px;
  
  & > span{
    color: white;
  }
`

const CardContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`
const CardItem = styled(Card)`
  max-width: 20%;
`