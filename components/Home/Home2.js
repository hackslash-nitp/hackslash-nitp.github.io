import Image from 'next/image'
import marketing from '@/assets/home/home2logo.svg'
import styled from 'styled-components'

export default function Home2() {
  return (
    <Container>
        <Text>
          <Heading>We are making <Em>ideas</Em> better for everyone</Heading>
          <br />
          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
          <Button>Learn More</Button>
        </Text>
        <Image src={marketing} width={800} height={600}/>
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

  & > p :first {
    font-size: 18px;
  }
  `
const Heading = styled.span`
  width: 50%;
  font-size: 45px;
  font-weight: 400;
`
const Em = styled.b`
 font-family: Poppins;
 color:#00F0FF;
 `
const Button= styled.button`
margin-top: 20px;
border-radius:25px;
color:#FFFBFB;
font-size:25px;
padding: 10px;
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
` 