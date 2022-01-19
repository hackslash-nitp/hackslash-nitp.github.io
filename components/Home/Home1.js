import Image from 'next/image'
import styled from 'styled-components'
import HomeLogo from '@/assets/home/girlImage.svg'

export default function Homepage(props) {
    return (
      <Container id={props.id}>
          <Image src={HomeLogo} alt="Girl Image" width={800} height={600}/>
          <Text>
            <Heading><h3>We Are</h3> <h1>HackSlash</h1></Heading>
            <br />
            <p>A Community that aims to provide a forum to nurture coding and development skills, and help each other grow because we believe that working together has immense power.</p>
          </Text>
      </Container>
      )
    }

const Container = styled.section`
width: 100%;
height: 100vh;
background: url("/home/Homepage_1_background.svg") center center/cover;
display: flex;
align-items: center;
/* padding: 5%; */
color: white;

@media (max-width: 768px) {
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 50px;

  &>div{
    width: 80%;
    text-align: left;
  }
}
`

const Text = styled.div`
width: 50%;
text-align: justify;
padding-right: 15%;

& > p :first {
    font-size: 18px;
}
`
const Heading = styled.span`
width: 100%;
text-align: right;
justify-content: end;
display: flex;
font-size: 20px;
flex-direction: column;

& > h2{
    margin: 0;
}

@media (max-width: 768px) {
  text-align: left;
}
`

  