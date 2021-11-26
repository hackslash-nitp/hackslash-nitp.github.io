import Image from 'next/image'
import marketing from '@/assets/home/home2logo.svg'
import styled from 'styled-components'

export default function Home2() {
  return (
      <MainDiv>
            <ImageAndBody>
                <ParagraphDiv>
                    <Heading>We are making <Em>ideas</Em> better for everyone</Heading>
                    <Para>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </Para>
                    <Button>Learn More</Button>
                </ParagraphDiv>               
              <Image src={marketing} alt="marketing-boy-logo" width={400} height={400} />
            </ImageAndBody>

            <div>
              {/* <div><Image /></div>
              <div><Image /></div>
              <div><Image /></div>
              <div><Image /></div> */}
            </div>

        </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_2_background.svg') center center/cover;
  height: 100vh;
`
const ImageAndBody = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ParagraphDiv = styled.div`
  width: 50%;
`
const Heading = styled.h2`
  width: 400px;
  color: white;
`
const Em = styled.em`
font-family: Poppins;
color:#00F0FF;
`
const Para = styled.p`
font-size:20px;
color: #FFFFFF
`
const Button= styled.button`
border-radius:20px;
color:#FFFBFB;
font-size:30px;
padding: 7px;
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);

`
