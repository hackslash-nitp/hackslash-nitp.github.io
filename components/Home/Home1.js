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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla purus porttitor sed. Neque ornare tempor, egestas vel, sed commodo cursus euismod egestas. At vulputate turpis et ultricies.</p>
          </Text>
      </Container>
      )
    }

const Container = styled.div`
width: 100%;
height: 100vh;
background: url("/home/Homepage_1_background.svg") center center/cover;
display: flex;
align-items: center;
/* padding: 5%; */
color: white;
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
`

  