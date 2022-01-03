import Image from 'next/image'
import style from '@/styles/card.module.css'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import {IconContext} from "react-icons"
 
import topLeft from '@/assets/profileCard/left-small.png'
import topRight from '@/assets/profileCard/right-big.png'
import bottomLeft from '@/assets/profileCard/left-big.png'
import bottomRight from '@/assets/profileCard/right-small.png'

export default function card(props) {
  return (
    <div className={style.parentCard}>
      <div className={style.mainCardBox}>
        <div className={style.topImages}>
          <img src="/left-small.png" className={style.topLeftImage} alt="top left Image" />
          <img src="/right-big.png" className={style.topRightImage} alt="top left Image" />
        </div>

        <div className={style.aboutContent}>
          <Image src={props.image} className={style.profileImage} alt="profile picture" width="100%" height="100%" />
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
