import styled from "styled-components";
import hackslashLogo from "@/assets/hackslash_logo.svg"
import Image from 'next/image'

export default function ContactUsFunc(props) {
  return (
    <MainDiv id={props.id}>
      <ContactUs><ContactusSpan>Contact Us</ContactusSpan></ContactUs>

      <div>
        <Form>
          <InputAndTextareaBox>
            <TwoInputBox>
              <Input type="text" name="email" placeholder="Email"/>
              <Input type="text" name="name" placeholder="Name"/>
            </TwoInputBox>
            <DivTextArea>
              <TextArea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter your message" />
            </DivTextArea>
          </InputAndTextareaBox>
          <SendMessageBtn type="submit">Send Message</SendMessageBtn>
        </Form>
      </div>

      <FooterMainDiv>
          <Logo>
            <Image src={hackslashLogo} alt="Hackslash Logo" height={40} width={40} />
            <HackslashSpan>HackSlash</HackslashSpan>
          </Logo>

            <FooterLinksDiv>
                <AboutHackslashP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet.</AboutHackslashP>

                <div>
                    <LinksListHeading>USEFUL LINKS</LinksListHeading>
                    <LinksList>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                          Sponsor us
                        </LinkedListItem>
                        <LinkedListItem>
                          Contact Us
                        </LinkedListItem>
                    </LinksList>
                </div>

                <div>
                    <LinksListHeading>PRODUCT</LinksListHeading>
                    <LinksList>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                          Sponsor us
                        </LinkedListItem>
                        <LinkedListItem>
                          Contact Us
                        </LinkedListItem>
                    </LinksList>
                </div>

                <div>
                    <LinksListHeading>CONTACT</LinksListHeading>
                    <LinksList>
                        <LinkedListItem>
                          hackslash@nitp.ac.in
                        </LinkedListItem>
                        <LinkedListItem>
                          Patna University Campus, Patna, Bihar 800005
                        </LinkedListItem>
                    </LinksList>
                </div>
            </FooterLinksDiv>

      </FooterMainDiv>
          <Copyright> Copyright © 2021, HackSlash.org . Privacy | Terms of service</Copyright>
    </MainDiv>
  );
}

const MainDiv = styled.section`
  background: url('/home/Homepage_5_background.png') center center/cover;
  min-height: 100vh;
  padding: 10%;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ContactUs = styled.div`
  height: 10%;
  /* padding-top: 5vh; */
  color: white;
` 
const ContactusSpan = styled.span`
  background: linear-gradient(94.77deg, #00FF9D 3.5%, #00E7FF 86.04%);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 400;
`
const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  margin-right: 20px;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin:10px 0px;

  font-weight: 300;
  font-family: 'Poppins','sans-serif';
  border: #69F8A2 solid 1.5px;
  background-color: rgba(256, 256, 256, 0.3);
  &:hover {
    outline: 2px solid green;
  }
  &::placeholder{
    color: whitesmoke;
  }
  @media (max-width: 768px) {
      width: 90%;
    }
    `
const TextArea = styled.textarea`
  height: 50%;
  width: 400px;
  color: white;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin: 10px 0px;
  margin-left: 30px;
  
  font-weight: 300;
  font-family: 'Poppins','sans-serif';
  border: #69F8A2 solid 1.5px;
  background-color: rgba(256, 256, 256, 0.3);
  resize: none;
  &:hover {
    outline: 2px solid green;
  }
  &::placeholder{
    color: whitesmoke;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 90%;
  }
`

const DivTextArea = styled.div`
  padding: 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const TwoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const InputAndTextareaBox = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
  }
`
const SendMessageBtn = styled.div`
  background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
  color:#FFFFFF;
  font-size:20px;
  border-radius:10px;
  width: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  transition: 1s;
  &:hover{
    background: linear-gradient(90deg, #5DB5DC 5.88%, #49DDAC 89.82%);
  }
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
  }
`
const Logo = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
font-size: 30px;
color: white;
font-weight: 600;
`
const HackslashSpan = styled.span`
  margin-left: 10px;
`
const FooterMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const FooterLinksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  
  & > div{
    max-width: 25%;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    & > div{
    max-width: 90%;
  }
  }
  `
const AboutHackslashP = styled.p`
  width: 450px;
  color: white;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
  }
`
const LinksList = styled.ul`
  list-style: none;
  color: white;
`
const LinkedListItem = styled.li`
  color: white;
  margin-left: 5px;
`
const LinksListHeading = styled.h3`
  color: white;
  font-weight: 600;
`
const Copyright = styled.p`
/* style={{textAlign: "center", color : "white"}} */
text-align: center;
color: white;
letter-spacing: 1.2px;
`