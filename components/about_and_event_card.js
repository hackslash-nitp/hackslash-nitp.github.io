import Image from 'next/image'
import style from '@/styles/card.module.css'
import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'
import {IconContext} from "react-icons"
 
import topLeft from '@/assets/profileCard/left-small.png'
import topRight from '@/assets/profileCard/right-big.png'
import profilePic from '@/assets/profileCard/profile-pic.png'
import bottomLeft from '@/assets/profileCard/left-big.png'
import bottomRight from '@/assets/profileCard/right-small.png'

export default function card() {
  return (
    <div className={style.parentCard}>
      <div className={style.mainCardBox}>
        <div className={style.topImages}>
          <img src="/left-small.png" className={style.topLeftImage} alt="top left Image" />
          <img src="/right-big.png" className={style.topRightImage} alt="top left Image" />
        </div>

        <div className={style.aboutContent}>
          <Image src={profilePic} className={style.profileImage} alt="profile picture" />
          <h1>Name</h1>
          <h3>Designation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur </p>
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