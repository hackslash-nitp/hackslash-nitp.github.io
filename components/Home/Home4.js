import styled from "styled-components"
import Image from 'next/image'
import mail from '@/assets/home/envelope-2997179-2516217.svg'
import { BiMailSend } from "react-icons/bi"
export default function Home4() {
  return (
    <MainDiv>
      <LetterDiv>
          <LetterHeading>REGISTER FOR OUR NEWSLETTER NOW </LetterHeading>
      </LetterDiv>
      
      <ButtonDiv>
        <form>
          <InputMailSend>
            <Input placeholder="Enter Your Email" type="text"></Input>
            <MailSend />

          </InputMailSend>
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </form>
      </ButtonDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_3_background.svg') center center/cover;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LetterDiv = styled.div`
  width: 60%;
  padding: 10px 20px;
`
const LetterHeading = styled.div`
  font-size:40px;
  color:#FFFFFF;
`
const ButtonDiv = styled.div`

`
const InputMailSend = styled.div`
position: relative;
`
const SubscribeBtn = styled.div`
  background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
  color:#FFFFFF;
  font-size:20px;
  border-radius:10px;
  width: 150px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
`
const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  margin-right: 20px;
  color: black;
  background-color: white;
  padding: 10px;
  border: none;
  outline: none;
`
const MailSend = styled(BiMailSend)`
    color: burlywood;
    position: absolute;
    right: 38px;
    top: 12px;
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
`