import Image from 'next/image'
import marketing from '@/assets/home/home2logo.svg'
import styled from 'styled-components'

export default function Home2() {
  return (
      <MainDiv>
            <ImageAndBody>
                <ParagraphDiv>
                    <Heading>We are making ideas better for everyone</Heading>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
                    <button>Learn More</button>
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
const Heading = styled.h3`
  width: 400px;
  color: white;
`