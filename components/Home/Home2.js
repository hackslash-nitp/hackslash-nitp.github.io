import Image from 'next/image'
import Link from 'next/link'
import marketing from '@/assets/home/home2logo.svg'
import styled from 'styled-components'
import {FaCode} from 'react-icons/fa'
import {BiNotepad} from 'react-icons/bi'

export default function Home2(props) {
  return (
    <MainDiv  id={props.id}>
    <Container>
        <Text>
          <Heading><h1>We are making <Em>ideas</Em> better for everyone</h1></Heading>
          <br />
          <p>Ideas without actions are useless and we try to foster them by giving our members a platform through which they can put those ideas in motion.</p>
          <Button><Link href="/projects">Learn More</Link></Button>
        </Text>
        <Image src={marketing} width={800} height={600} alt=""/>
    </Container>

      {/* <IconsMainDiv>
          <IconsDivContainer>
            <IconDiv>
              <Notepad />
            </IconDiv>
            <IconDiv>
              <CodePen />
            </IconDiv>
            <IconDiv>
              <CodePen />
            </IconDiv>
            <IconDiv>
              <Notepad />
            </IconDiv>
          </IconsDivContainer>
      </IconsMainDiv> */}
    </MainDiv>
    )
  }

  const MainDiv = styled.section`
  height: 100vh;
  background: url("/about/About_1_background.svg") center center/cover;
  display: flex;
  flex-direction: column;
  `
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5%;
  color: white;
  height: 100vh;

  @media (max-width: 768px) {
  justify-content: space-between;
  flex-direction: column-reverse;
  padding-bottom: 50px;
}
`

const Text = styled.div`
  width: 50%;

  & > p :first  {
    font-size: 18px;
    text-align: justify;
  }

  @media (max-width: 768px) {
 width: 90%;
}
  `
const Heading = styled.span`
  width: 50%;
  font-size: 20px;
  font-weight: 400;
`
const Em = styled.b`
 font-family: Poppins;
 color: rgba(105, 248, 162, 1);
 `
const Button= styled.button`
margin-top: 20px;
border-radius:25px;
color:#FFFBFB;
font-size:1.2rem;
letter-spacing: 1px;
padding: 10px 15px;
border: none;
outline: none;
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
` 

const IconsMainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const IconsDivContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconDiv = styled.div`
  background: rgba(105, 248, 162, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
`
const Notepad = styled(BiNotepad)`
  transform: scale(2.2);
  color: white;
`
const CodePen = styled(FaCode)`
  transform: scale(2.2);
  color: #18a0fb;
`