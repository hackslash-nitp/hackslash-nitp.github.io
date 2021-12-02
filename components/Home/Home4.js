import styled from "styled-components";

export default function Home4(props) {
  return (
    <MainDiv id={props.id}>
      <LetterDiv>
        <p>REGISTER FOR OUR NEWSLETTER NOW </p>
      </LetterDiv>

      <div>
        <form>
          <InputMailSend>
            <input placeholder="Enter Your Email" type="text"></input>
            {/* <MailSend><Image src={mail}/></MailSend> */}
          </InputMailSend>
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </form>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  background: url("/home/Homepage_4.svg") center center/cover;
  height: 50vh;
  min-height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
  justify-content: center;
  flex-direction: column;

  &>div{
    width: 80%;
    padding: 0;
  }
}
`;
 
const LetterDiv = styled.div`
  width: 60%;
  font-size: 30px;
  font-weight: 400;
  color: #ffffff;
`;

const InputMailSend = styled.div`
  position: relative;

  & > input {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: white;
    padding: 12px;
    border: none;

    background-image: url("/home/home3-envelope.svg");
    background-position: right 10px top;
    background-repeat: no-repeat;
    background-size: contain;

    &:hover {
      outline: 2px solid green;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

const SubscribeBtn = styled.div`
  color: #ffffff;
  width: 150px;
  transition: 1s;
  font-size: 20px;
  margin-top: 20px;
  padding: 7px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #49ddac 5.88%, #5db5dc 89.82%);

  &:hover {
    background: linear-gradient(90deg, #5db5dc 5.88%, #49ddac 89.82%);
  }
  cursor: pointer;
`;
