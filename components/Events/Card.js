import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import top_left_image from '@/assets/projectsCard/top_left.svg'
import bottm_left_image from '@/assets/projectsCard/bottom_left.svg'


export default function Card(props){
  return (
    <>
    <CardBody>
        <CardTText>{props.name}</CardTText>

      <CardAuthor>{"By HackSlash"}</CardAuthor>
      {props.start && <CardDate>{props.start[2] + " " + props.start[1] + " " + props.start[3]} - {props.end[2] + " " + props.end[1] + " " + props.end[3]}</CardDate>}
      {props.date && <CardDate>{props.date}</CardDate>}
      <CardDescription>
       {props.description || `An awesome project created by ${props.team} team under Hackslash`}
      </CardDescription>

      <ButtonDiv>
      <CardButton><Link href={props.url}>Read More</Link></CardButton>
      </ButtonDiv>
      

      {/*  */}
      <CardTopLeft> <Image src={top_left_image}/> </CardTopLeft>
      <CardBottomLeft> <Image src={bottm_left_image}/> </CardBottomLeft>
      
      <CardRight> <ImageDiv> <EventImage src={props.image} /> </ImageDiv> </CardRight>
    </CardBody>

    </>
  )
}

//For Card
var CardBody = styled.div`
position: relative;
width:85%;
min-height: 50vh;
padding: 22px 10px;
padding-left: 10%;
margin: 30px auto;
background-color: #2D2828;
font-size: 1.4rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
transition: 0.3s;
@media (max-width: 768px){
  font-size: 1rem;
  }
`
const ButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`
var CardTText = styled.p`
color:#FFFFFF;
margin-top: 50px;
font-size: 1.8rem;
max-width: 70%;
line-height: 35px;
@media (max-width: 768px){
  font-size: 1.4rem;
  }
`

var CardDate = styled.p`
color: #C2D4F8;
@media (max-width: 768px){
  font-size: 0.8rem;
  }
`

var CardAuthor = styled.p`
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
var CardDescription = styled.p`
  font-size: 0.8rem;
  color: #FFFFFF;
  padding-right:35%;
  margin-top: 10px;
`
var CardButton = styled.button`
   font-size:1.2rem;
   padding:8px;
   margin-top: 30px;
   margin-left: 2.5rem;
   color: white;
   border: none;
   outline: none;
   background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
   border-radius:25px;
`

var CardTopLeft = styled.div`
  position: absolute;
  width: 30%;
  top: -0.5em;
  left: -0.5em;
  `

var CardBottomLeft = styled.div`
  width: 30%;
  position: absolute;
  bottom: -1.5em;
  left: -0.5em;
  `

var CardRight = styled.div`
  width: 40%;
  position: absolute;
  margin: auto;
  right: -10%;
  top: 50%; 
  transform: translateY(-50%);
`


var ImageDiv = styled.div`
  max-height: 120px !important;
  overflow: hidden;
`

var EventImage = styled.img`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`
