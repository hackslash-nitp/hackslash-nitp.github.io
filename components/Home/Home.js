import styles from '@/styles/home.module.css'
import Image from 'next/image'
import homeLogo from '@/assets/home/homeLogo.png'
import style from 'styled-components'

export default function Homepage() {
    return (
        <div className={styles.mainDiv}>
            <Image src={homeLogo} alt="girl-with-laptop" width={800} height={600}></Image>
            <div className={styles.infoDiv}>
                <div className={styles.infoDiv_right}>
                    <h3>We Are</h3>
                    <h1>HackSlash</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla purus porttitor sed. Neque ornare tempor, egestas vel, sed commodo cursus euismod egestas. At vulputate turpis et ultricies.</p>
                </div>
                         
            </div>
        </div>
    )
}
