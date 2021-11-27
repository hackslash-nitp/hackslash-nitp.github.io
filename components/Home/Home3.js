import styled from "styled-components";
import Image from "next/image";
import cupImg from "@/assets/home/CupImg.svg";
import member from "@/assets/home/members.svg";
import code from "@/assets/home/List.svg";
import proj from "@/assets/home/Guarantee.svg";

export default function Home3() {
  return (
    <Container>
      <Image src={cupImg} width={800} height={600} />
      <Text>
        <Heading>
          <p>At HackSlash</p> <span>We Have Done Some Great Stuffs.</span>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget egestas enim lorem diam nibh leo, morbi.
        </p>
        <Ul>
          <Li>
            <Image src={member} width={60} height={60} />
            <span>80+</span>
            <p>Memebers</p>
          </Li>
          <Li>
            <Image src={code} width={60} height={60} />
            <span>50000+</span>
            <p>Lines of Code</p>
          </Li>
          <Li>
            <Image src={proj} width={60} height={60} />
            <span>500+</span>
            <p>Projects</p>
          </Li>
        </Ul>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/home/Homepage_3.svg") center center/cover;
  display: flex;
  align-items: center;
  color: white;
`;

const Text = styled.div`
  width: 50%;
  padding-right: 15%;

  & > p {
    text-align: justify;
    font-size: 15px;
  }
`;
const Heading = styled.span`
  width: 100%;
  display: flex;
  font-size: 20px;
  flex-direction: column;

  & > p {
    color: #49ddac;
  }
  
  & > span {
    font-size: 34px;
    font-weight: 400;
  }
`;

var Ul = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

var Li = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;

  & > span{
    color: #49DDAC;
  }
`;
