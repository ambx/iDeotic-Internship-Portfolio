import Link from 'next/link'
import Image from 'next/image'
import styles from "./styles.module.scss"
import headshot from '../../public/images/headshot.png'

export default function About(){
    return(
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>About me</h1>
            <hr className={styles.titleUnderline} />
            <div className={styles.box}>
                <div>
                    In the six fast-paced years of working (and adulting) in the marketing industry, I’ve worked with B2B SaaS startups across various domains.
                    <br /><br />
                    From social media automation suites to customer acquisition, engagement and retention tools. From machine learning to artificial intelligence and predictive analytics, I’ve had the chance to work with the smartest of brains across the globe. And I’m hoping some of it rubbed off on me! 
                    <br /><br />
                    I’ve led a high-performing team of digital marketers, community managers and content creators to work on B2B content marketing strategies designed to build an audience from ground up.
                    <br /><br />
                    My key strengths lie in marketing strategy, content management, content writing, research, social media and dropping sarcastic comments. 
                </div>
                <div>
                <Image className={styles.headshot}
                    src={headshot}
                    height="1000px"
                    width="700px"
                    alt="Picture of the author"
                />
                </div>
            </div>
        </div>
    )
}