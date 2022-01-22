import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Card from './Card'

const sortByDate = (a, b)=>{
  return (new Date(b.created_at) - new Date(a.created_at))
}

export default function Projects1() {
  const [projects, setProjects] = useState([]);
  const [all_projects, setAllProjects] = useState([]);
  const [searchItem, setsearchItem]= useState('');

  const url = 'https://api.github.com/users/hackslash-nitp/repos'
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort(sortByDate)
        setAllProjects(sortedData)
        setProjects(sortedData)
      });
  }, [url])

  useEffect(()=>{
    if(searchItem===''){
      setProjects(all_projects)
    } else {
        const results = all_projects.filter((project) => project.name.toLowerCase().indexOf(searchItem.toLowerCase()) != -1 )
        setProjects(results.sort(sortByDate))        
    }
  }, [searchItem, all_projects])

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
          {projects.map((project) => {
            var project_topics = project['topics']
            if(project_topics.includes("web")){
              var team = "Web";
            }else if(project_topics.includes("android")){
              var team = "Android";
            }else if(project_topics.includes("ml")){
              var team = "ML";
            }else if(project_topics.includes("game")){
              var team = "Game";
            }
            else{
              return false
            }
            // need to paas a key value to remove unique key error in the array/list 
            return <Card key = {project['name']}
                        name = {project['name'].charAt(0).toUpperCase() + project['name'].slice(1).replaceAll('-', ' ').replaceAll('_', ' ')} 
                        url = {project['html_url']} 
                        description = {project['description']}
                        date = {String(new Date(project['created_at'])).split(' ').slice(1, 4)}
                        team = {team}/>
            })}
        </CardContainer>
        
      </Container>
    </>
  )
}

var Container = styled.div`
    background: url('/errorPage/ErrorPage.svg');
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
    align-items: center;
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
  min-width: 250px;
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