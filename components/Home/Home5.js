import styled from "styled-components";
import hackslashLogo from "@/assets/hackslash_logo.svg"
import Image from 'next/image'

export default function Home5() {
  return (
    <MainDiv>
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
            <Image src={hackslashLogo} height={40} width={40} />
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
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                    </LinksList>
                </div>

                <div>
                    <LinksListHeading>USEFUL LINKS</LinksListHeading>
                    <LinksList>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                    </LinksList>
                </div>

                <div>
                    <LinksListHeading>USEFUL LINKS</LinksListHeading>
                    <LinksList>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                        <LinkedListItem>
                            Blogs
                        </LinkedListItem>
                    </LinksList>
                </div>
            </FooterLinksDiv>

      </FooterMainDiv>
          <Copyright> Copyright © 2021, HackSlash.org . Privacy | Terms of service</Copyright>
    </MainDiv>
  );
}

const ContactUs = styled.div`
  height: 10%;
  color: white;
`
const ContactusSpan = styled.span`
  background: linear-gradient(94.77deg, #00FF9D 3.5%, #00E7FF 86.04%);
  background-clip: initial;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
`
const MainDiv = styled.div`
  background: url('/home/Homepage_5_background.png') center center/cover;
  height: 100vh;
  padding: 5%;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  margin-right: 20px;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin:10px 0px;
  border: none;
  outline: rgba(171, 239, 254, 1);
  background-color: rgba(256, 256, 256, 0.3);
  &:hover {
    outline: 2px solid green;
  }
  &::placeholder{
    color: whitesmoke;
  }
`
const TextArea = styled.textarea`
  height: 50%;
  width: 400px;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin: 10px 0px;
  margin-left: 30px;

  border: none;
  outline: rgba(171, 239, 254, 1);
  background-color: rgba(256, 256, 256, 0.3);
  resize: none;
  &:hover {
    outline: 2px solid green;
  }
  &::placeholder{
    color: whitesmoke;
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
`
const AboutHackslashP = styled.div`
  width: 300px;
  color: white;
  text-align: justify;
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