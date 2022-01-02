import styled from 'styled-components'
import Card from './Card'
export default function projects1() {
  return (
    <>
      <Container>
        <FlexDiv>
          <Text>Our Project</Text>
          <Input type="text" name="name" placeholder="" />
        </FlexDiv>
        
        <CardContainer>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </CardContainer>
        
      </Container>
    </>
  )
}

var Container = styled.div`
    background: url('/errorPage/ErrorPage.svg');
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10%;
`

var FlexDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`

const Text = styled.span`
  background: linear-gradient(90deg, #00FF9D 3.5%, #00E7FF 86.04%);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 400;
`

const Input = styled.input`
  width: 50%;
  max-width: 100%;
  height: 30%;
  border-radius: 35px;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin:10px 0px;

  font-weight: 300;
  font-family: 'Poppins','sans-serif';
  border: #69F8A2 solid 1.5px;
  background-color: rgba(256, 256, 256, 0.3);
  
  &::placeholder{
    color: whitesmoke;
  }
`



// Card Container 

var CardContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 50% 50%;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`