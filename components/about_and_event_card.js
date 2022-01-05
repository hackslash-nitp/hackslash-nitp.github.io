import Link from 'next/link'
import {FaLinkedinIn, FaMedium, FaGithub, FaTwitter} from 'react-icons/fa'
import styled from 'styled-components'

export default function card(props) {
  if(props.image === undefined) return <></>
  return (
    <ParentCard>
      <MainCardBox>
        <TopImages>
          <TopLeftImage src="/left-small.png"  alt="top left Image" />
          <TopRightImage src="/right-big.png"  alt="top left Image" />
        </TopImages>

        <AboutContent>
          <ProfileImageDiv>
            <ProfileImage src={props.image} alt="loading" width="100" height="100" objectFit='contain' />
          </ProfileImageDiv>
          <h1>{props.name}</h1>
          <h3>{props.role}</h3>
          <p>{props.bio} </p>
          <Icons>
            { props.github &&
              <Link href={props.github}>
                <Github />
              </Link>
            }
            { props.linkedin &&
              <Link href={props.linkedin}>
                <LinkedIn />
              </Link>
            }
            { props.medium &&
              <Link href={props.medium}>
                <Medium />
              </Link>
            }
            { props.twitter &&
              <Link href={props.twitter}>
                <Twitter />
              </Link>
            }
            
          </Icons>
        </AboutContent>

        <BottomImages>
          <BottomLeftImage src="/left-big.png" alt="bottom left Image" />
          <BottomRightImage src="/right-small.png" alt="bottom right Image" />
        </BottomImages>
      </MainCardBox>
    </ParentCard>
  )
}

const TopLeftImage = styled.img`
    height: 140px;
    width: 140px;
`
const TopRightImage = styled.img`
    height: 250px;
    width: 200px;
    margin-top: -10px;
    margin-left: -30px;
`
const BottomLeftImage = styled.img`
    height: 250px;
    width: 200px;
    margin-left: -10px;
`
const BottomRightImage = styled.img`
    align-self: flex-end;
    height: 140px;
    width: 140px;
    margin-right: 10px;
    margin-bottom: -4px;
`

const ParentCard = styled.div`
    height: 32rem;
    width: 20rem;

    &:hover ${TopLeftImage}{ 
        transform: translate(-0.2rem, -0.2rem);
    }
    &:hover ${TopRightImage}{
        transform: translate(+0.4rem, -0.4rem);
    }
    &:hover ${BottomLeftImage}{
  
        transform: translate(-0.2rem, -0.2rem);
    }
    &:hover ${BottomRightImage}{
    
        transform: translate(0.4rem, 0.4rem);
    }
`
const MainCardBox = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    background: url("/card-background.svg") no-repeat;
    background-size:18.3rem 30rem;
`
const TopImages = styled.div`
  display: flex;
`

const AboutContent = styled.div`
    margin-top: -55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    & > h1{
      color: white;
      text-align: center;
    }

    & > h3{
      color: rgb(12, 161, 69);
      text-align: center;
    }

    & > p{
      width: 250px;
    text-align: center;
    color: white;
    min-height: 63px;
    }
`
const ProfileImageDiv = styled.div`
    border-radius: 50%;
     border: 7px solid green;
     width: 100px;
     height: 100px;
     overflow: hidden;
`
const ProfileImage = styled.img`
    min-width: 100%;
    width: 100%;
    height: auto;
`
const Icons = styled.div`
  margin: 20px 0px;
`
const LinkedIn = styled(FaLinkedinIn)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
    cursor: pointer;
`
const Medium = styled(FaMedium)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
    cursor: pointer;
`
const Github = styled(FaGithub)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
    cursor: pointer;
`
const Twitter = styled(FaTwitter)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
    cursor: pointer;
`
const BottomImages = styled.div`
    display: flex;
    margin-top: -140px;
`
