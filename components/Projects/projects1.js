import styled from 'styled-components'
import Card from './Card'
export default function projects1() {
  return (
    <>
      <BGrid>
        <UGrid1>
          <Text>Our Project</Text>
        </UGrid1>
        <UGrid2>
          <Input />
        </UGrid2>
        <CardGrid1>
          <Card />
        </CardGrid1>
        <CardGrid2>
          <Card />
        </CardGrid2>
      </BGrid>
{/* page 2 */}
      <BGrid1>
        <CardGrid3>
          <Card />
        </CardGrid3>
        <CardGrid4>
          <Card />
        </CardGrid4>
        <CardGrid5>
          <Card />
        </CardGrid5>
        <CardGrid6>
          <Card />
        </CardGrid6>
      </BGrid1>
{/* page 3 */}
      <BGrid2>
        <CardGrid7>
          <Card />
        </CardGrid7>
        <CardGrid8>
          <Card />
        </CardGrid8>
        <CardGrid9>
          <Card />
        </CardGrid9>
        <CardGrid10>
          <Card />
        </CardGrid10>
      </BGrid2>
    </>
  )
}
var BGrid = styled.div`
    background: url('/errorPage/ErrorPage.svg');
    text-align:center;
    height:1000px;
    display: grid;
    grid-template-rows: 20px,20px,60px,60px;
    grid-template-columns:repeat(2,1fr);
    row-gap:10px;
    column-gap: 10px;
`
var BGrid1 = styled.div`
    background: url('/errorPage/ErrorPage.svg');
    text-align:center;
    height:1000px;
    display: grid;
    grid-template-rows:80px,80px;
    grid-template-columns:repeat(2,1fr);
    row-gap:10px;
    column-gap: 10px;
`
var BGrid2 = styled.div`
    background: url('/errorPage/ErrorPage.svg');
    text-align:center;
    height:1000px;
    display: grid;
    grid-template-rows:80px,80px;
    grid-template-columns:repeat(2,1fr);
    row-gap:10px;
    column-gap: 10px;
`
var UGrid1 = styled.div`
// background-color:blue;
font-size:30px;
 grid-column-start: 1;
 grid-column-end: 2;
 grid-row-start:2;
grid-row-end: 3;
`
var UGrid2 = styled.div`
// background-color:blue;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:2;
grid-row-end: 3;
`
var CardGrid1 = styled.div`
// background-color:orange;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start:3;
grid-row-end: 4;
`
var CardGrid2 = styled.div`
// background-color:green;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:3;
grid-row-end: 4;
`
var CardGrid3 = styled.div`
// background-color:orange;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start:1;
grid-row-end: 2;
`
var CardGrid4 = styled.div`
// background-color:green;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:1;
grid-row-end: 2;
`
var CardGrid5 = styled.div`
// background-color:orange;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start:2;
grid-row-end: 3;
`
var CardGrid6 = styled.div`
// background-color:green;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:2;
grid-row-end: 3;
`
var CardGrid7 = styled.div`
// background-color:orange;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start:1;
grid-row-end: 2;
`
var CardGrid8 = styled.div`
// background-color:green;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:1;
grid-row-end: 2;
`
var CardGrid9 = styled.div`
// background-color:orange;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start:2;
grid-row-end: 3;
`
var CardGrid10 = styled.div`
// background-color:green;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start:2;
grid-row-end: 3;
`
var Text = styled.h1`
font-family: Poppins;
font-style: normal;
font-size: 96px;
color:linear-gradient(94.77deg, #00FF9D 3.5%, #00E7FF 86.04%);

`
// for input

var Input = styled.input`
  font-size:50px;
  text-align:center;
  width: 545px;
  height: 78px;  
  margin-top:100px;
  border-radius:20px;
  background: #6A6969;
  border:4px solid linear-gradient(94.77deg, #00FF9D 3.5%, #00E7FF 86.04%);
`
