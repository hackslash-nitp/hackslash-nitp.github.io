import styled from "styled-components"
import Image from 'next/image'
import mail from '@/assets/home/envelope-2997179-2516217.svg'
export default function Home4() {
  return (
    <MainDiv>
      <Div1>
   <Head1>REGISTER FOR OUR NEWSLETTER NOW
</Head1>
      </Div1>
      <Div2>
          <Input/> <br/>
          <Image src={mail} width={81} height={81}/>
          <Button>Subscribe</Button>
      </Div2>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_3_background.svg') center center/cover;
  height: 50vh;
  display: flex;
`
var Div1 = styled.div`
margin-top:100px;
width:60vw;
`
var Head1 = styled.p`
font-size:40px;
color:#FFFFFF;
`
var Input = styled.input`
width:65%;
height:30px;
border:none;
margin-top:20px;
margin-left:70px;
text-align:center;
background-color: #FFFFFF;
`

var Div2 = styled.div`
margin-top:100px;
width:40vw;
`
var Button = styled.button`
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
color:#FFFFFF;
font-size:30px;
padding:10px;
margin-top:10px;
margin-left:70px;
padding-left:20px;
padding-right:20px;
border-radius:20px;
`
