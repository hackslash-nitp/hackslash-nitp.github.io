import Image from 'next/image'
import style from '@/styles/card.module.css'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import {IconContext} from "react-icons"
import styled from 'styled-components'

export default function card(props) {
  if(props.image === undefined) return <></>
  return (
    <div className={style.parentCard}>
      <div className={style.mainCardBox}>
        <div className={style.topImages}>
          <img src="/left-small.png" className={style.topLeftImage} alt="top left Image" />
          <img src="/right-big.png" className={style.topRightImage} alt="top left Image" />
        </div>

        <div className={style.aboutContent}>
          <div className={style.profileImageDiv}>
            <Image src={props.image} className={style.profileImage} alt="profile picture" width="100" height="100" objectFit='contain' />
          </div>
          <h1>{props.name}</h1>
          <h3>{props.role}</h3>
          <p>{props.bio} </p>
          <div className={style.icons}>
              <FaLinkedinIn className={style.linkIcons}/>
              <FaTwitter className={style.linkIcons}/>
              <FaGithub className={style.linkIcons}/>
          </div>
        </div>

        <div className={style.bottomImages}>
          <img src="/left-big.png" className={style.bottomLeftImage} alt="top left Image" />
          <img src="/right-small.png" className={style.bottomRightImage} alt="top left Image" />
        </div>
      </div>
    </div>
  )
}

const ParentCard = styled.div`
    height: 32rem;
    width: 20rem;

    &:hover ${TopLeftImage}{
      .topLeftImage {
        transform: translate(-0.2rem, -0.2rem);
      }
    }
    &:hover ${TopRightImage}{
      .topRightImage {
        transform: translate(+0.4rem, -0.4rem);
      }
    }
    &:hover ${BottomLeftImage}{
      .bottomLeftImage {
        transform: translate(-0.2rem, -0.2rem);
      }
    }
    &:hover ${BottomRightImage}{
      .bottomRightImage {
        transform: translate(0.4rem, 0.4rem);
      }
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
const AboutContent = styled.div`
    margin-top: -55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    & > h1{
      color: white;
    }

    & > h3{
      color: rgb(12, 161, 69);
    }

    & > p{
      width: 250px;
    text-align: center;
    color: white;
    }
`
const ProfileImageDiv = styled.div`
    border-radius: 50%;
     border: 7px solid green;
     width: 100px;
     height: 100px;
     overflow: hidden;
`
const profileImage = styled.img`
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
`
const Twitter = styled(FaTwitter)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
`
const Github = styled(FaGithub)`
  transform: scale(2);
    margin: 0 15px;
    color: white;
`
const BottomImages = styled.div`
    display: flex;
    margin-top: -140px;
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