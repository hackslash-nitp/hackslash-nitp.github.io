import { useState, useEffect } from 'react'

import styled from 'styled-components'
import Card from '../about_and_event_card'
import eventsJson from './event.json';

export default function AllEvents() {
  const [all_events, setEvents] = useState([]);
  const url = 'https://www.eventbriteapi.com/v3/organizations/544604903183/events/?token=QCITQBPHYXMKFWP3FXXP'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setEvents(data['events']))
  }, [])

  return (
    <Container>
        <Text>
          {/* <Heading>Our Alumini</Heading>
          <br />
          <span>Conquering The World Of Tech</span> */}
        </Text>
        <CardContainer>
          {all_events.map((event) => {
            return <Card key={event['name']['html']}
                          name={event['name']['html']}
                          description={event['description']['html']}
                          url={event['url']}
                          image={event['logo']['url']}
                          start={String(new Date(event['start']['local']))}
                          end={String(new Date(event['end']['local']))} />
          })}

          {
            eventsJson.map(event =>{
              <Card key = {event.name} 
                    name = {event.name}
                    url = {event.link}
                    image = {event.photo}
                    date = {event.Date}
                    description = {event.department}
              />
            })
          }
        </CardContainer>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  background: url("/contact/contact_background.svg") center center/cover;
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
  flex-wrap: wrap;
`
