import styled from 'styled-components'
import Image from 'next/image'
import ShoppingLove from '@/assets/contact/shopping-love.svg'

export default function Contact1() {
  return (
    <Container>
        <Text>
          <Heading>Our Alumini</Heading>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, aliquam quis nisi, id. Non lacus sed nulla ac sit posuere dui. Tristique tristique fames nec ultricies sapien nisl feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, aliquam quis nisi, id. Non lacus sed nulla ac sit posuere dui. Tristique tristique fames nec ultricies sapien nisl feugiat.</p>
        </Text>
        <Image src={ShoppingLove} alt="Shopping Love" width={800} height={600}/>
    </Container>
    )
  }

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/contact/contact_background.svg") center center/cover;
  display: flex;
  align-items: center;
  padding: 5%;
  color: white;
`

const Text = styled.div`
  width: 50%;
  text-align: justify;

  & > p :first {
    font-size: 18px;
  }

  & > span {
    font-size: 48px;
  }
`
const Heading = styled.span`
  width: 50%;
  background: -webkit-linear-gradient(right, #00FF9D, #00E7FF);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
`
