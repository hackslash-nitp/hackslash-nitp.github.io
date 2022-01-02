import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Card from './Card'

const sortByDate = (a, b)=>{
  return (new Date(b.created_at) - new Date(a.created_at))
}

export default function projects1() {
  const [projects, setProjects] = useState([]);
  const [searchItem, setsearchItem]= useState('');

  const url = 'https://api.github.com/users/hackslash-nitp/repos'
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort(sortByDate)
        setProjects(sortedData)
      });
  }, [])

  useEffect(()=>{
    const getResults = async ()=>{
      if(searchItem===''){
        fetch(url)
        .then(response => response.json())
        .then(data => {
          setProjects(data.sort(sortByDate))
        });
      } else {
        fetch(url)
        .then(response => response.json())
        .then(data => {
          const results = data.filter((project) => project.name.toLowerCase().indexOf(searchItem.toLowerCase()) != -1 )
          console.log("searching...",results)
          setProjects(results.sort(sortByDate))
        });
        
      }
  }

  getResults()

  }, [searchItem])
  return (
    <>
      <Container>
        <FlexDiv>
          <Text>Our Project</Text>
          <Input 
            type='search' 
            name='search'
            value = {searchItem}
            placeholder="Search Projects..." 
            onChange = {(e)=> setsearchItem(e.target.value)}
          />
        </FlexDiv>
        
        <CardContainer>
          {projects.map((project, index) => {
              return <Card 
                          name={project['name'].charAt(0).toUpperCase() + project['name'].slice(1).replace('-', ' ').replace('_', ' ').replace('-', ' ')} 
                          url={project['html_url']} 
                          description={project['description']}
                          date={String(new Date(project['created_at'])).split(' ').slice(1, 4)}
                          key= {index}/>
                          
            })}
        </CardContainer>
        
      </Container>
    </>
  )
}

var Container = styled.div`
    background: url('/errorPage/ErrorPage.svg');
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 10%;
`

var FlexDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`

const Text = styled.span`
  background: linear-gradient(90deg, #00FF9D 3.5%, #00E7FF 86.04%);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: 400;
`

const Input = styled.input`
  width: 50%;
  max-width: 100%;
  height: 30%;
  border-radius: 35px;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin:10px 0px;

  font-weight: 300;
  font-family: 'Poppins','sans-serif';
  border: #69F8A2 solid 1.5px;
  background-color: rgba(256, 256, 256, 0.3);
  
  &::placeholder{
    color: whitesmoke;
  }
`



// Card Container 

var CardContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 50% 50%;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`