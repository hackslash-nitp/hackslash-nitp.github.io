import styled from 'styled-components'
var CardData = [{
  CardTitle: 'Project-1',
  CardDate: '26 November 2021',
  CardAuthor: 'Web Team',
  CardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl tristique eu risus, convallis. In aliquet malesuada pulvinar malesuada. Tortor nibh rutrum est nisi varius in enim quam magna. Et, sit cursus nunc tortor diam leo cursus. Arcu orci, in bibendum egestas donec. Eu, nibh laoreet auctor tellus rutrum lacinia morbi. Volutpat ut volutpat enim aliquet duis cras tellus donec. Sed amet, cursus gravida sem integer vitae nisl libero. Eleifend ipsum rhoncus augue dui id integer quis platea dictum."
}]
export default function Card(){
  return (
    // <><div>abcd</div></>
    <CardBody>
      <CardTitle>
        <CardTText>{CardData[0].CardTitle}</CardTText>
        <CardDate>{CardData[0].CardDate}</CardDate></CardTitle>
      <CardAuthor>{CardData[0].CardAuthor}</CardAuthor>
      <CardDescription>
       {CardData[0].CardDescription}
      </CardDescription>
      <CardButton>Read More</CardButton>
    </CardBody>
  )
}

//For Card
var CardBody = styled.div`
width:90%;
padding: 30px 10px;
padding-left: 10%;
margin: 30px auto;
background-color: #2D2828;
font-size: 1.4rem;
`

var CardTitle = styled.div`
margin:auto;
text-align:center;
display: flex;
justify-content: space-around;
`
var CardTText = styled.p`
color:#FFFFFF;
`
var CardDate = styled.p`
color: #C2D4F8;
`

var CardAuthor = styled.p`
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
;
`
var CardDescription = styled.p`
  font-size: 0.8rem;
  color: #FFFFFF;
  padding-right:35%;
`
var CardButton = styled.button`
   font-size:1.2rem;
   padding:6px;
   color: white;
   background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
   border-radius:25px;
`
