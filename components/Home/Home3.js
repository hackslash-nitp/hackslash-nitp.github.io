import styled from "styled-components"
import Image from 'next/image'
import cupImg from '@/assets/home/CupImg.svg'
import member from '@/assets/home/members.svg'
import code from '@/assets/home/List.svg'
import proj from '@/assets/home/Guarantee.svg'
export default function Home3() {
  return (
        <MainDiv>
            <Div>
              <Image src={cupImg} width={800} height={600}/>
            </Div>
            <Div1>
                <Head1>At HackSlash</Head1>
                <Head2>We have done some great stuffs.</Head2>
                <BText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi.</BText>
                <Ul>
                <Li><Image src={member} width={80} height={80}/><Number>80+</Number><Text>Memebers</Text></Li>
                <Li><Image src={code} width={80} height={80}/><Number>50000+</Number><Text>Lines of Code</Text></Li>
                <Li><Image src={proj} width={80} height={80}/><Number>500+</Number><Text>Projects</Text></Li>
                </Ul>               
            </Div1>
        </MainDiv>
  )
}

const MainDiv = styled.div`
  background: url('/home/Homepage_2_background.svg') center center/cover;
  height: 150vh;
  display: flex;
  align-items: center;
`
var Div = styled.div`
  width: 50vw;
`
var Div1 = styled.div`
  margin-top:120px;
  width: 50vw;
`
var Head1= styled.p`
font-size: 27px;
   color:#49DDAC;
`
var Head2= styled.p`
  font-size: 48px;
  color: #FFFFFF;
`
var BText= styled.p`
  font-size:24px;
  color: #FFFFFF;
  font-size: 20px;
  text-align: justify;
  `

var Ul= styled.ul`
   display: flex;
   margin-top:90px;
   list-style-type: none;
   `

var Li = styled.li`
  margin-left:40px;
  margin-right: 40px;
  `
var Number = styled.p`
font-size:30px;
color:#49DDAC;
`
var Text = styled.p`
font-size:18px;
color: #FFFFFF;
`
var Img = styled.img`
   
`
