import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Card from '../about_and_event_card'

/* members = [
   {member}, 
   {member}, 
   {member}, 
   {member}
 ] */

/* new_members_after_filter = {
    2021: [{member}, {member}],
    2020: [{member}, {member}]
    2022: [{member}, {member}]
  } */

/* new_members_after_sort = [
    {2020: [{member}, {member}]},
    {2021: [{member}, {member}]},
    {2022: [{member}, {member}]},
  ] */

const filterMembersByYear = (members) => {
  var new_members = {};
  members.forEach(member => {
    if (member['year'] === undefined){ member['year'] = 2019; }
    if(new_members[member['year']] === undefined){new_members[member['year']] = []}
    new_members[member['year']].push(member)
  });
  return new_members;
}

const sortByYear = (members) => {
  var new_members = Object.keys(members).sort().map((year) => {
    return {[year]: members[year]}
  })
  return new_members
}

export default function About2() {
  const [all_members, setMembers] = useState([]);
  const url = "/api/members";

  useEffect(()=>{
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => setMembers(  sortByYear(filterMembersByYear(data))  ))
  }, [])
  
  return (
    <Container>
        <Text>
          <Heading>Our Team</Heading>
          <br />
          <span>Conquering The World Of Tech</span>
        </Text>

        {all_members.map((members_by_year) => {
          var year = Object.keys(members_by_year)[0];
          return <><Heading>{year}</Heading>
                    <CardContainer>
                    {members_by_year[year].map((member) => {
                      return <CardItem key={member['name']}
                                        name={member['name']} 
                                        image={member['image']}
                                        bio={member['bio']}
                                        role={member['role']}
                                        linkedin={member['linkedin']}
                                        github={member['github']}/>
                    })}
                  </CardContainer>
          </>
        })}
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  background: url("/about/About_2_background.svg") center center/cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Heading = styled.span`
  background: -webkit-linear-gradient(right, #00FF9D, #00E7FF);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  font-size: 2em;
  `

const Text = styled.div`
  font-size: 20px;
  
  & > span{
    color: white;
  }
`

const CardContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: space-between;
  flex-wrap : wrap;

  /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
} */
`
const CardItem = styled(Card)`
  /* max-width: 20%; */
`



