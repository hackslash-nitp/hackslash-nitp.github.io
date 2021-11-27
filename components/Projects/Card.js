import styled from 'styled-components'
var CardData = [{
  CardTitle: 'Project-1',
  CardDate: '26 November 2021',
  CardAuthor: 'Web Team',
  CardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl tristique eu risus, convallis. In aliquet malesuada pulvinar malesuada. Tortor nibh rutrum est nisi varius in enim quam magna. Et, sit cursus nunc tortor diam leo cursus. Arcu orci, in bibendum egestas donec. Eu, nibh laoreet auctor tellus rutrum lacinia morbi. Volutpat ut volutpat enim aliquet duis cras tellus donec. Sed amet, cursus gravida sem integer vitae nisl libero. Eleifend ipsum rhoncus augue dui id integer quis platea dictum."
}]
export default function Card(){
  return (
    <><div>abcd</div></>
    // <CardBody>
    //   <CardTitle>
    //     <CardTText>{CardData[0].CardTitle}</CardTText>
    //     <CardDate>{CardData[0].CardDate}</CardDate></CardTitle>
    //   <CardAuthor>{CardData[0].CardAuthor}</CardAuthor>
    //   <CardDescription>
    //    {CardData[0].CardDescription}
    //   </CardDescription>
    //   <CardButton>Read More</CardButton>
    // </CardBody>
  )
}

//For Card

var CardBody = styled.div`
width:90%;
padding:10px;
margin:auto;
background-color: #2D2828;
`
var CardTitle = styled.div`
margin:auto;
text-align:center;
display: flex;
`
var CardTText = styled.p`
/* margin-right:70px; */
font-size:30px;
color:#FFFFFF;
`
var CardDate = styled.p`
font-size:24px;
color: #C2D4F8;
`
var CardAuthor = styled.p`
font-size:26px;
margin-right:490px;
color: linear-gradient(270deg, #48DDAB 48.58%, #54ADE6 98.99%);
;
`
var CardDescription = styled.p`
  font-size:16px;
  color: #FFFFFF;
  padding-right:35%;

`
var CardButton = styled.button`
   font-size:28px;
   padding:6px;
   font-weight:bold;
   background: linear-gradient(270deg, #48DDAB 48.58%, #54ADE6 98.99%);
   border-radius:25px;
   margin-left:-0px;
`
